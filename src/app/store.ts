import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import challengesSlice from "../features/challenges/challengesSlice";
import leaderboardSlice from "../features/leaderboard/leaderboardSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    challenges: challengesSlice,
    leaderboard: leaderboardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
