import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DataStore } from "@aws-amplify/datastore";
import { Challenge, LocalUser } from "../../../types";
import { RootState } from "../../app/store";
import {
  ChallengeType as ChallengeTypeModel,
  Challenge as ChallengeModel,
  ChatRoom,
  UserChatRoom,
  ChallengeUser,
  User,
} from "../../models";
import { getUserFromDatabase } from "../../app/util";

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
  void,
  string,
  { rejectValue: string; state: RootState }
>("challenges/join", async (challengeName: string, thunkAPI) => {
  try {
    const challengeToJoin = await findChallengeToJoin(challengeName);
    const user = await getUserFromDatabase(thunkAPI);

    await DataStore.save(
      new ChallengeUser({
        user: user,
        challenge: challengeToJoin,
      })
    );

    await addUserToChatRoom(challengeToJoin, user);
  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

const findChallengeToJoin = async (challengeName: string) => {
  const ChallengeTypeInst = (
    await DataStore.query(ChallengeTypeModel, (challengeNames) =>
      challengeNames.name.eq(challengeName)
    )
  )[0];

  const availableChallenges = await DataStore.query(
    ChallengeModel,
    (allChallenges) =>
      allChallenges.and((toJoinChallenge) => [
        toJoinChallenge.ChallengeType.id.eq(ChallengeTypeInst.id),
        toJoinChallenge.userCount.lt(15),
      ])
  );

  if (availableChallenges.length == 0) {
    const newChatRoom = await DataStore.save(new ChatRoom({}));
    const toJoin = await DataStore.save(
      new ChallengeModel({
        ChatRoom: newChatRoom,
        ChallengeType: ChallengeTypeInst,
        challengeChallengeTypeId: ChallengeTypeInst.id,
      })
    );
    return toJoin;
  }

  return availableChallenges[0];
};

const addUserToChatRoom = async (
  challengeToJoin: ChallengeModel,
  user: User
) => {
  const chatRoomToJoin = (
    await DataStore.query(ChatRoom, (chatRoom) =>
      chatRoom.id.eq(challengeToJoin.challengeChatRoomId || "")
    )
  )[0];
  await DataStore.save(
    new UserChatRoom({
      chatRoom: chatRoomToJoin,
      user: user,
    })
  );
};

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
