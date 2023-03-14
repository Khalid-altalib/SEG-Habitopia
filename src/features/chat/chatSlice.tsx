import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Chat, ChatDetails, Message } from "../../../types";
import {
  fetchChatMessages,
  fetchUserChats,
  getChatDetails,
  incrementCheckInValidation,
  sendChatCheckIn,
  sendChatMessage,
} from "./chatQueries";
import { RootState } from "@app/store";
import { Toast } from "react-native-toast-message/lib/src/Toast";

type ChatState = {
  chats: Chat[];
  fetchChats: {
    loading: boolean;
    error: string;
  };
  fetchMessages: {
    loading: boolean;
    error: string;
  };
  sendMessage: {
    loading: boolean;
    error: string;
  };
  fetchDetails: {
    loading: boolean;
    error: string;
  };
  sendCheckIn: {
    loading: boolean;
    error: string;
  };
  details?: ChatDetails;
  currentChatId?: string;
  pageNumber: number;
};

export const fetchDetails = createAsyncThunk<
  ChatDetails,
  string,
  { rejectValue: string }
>("chats/fetch-details", async (chatId, thunkAPI) => {
  try {
    const chatDetails = await getChatDetails(chatId);
    return chatDetails;
  } catch (error: any) {
    return thunkAPI.rejectWithValue("An error has occured");
  }
});

export const fetchChats = createAsyncThunk<
  Chat[],
  void,
  { rejectValue: string }
>("chats/fetch", async (_, thunkAPI) => {
  try {
    const chats = await fetchUserChats(thunkAPI);
    return chats;
  } catch (error: any) {
    const message = error.message;
    Toast.show({
      type: "error",
      text1: message,
    });
    return thunkAPI.rejectWithValue(message);
  }
});

export const fetchMessages = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("messages/fetch", async (chatId: string, thunkAPI) => {
  try {
    const state = thunkAPI.getState() as RootState;
    const { pageNumber } = state.chats;
    const messages = await fetchChatMessages(chatId, pageNumber);
    return { id: chatId, messages: messages };
  } catch (error: any) {
    const message = error.message;
    Toast.show({
      type: "error",
      text1: message,
    });
    return thunkAPI.rejectWithValue(message);
  }
});

export const sendMessage = createAsyncThunk<any, any, { rejectValue: string }>(
  "messages/send",
  async (data: { message: string; chatRoomID: string }, thunkAPI) => {
    try {
      const { message, chatRoomID } = data;
      const newMessage = await sendChatMessage(message, chatRoomID, thunkAPI);
      return { chatRoomId: chatRoomID, message: newMessage };
    } catch (error: any) {
      const message = error.message;
      Toast.show({
        type: "error",
        text1: message,
      });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const sendCheckIn = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("checkIn/send", async (chatID: string, thunkAPI) => {
  try {
    const checkIn = await sendChatCheckIn(chatID, thunkAPI);
    return { chatRoomId: chatID, checkIn: checkIn };
  } catch (error: any) {
    const message = error.message;
    Toast.show({
      type: "error",
      text1: message,
    });
    return thunkAPI.rejectWithValue(message);
  }
});

export const validateCheckIn = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("checkIn/validate", async (messageId: string, thunkAPI) => {
  try {
    const newCheckIn = await incrementCheckInValidation(messageId, thunkAPI);
  } catch (error: any) {
    const message = error.message;
    Toast.show({
      type: "error",
      text1: message,
    });
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState: ChatState = {
  chats: [],
  fetchChats: {
    loading: false,
    error: "",
  },
  fetchMessages: {
    loading: false,
    error: "",
  },
  sendMessage: {
    loading: false,
    error: "",
  },
  fetchDetails: {
    loading: false,
    error: "",
  },
  sendCheckIn: {
    loading: false,
    error: "",
  },
  details: undefined,
  currentChatId: undefined,
  pageNumber: 0,
};

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addMessageToChat: (
      state,
      action: PayloadAction<{ chatID: string; message: Message }>
    ) => {
      const { chatID, message } = action.payload;
      const chat = state.chats.find((chat) => chat.id === chatID);
      if (chat) {
        chat.messages?.unshift(message);
      }
    },
    setCurrentChatId: (state, action: PayloadAction<string>) => {
      const chatId = action.payload;
      state.currentChatId = chatId;
    },
    updateCheckInMessage: (
      state,
      action: PayloadAction<{ chatID: string; message: Message }>
    ) => {
      const { chatID, message } = action.payload;
      const chat = state.chats.find((chat) => chat.id === chatID);
      const updatedChat = chat?.messages?.map((oldMessage) => {
        if (oldMessage.id === message.id) {
          return message;
        } else {
          return oldMessage;
        }
      });
      if (chat) {
        chat.messages = updatedChat;
      }
    },
    resetPageNumber: (state) => {
      state.pageNumber = 0;
    },
    updateChatList: (
      state,
      action: PayloadAction<{
        chatID?: string;
        updatedAt?: string;
        lastMessage?: string;
      }>
    ) => {
      const { chatID, updatedAt, lastMessage } = action.payload;
      const chat = state.chats.find((chat) => chat.id === chatID);

      if (chat) {
        if (updatedAt !== undefined) {
          chat.time = updatedAt;
        }
        if (lastMessage !== undefined && lastMessage !== "") {
          chat.text = lastMessage;
        }
        chat.unreadMessages += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChats.pending, (state) => {
      state.fetchChats.loading = true;
    });
    builder.addCase(
      fetchChats.fulfilled,
      (state, action: PayloadAction<Chat[]>) => {
        state.chats = action.payload;
        state.fetchChats.loading = false;
      }
    );
    builder.addCase(fetchChats.rejected, (state, action: any) => {
      state.chats = [];
      state.fetchChats.loading = false;
      state.fetchChats.error = action.payload;
    });
    builder.addCase(fetchMessages.pending, (state) => {
      state.fetchMessages.loading = true;
    });
    builder.addCase(
      fetchMessages.fulfilled,
      (state, action: PayloadAction<{ id: string; messages: Message[] }>) => {
        const chat = state.chats.find((chat) => chat.id === action.payload.id);

        if (chat) {
          if (state.pageNumber == 0) chat.messages = action.payload.messages;
          else chat.messages?.push(...action.payload.messages);
          chat.unreadMessages = 0;
        }
        state.pageNumber += 1;

        state.fetchMessages.loading = false;
      }
    );
    builder.addCase(fetchMessages.rejected, (state, action: any) => {
      const chat = state.chats.find((chat) => chat.id === action.payload.id);
      if (chat) chat.messages = [];
      state.fetchMessages.loading = false;
      state.fetchMessages.error = action.payload;
    });
    builder.addCase(sendMessage.pending, (state) => {
      state.sendMessage.loading = true;
    });
    builder.addCase(
      sendMessage.fulfilled,
      (
        state,
        action: PayloadAction<{ chatRoomId: string; message: Message }>
      ) => {
        const chat = state.chats.find(
          (chat) => chat.id === action.payload.chatRoomId
        );
        if (chat) {
          chat.messages?.unshift(action.payload.message);
        }
        state.fetchMessages.loading = false;
      }
    );
    builder.addCase(sendMessage.rejected, (state, action: any) => {
      state.sendMessage.loading = false;
      state.sendMessage.error = action.payload;
    });
    builder.addCase(
      fetchDetails.fulfilled,
      (state, action: PayloadAction<ChatDetails>) => {
        state.fetchDetails.loading = false;
        state.fetchDetails.error = "";
        state.details = action.payload;
      }
    );
    builder.addCase(fetchDetails.pending, (state) => {
      state.fetchDetails.loading = true;
      state.details = undefined;
    });
    builder.addCase(fetchDetails.rejected, (state) => {
      state.fetchDetails.loading = false;
      state.fetchDetails.error = "An error has occured";
    });
    builder.addCase(sendCheckIn.pending, (state) => {
      state.sendCheckIn.loading = true;
    });
    builder.addCase(sendCheckIn.rejected, (state, action: any) => {
      state.sendCheckIn.loading = false;
      state.sendCheckIn.error = action.payload;
    });
    builder.addCase(
      sendCheckIn.fulfilled,
      (
        state,
        action: PayloadAction<{ chatRoomId: string; checkIn: Message }>
      ) => {
        const chat = state.chats.find(
          (chat) => chat.id === action.payload.chatRoomId
        );
        if (chat) {
          chat.messages?.unshift(action.payload.checkIn);
        }
        state.fetchMessages.loading = false;
      }
    );
  },
});

export const {
  addMessageToChat,
  setCurrentChatId,
  updateCheckInMessage,
  resetPageNumber,
  updateChatList,
} = chatSlice.actions;

export default chatSlice.reducer;
