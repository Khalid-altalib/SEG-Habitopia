// Habitopia
import { RootState } from "./store";

/**
 * Retrieves the current user from the Redux state.
 *
 * @param state - The Redux state.
 * @returns - The current user from the Redux state.
 */
export const selectUser = (state: RootState) => state!.auth!.user;

/**
 * Retrieves the list of (types of) challenges from the Redux state.
 *
 * @param state - The Redux state.
 * @returns - The list of (types of) challenges from the Redux state.
 */
export const selectChallenges = (state: RootState) => state!.challenges;

/**
 * Retrieves the current user's profile from the Redux state.
 *
 * @param state - The Redux state.
 * @returns - The current user's profile from the Redux state.
 */
export const selectProfile = (state: RootState) => state!.profile;
