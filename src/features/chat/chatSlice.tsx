import {getUserFromDatabase} from '../../app/util';
import { Checkin } from '../../models/index.js';
import { DataStore } from '@aws-amplify/datastore';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Chat, ChatDetails, Message } from "../../../types";
import {
  fetchChatMessages,
  fetchUserChats,
  getChatDetails,
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
  currentChatId?: string;
};

export const fetchDetails = createAsyncThunk<
  ChatDetails,
  string,
  { rejectValue: string }
>("chats/fetch-details", async (chatId, thunkAPI) => {
  try {
    const chatDetails = await getChatDetails(chatId);
    // return {
    //   statistics: {
    //     started: "04/03/22",
    //     ending: "19/03/22",
    //   },
    //   participants: [
    //     { userId: "1", name: "Bob" },
    //     { userId: "2", name: "Tom" },
    //   ],
    // };
    return chatDetails;
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

export const checkIn = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>(
  "checkin",
  async (chatroomID: string, thunkAPI) => {
    try {
      console.log(chatroomID);
      const userID = (await getUserFromDatabase(thunkAPI)).id;
      console.log(userID);

      await DataStore.save( 
      new Checkin({ // create AWSDateTime object
          timeStamp:  new Date().toISOString(),
          userID: userID,
          chatroomID: chatroomID,
      })
  );
  console.log("checkin saved")

    } catch (error: any) {
      const message = error.message;
      console.log("failed to checkin");
      console.log(message);
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
  currentChatId: undefined,
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

export const { addMessageToChat, setCurrentChatId } = chatSlice.actions;

export default chatSlice.reducer;
