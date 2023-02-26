import { RootState } from "./store";

export const selectUser = (state: RootState) => state!.auth!.user;
export const selectChallenges = (state: RootState) => state!.challenges;
export const selectProfile = (state: RootState) => state!.profile;
