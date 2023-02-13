import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import leaderboardReducer from "../features/leaderboard/leaderboardSlice";
import challengesReducer from "../features/challenges/challengesSlice";
import profileReducer from "../features/profile/profileSlice";
import chatsReducer from "../features/chat/chatSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    challenges: challengesReducer,
    leaderboard: leaderboardReducer,
    profile: profileReducer,
    chats: chatsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
