import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Chat, ChatDetails, Message } from "../../../types";
import {
  fetchChatMessages,
  fetchUserChats,
  sendChatMessage,
} from "./chatQueries";

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
  details?: ChatDetails;
};

export const fetchDetails = createAsyncThunk<
  ChatDetails,
  string,
  { rejectValue: string }
>("chats/fetch-details", async (chatId, thunkAPI) => {
  try {
    return {
      statistics: {
        started: "04/03/22",
        ending: "19/03/22",
      },
      participants: [
        { userId: "1", name: "Bob" },
        { userId: "2", name: "Tom" },
      ],
    };
    // BACKEND PLACEHOLDER
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
    return thunkAPI.rejectWithValue(message);
  }
});

export const fetchMessages = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("messages/fetch", async (chatId: string, thunkAPI) => {
  try {
    const messages = await fetchChatMessages(chatId);
    return { id: chatId, messages: messages };
  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const sendMessage = createAsyncThunk<
  Message,
  any,
  { rejectValue: string }
>(
  "messages/send",
  async (message: { message: string; chatRoomID: string }, thunkAPI) => {
    try {
      const newMessage = await sendChatMessage(
        message.message,
        message.chatRoomID,
        thunkAPI
      );
      return newMessage;
    } catch (error: any) {
      const message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
  details: undefined,
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
          chat.messages = action.payload.messages;
        }
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
  },
});

export const { addMessageToChat } = chatSlice.actions;

export default chatSlice.reducer;
