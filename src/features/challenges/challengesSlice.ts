import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type ChallengesState = {
  challenges: Array<object>;
  loading: boolean;
  error: string;
};

const initialState: ChallengesState = {
  challenges: [],
  loading: false,
  error: "",
};
