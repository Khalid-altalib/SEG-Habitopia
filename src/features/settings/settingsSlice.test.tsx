import configureStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import { setSettings } from "./settingsSlice";
import { DataStore } from "aws-amplify";
import { getUserFromDatabase } from "../../app/util";
import mockUser from "@app/mockUser";

jest.mock("../../app/util", () => ({
  getUserFromDatabase: jest.fn(() => mockUser),
}));

jest.mock("aws-amplify", () => ({
  DataStore: {
    save: jest.fn(),
    query: jest.fn(),
  },
}));

const mockStore = configureStore([thunk]);

describe("settingsSlice", () => {
  let store: MockStore;

  beforeEach(() => {
    store = mockStore({
      auth: {
        user: mockUser,
      },
      settings: {
        loading: false,
        error: "",
      },
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("setSettings", () => {
    it("should update the user settings correctly", async () => {
      const settings = {
        name: "New name",
        notifications: false,
        biography: "New bio",
      };

      await store.dispatch(setSettings(settings));

      expect(getUserFromDatabase).toHaveBeenCalled();
      expect(DataStore.save).toHaveBeenCalledWith(
        expect.objectContaining({
          id: "123",
          name: "New name",
          notifications: false,
          biography: "New bio",
        })
      );
    });

    it("should dispatch the correct actions on success", async () => {
      await store.dispatch(setSettings({}));

      const actions = store.getActions();

      expect(actions[0].type).toEqual("settings/set/pending");
      expect(actions[1].type).toEqual("settings/set/fulfilled");
    });

    it("should dispatch the correct actions on failure", async () => {
      const errorMessage = "Something went wrong!";
      (getUserFromDatabase as jest.Mock).mockRejectedValue(
        new Error(errorMessage)
      );

      await store.dispatch(setSettings({}));

      const actions = store.getActions();

      expect(actions[0].type).toEqual("settings/set/pending");
      expect(actions[1].type).toEqual("settings/set/rejected");
      expect(actions[1].payload).toEqual(errorMessage);
    });
  });
});
