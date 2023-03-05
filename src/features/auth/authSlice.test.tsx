import { configureStore } from "@reduxjs/toolkit";
import { signUpUser, logInUser, logOutUser } from "./authSlice";
import authReducer from "./authSlice";

describe("authSlice", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authReducer,
      },
    });
  });

  describe("signUpUser", () => {
    it("should sign up the user", async () => {
      await store.dispatch(signUpUser());

      const state = store.getState().auth;

      expect(state.user).toBeDefined();
    });

    it("should reject the value if sign up fails", async () => {
      const rejectValue = "error message";

      try {
        await store.dispatch(signUpUser());
      } catch (error: any) {
        expect(error.message).toEqual(rejectValue);
      }
    });
  });

  describe("logInUser", () => {
    it("should log in the user", async () => {
      await store.dispatch(logInUser());

      const state = store.getState().auth;

      expect(state.user).toBeDefined();
    });

    it("should reject the value if log in fails", async () => {
      const rejectValue = "error message";

      try {
        await store.dispatch(logInUser());
      } catch (error: any) {
        expect(error.message).toEqual(rejectValue);
      }
    });
  });

  describe("logOutUser", () => {
    it("should log out the user", async () => {
      await store.dispatch(logOutUser());

      const state = store.getState().auth;

      expect(state.user).toBeUndefined();
    });
  });
});
