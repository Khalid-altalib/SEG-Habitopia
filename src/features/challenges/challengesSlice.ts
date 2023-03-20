import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DataStore } from "@aws-amplify/datastore";
import { Challenge } from "../../../types";
import { RootState } from "../../app/store";
import { ChallengeType as ChallengeTypeModel, ChallengeUser } from "../../models";
import { joinChallengeQuery } from "./challengeQueries";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export type ChallengesState = {
  challenges: Challenge[];
  fetchChallenges: {
    loading: boolean;
    error: string;
  };
  joinChallenge: {
    loading: boolean;
    error: string;
  };
};

export const fetchChallenges = createAsyncThunk<
  Challenge[],
  void,
  { rejectValue: string }
>("challenges/fetch", async (_, thunkAPI) => {
  try {
    const response = await DataStore.query(ChallengeTypeModel);
    const data = response.map((item) => (item = { ...item }));
    return data;
  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

const displayErrorMessage = (error: any) => {
  let errorMessage = "";
  // looked into error messages and found what is presented for the different errors
  if (error.message.includes("already part of the challenge")) {
    errorMessage = "You are already a part of this challenge!";
  } else {
    errorMessage = error.message;
  }
  Toast.show({
    type: "error",
    text1: errorMessage,
  });
}

export const joinChallenge = createAsyncThunk<
  Challenge,
  string,
  { rejectValue: string; state: RootState }
>("challenges/join", async (challengeName: string, thunkAPI) => {
  try {
    const challengeTypeInstance = (
      await DataStore.query(ChallengeTypeModel, (challengeNames) =>
        challengeNames.name.eq(challengeName)
      )
    )[0];

    await joinChallengeQuery(challengeTypeInstance, thunkAPI);

    Toast.show({type: "success", text1: "Welcome to the challenge!"})

    return { ...challengeTypeInstance };
  } catch (error: any) {
    displayErrorMessage(error)
    return thunkAPI.rejectWithValue("An error has occured");
  }
});

const initialState: ChallengesState = {
  challenges: [],
  fetchChallenges: {
    loading: false,
    error: "",
  },
  joinChallenge: {
    loading: false,
    error: "",
  },
};

export const challengesSlice = createSlice({
  name: "challenges",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChallenges.pending, (state) => {
      state.fetchChallenges.loading = true;
    });
    builder.addCase(
      fetchChallenges.fulfilled,
      (state, action: PayloadAction<Challenge[]>) => {
        state.challenges = action.payload;
        state.fetchChallenges.loading = false;
      }
    );
    builder.addCase(fetchChallenges.rejected, (state, action: any) => {
      state.challenges = [];
      state.fetchChallenges.loading = false;
      state.fetchChallenges.error = action.payload;
    });
    builder.addCase(joinChallenge.pending, (state) => {
      state.joinChallenge.loading = true;
    });
    builder.addCase(
      joinChallenge.fulfilled,
      (state, action: PayloadAction<any>) => {
        const joinedChallengeName = action.payload.name;
        state.challenges = state.challenges.map((challenge) => {
          if (challenge.name == joinedChallengeName) {
            return { ...challenge, active: true };
          } else {
            return challenge;
          }
        });
        state.joinChallenge.loading = false;
        state.joinChallenge.error = "";
      }
    );
    builder.addCase(joinChallenge.rejected, (state, action: any) => {
      state.joinChallenge.loading = false;
      state.joinChallenge.error = action.payload;
    });
  },
});

export default challengesSlice.reducer;
