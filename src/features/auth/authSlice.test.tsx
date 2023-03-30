import configureStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import {
  signUpUser,
  logInUser,
  sendConfirmationCode,
  logOutUser,
} from "./authSlice";
import { Auth } from "aws-amplify";
import { RootState } from "@app/store";

jest.mock("./authQueries");
jest.mock("aws-amplify");

const mockStore = configureStore([thunk]);

describe("authSlice", () => {
  let store: MockStore;

  beforeEach(() => {
    store = mockStore({
      auth: {
        signUpData: {
          email: "test@test.com",
          password: "password",
          name: "Test User",
          confirmationCode: "123456",
        },
        logInData: {
          email: "test@test.com",
          password: "password",
        },
        user: undefined,
        loading: false,
        error: "",
      },
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("signUpUser", () => {
    it("should call Auth.signUp with the correct parameters", async () => {
      const signUpMock = jest.fn();
      (Auth.signUp as jest.Mock).mockImplementation(signUpMock);

      await store.dispatch(signUpUser());

      expect(signUpMock).toHaveBeenCalledWith({
        username: "test@test.com",
        password: "password",
        attributes: {
          name: "Test User",
        },
      });
    });

    it("should dispatch the correct actions on success", async () => {
      await store.dispatch(signUpUser());

      const actions = store.getActions();

      expect(actions[0].type).toEqual("auth/signUp/pending");
      expect(actions[1].type).toEqual("auth/signUp/fulfilled");
    });

    it("should dispatch the correct actions on failure", async () => {
      const errorMessage = "Something went wrong!";
      (Auth.signUp as jest.Mock).mockRejectedValue(new Error(errorMessage));

      await store.dispatch(signUpUser());

      const actions = store.getActions();

      expect(actions[0].type).toEqual("auth/signUp/pending");
      expect(actions[1].type).toEqual("auth/signUp/rejected");
      expect(actions[1].payload).toEqual(errorMessage);
    });
  });

  describe("logInUser", () => {
    it("should call Auth.signIn with the correct parameters", async () => {
      const signInMock = jest.fn().mockResolvedValue({
        signInUserSession: {
          idToken: {
            jwtToken: "token",
          },
        },
        attributes: {
          sub: "123",
        },
      });
      (Auth.signIn as jest.Mock).mockImplementation(signInMock);

      await store.dispatch(logInUser());

      expect(signInMock).toHaveBeenCalledWith("test@test.com", "password");
    });

    it("should dispatch the correct actions on success", async () => {
      const signInMock = jest.fn().mockResolvedValue({
        signInUserSession: {
          idToken: {
            jwtToken: "token",
          },
        },
        attributes: {
          sub: "123",
        },
      });
      (Auth.signIn as jest.Mock).mockImplementation(signInMock);

      await store.dispatch(logInUser());

      const actions = store.getActions();

      expect(actions[0].type).toEqual("auth/login/pending");
      expect(actions[1].type).toEqual("auth/login/fulfilled");
    });
  });

  describe("sendConfirmationCode", () => {
    it("should call Auth.confirmSignUp with the correct parameters", async () => {
      const confirmSignUpMock = jest.fn();
      (Auth.confirmSignUp as jest.Mock).mockImplementation(confirmSignUpMock);

      await store.dispatch(sendConfirmationCode());

      const state = store.getState() as RootState;
      const { email, confirmationCode } = state.auth.signUpData;

      expect(confirmSignUpMock).toHaveBeenCalledWith(email, confirmationCode);
    });

    it("should dispatch the correct actions on success", async () => {
      const signInMock = jest.fn().mockResolvedValue({
        signInUserSession: {
          idToken: {
            jwtToken: "token",
          },
        },
        attributes: {
          sub: "123",
        },
      });
      (Auth.signIn as jest.Mock).mockImplementation(signInMock);
      await store.dispatch(logInUser());
      await store.dispatch(sendConfirmationCode());

      const actions = store.getActions();
      console.log(actions);

      expect(actions[2].type).toEqual("auth/confirmation/pending");
      expect(actions[3].type).toEqual("auth/confirmation/fulfilled");
      expect(actions[3].payload).toBeDefined();
    });

    it("should dispatch the correct actions on failure", async () => {
      const errorMessage = "Something went wrong!";
      (Auth.confirmSignUp as jest.Mock).mockRejectedValue(
        new Error(errorMessage)
      );

      await store.dispatch(sendConfirmationCode());

      const actions = store.getActions();

      expect(actions[0].type).toEqual("auth/confirmation/pending");
      expect(actions[1].type).toEqual("auth/confirmation/rejected");
      expect(actions[1].payload).toEqual(errorMessage);
    });
  });

  describe("logoutUser", () => {
    it("should successfully log out the user", async () => {
      await store.dispatch(logOutUser());

      const actions = store.getActions();

      expect(actions[0].type).toEqual("auth/logOutUser/pending");
      expect(actions[1].type).toEqual("auth/logOutUser/fulfilled");
    });
  });
});
