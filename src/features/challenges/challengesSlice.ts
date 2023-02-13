import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Challenge, LocalUser } from "../../../types";

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

export const joinChallenge = createAsyncThunk<
  object,
  string,
  { rejectValue: string }
>("challenges/join", async (challengeName: string, thunkAPI) => {
  try {
    // const state = store.getState();
    // const localUser: LocalUser | null = state.auth.user;
    const response = await fetch("https://test/api/challenges/join", {
      method: "POST",
      body: JSON.stringify({ challengeName }),
      headers: {
        "Content-Type": "application/json",
      },
    }); //  BACKEND PLACEHOLDER
    return await response.json();
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
  extraReducers: (builder) => {
    builder.addCase(fetchChallenges.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchChallenges.fulfilled,
      (state, action: PayloadAction<Challenge[]>) => {
        state.challenges = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchChallenges.rejected, (state, action: any) => {
      state.challenges = [];
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(joinChallenge.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      joinChallenge.fulfilled,
      (state, action: PayloadAction<any>) => {
        const joinedChallengeName = action.payload.challengeName;
        state.challenges = state.challenges.map((challenge) => {
          if (challenge.name == joinedChallengeName) {
            return { ...challenge, active: true };
          } else {
            return challenge;
          }
        });
        state.loading = false;
        state.error = "";
      }
    );
    builder.addCase(joinChallenge.rejected, (state, action: any) => {
      state.challenges = [];
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default challengesSlice.reducer;
