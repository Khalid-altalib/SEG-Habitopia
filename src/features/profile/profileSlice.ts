import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "../../../types";
import { RootState } from "../../app/store";

type DataProfile = Profile & { loading: boolean; error: string };

export type ProfileState = {
  profiles: Array<DataProfile>;
};

const initialState: ProfileState = {
  profiles: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {},
});
