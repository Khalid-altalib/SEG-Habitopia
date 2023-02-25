import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Chat, Message } from "../../../types";
import { fetchChatMessages, fetchUserChats } from "./chatQueries";

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
};

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
};

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
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
          console.log(action.payload.messages);
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
  },
});

export const {} = chatSlice.actions;

export default chatSlice.reducer;
