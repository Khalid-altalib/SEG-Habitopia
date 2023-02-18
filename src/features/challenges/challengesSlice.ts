import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Challenge, LocalUser } from "../../../types";
import { RootState } from "../../app/store";
import { getAuthTokenFromThunk } from "../../app/util";

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
    const challenges = [
      {
        name: "Sleep",
        description:
          "Study everyday for a minimum of 5 hours or u not sigma lol",
        active: true,
      },
      {
        name: "Food",
        description: "Sleep earlier or u not sigma lol",
        active: true,
      },
      {
        name: "Fitness",
        description: "jim or u not sigma lol",
        active: false,
      },
      {
        name: "Sleep",
        description:
          "Study everyday for a minimum of 5 hours or u not sigma lol",
        active: true,
      },
      {
        name: "Food",
        description: "Sleep earlier or u not sigma lol",
        active: true,
      },
      {
        name: "Fitness",
        description: "jim or u not sigma lol",
        active: false,
      },
    ];

    return challenges;

    const response = await fetch("https://test/api/challenges", {
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthTokenFromThunk(thunkAPI),
      },
    }); //  BACKEND PLACEHOLDER
    return (await response.json()) as Challenge[];
  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const joinChallenge = createAsyncThunk<
  object,
  string,
  { rejectValue: string; state: RootState }
>("challenges/join", async (challengeName: string, thunkAPI) => {
  try {
    const response = await fetch("https://test/api/challenges/join", {
      method: "POST",
      body: JSON.stringify({ challengeName }),
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthTokenFromThunk(thunkAPI),
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
