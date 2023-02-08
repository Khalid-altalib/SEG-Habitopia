import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import challengesReducer from "../features/challenges/challengesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    challenges: challengesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;