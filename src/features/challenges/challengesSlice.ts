import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Challenge } from "../../../types";

type ChallengesState = {
  challenges: Challenge[];
  loading: boolean;
  error: string;
};

export const fetchChallenges = createAsyncThunk<
  Challenge[],
  void,
  { rejectValue: string }
>("challenges/fetch", async (_, thunkAPI) => {
  try {
    const response = await fetch("https://test/api/challenges"); //  BACKEND PLACEHOLDER
    return (await response.json()) as Challenge[];
  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState: ChallengesState = {
  challenges: [],
  loading: false,
  error: "",
};

export const challengesSlice = createSlice({
  name: "challenges",
  initialState,
  reducers: {},
  extraReducers: {},
});
