import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import chat from "../../../assets/data/chat.json";
import { Chat } from "../../../types";

type ChatState = {
  chats: Chat[];
};

export const fetchChats = createAsyncThunk<
  Chat[],
  void,
  { rejectValue: string }
>("chats/fetch", async (_, thunkAPI) => {
  try {
    const response = await fetch("https://test/api/challenges"); //  BACKEND PLACEHOLDER
    return (await response.json()) as Chat[];
  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState: ChatState = {
  chats: chat.map((item) => {
    return {
      id: item.id,
      name: item.user.name,
      image: item.user.image,
      text: item.lastMessage.text,
      time: item.lastMessage.createdAt,
    };
  }),
};

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
});

export default chatSlice.reducer;
