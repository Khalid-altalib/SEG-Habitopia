import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DataStore } from "@aws-amplify/datastore";
import { Challenge, LocalUser } from "../../../types";
import { RootState } from "../../app/store";
import { getAuthTokenFromThunk } from "../../app/util";
import {
  ChallengeType as ChallengeTypeModel,
  Challenge as ChallengeModel,
  ChatRoom,
  User,
  UserChatRoom,
} from "../../models";
import { useAppSelector } from "../../app/hooks";

type ChallengesState = {
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

export const joinChallenge = createAsyncThunk<
  object,
  string,
  { rejectValue: string; state: RootState }
>("challenges/join", async (challengeName: string, thunkAPI) => {
  try {
    const ChallengeTypeInst = await DataStore.query(ChallengeTypeModel, (c) =>
      c.name.eq(challengeName)
    );

    const response = await DataStore.query(ChallengeModel, (c) =>
      c.and((c) => [
        c.ChallengeType.id.eq(ChallengeTypeInst[0].id),
        c.userCount.lt(15),
      ])
    );
    console.log(response);
    const originalChatRoom = await DataStore.query(ChatRoom, (c) =>
      c.id.eq(response[0].challengeChatRoomId as string)
    );
    console.log(originalChatRoom);

    const user = await DataStore.query(User, (c) =>
      c.email.eq("litomimy@brand-app.biz")
    );

    console.log(user);
    const userChatRoom = await DataStore.save(
      new UserChatRoom({
        chatRoom: originalChatRoom[0],
        user: user[0],
      })
    );

    console.log(userChatRoom);
    await DataStore.save(
      ChatRoom.copyOf(originalChatRoom[0], (updated) => {
        updated.users?.push(userChatRoom);
      })
    );

    console.log(response);
    const data = response.map((item) => (item = { ...item }));
    return data;
  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
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
        const joinedChallengeName = action.payload.challengeName;
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
