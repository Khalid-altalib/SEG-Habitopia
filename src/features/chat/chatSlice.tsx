import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import chat from "../../../assets/data/chat.json";
import { Chat } from "../../../types";
import { DataStore } from "aws-amplify";
import { ChatRoom, Message, User } from "../../models";

type ChatState = {
  chats: Chat[];
  fetchChats: {
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
    const response = await DataStore.query(User, (c) =>
      c.email.eq("litomimy@brand-app.biz")
    );
    const chats = await DataStore.query(ChatRoom);
    const chatRooms = await response[0].ChatRooms.toArray();
    chatRooms.forEach((item) =>
      chats.filter((c) => {
        c.id === item.chatRoomId;
      })
    );
    const data: Chat[] = [];
    chats.forEach(async (item) => {
      data.push({
        id: item.id,
        name: "",
        image:
          "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
      } as Chat);
    });
    console.log(data);
    return data;
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
  },
});

export const {} = chatSlice.actions;

export default chatSlice.reducer;
