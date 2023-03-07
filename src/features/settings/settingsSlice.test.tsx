import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { setSettings, SettingsState, settingsSlice } from "./settingsSlice";

// create mock store
const mockStore = configureMockStore<SettingsState>([thunk]);

// create mock settings data
const mockSettings = {
  name: "Test Name",
  notifications: true,
  biography: "Test Biography",
  password: "Test Password",
  oldPassword: "Old Password",
};

describe("settingsSlice", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    // initialize mock store
    store = mockStore({
      settings: {
        email: "",
        password: "",
        notifications: false,
        name: "",
        biography: "",
      },
      fetchSettings: {
        loading: false,
        error: "",
      },
      setSettings: {
        loading: false,
        error: "",
      },
    });
  });

  describe("setSettings", () => {
    it("should dispatch correct actions and update settings state", async () => {
      // mock getUserFromDatabase function
      const getUserFromDatabase = jest.fn().mockReturnValue({
        email: "test@test.com",
        name: "Test User",
        notifications: false,
        biography: "Test Biography",
      });

      // mock DataStore save function
      const save = jest.fn();

      jest.mock("../../app/util", () => ({
        getUserFromDatabase,
      }));
      jest.mock("../../models", () => ({
        User: {
          copyOf: jest.fn().mockImplementation((user, callback) => {
            callback(user);
            return {
              save,
            };
          }),
        },
      }));

      // dispatch setSettings action with mock settings data
      await store.dispatch(setSettings(mockSettings));

      // check if getUserFromDatabase was called
      expect(getUserFromDatabase).toHaveBeenCalled();

      // check if DataStore.save was called with updated user
      expect(save).toHaveBeenCalledWith({
        email: "test@test.com",
        name: "Test Name",
        notifications: true,
        biography: "Test Biography",
      });

      // check if settings state was updated correctly
      const actions = store.getActions();
      expect(actions).toHaveLength(2);
      expect(actions[0]).toEqual({
        type: "settings/set/pending",
        payload: undefined,
      });
      expect(actions[1]).toEqual({
        type: "settings/set/fulfilled",
        payload: mockSettings,
      });
      expect(store.getState().settings).toEqual({
        email: "test@test.com",
        password: "",
        notifications: true,
        name: "Test Name",
        biography: "Test Biography",
      });
    });

    it("should dispatch correct actions and update loading and error state on rejection", async () => {
      // mock getUserFromDatabase function to throw error
      const getUserFromDatabase = jest
        .fn()
        .mockRejectedValue(new Error("Test Error"));

      jest.mock("../../app/util", () => ({
        getUserFromDatabase,
      }));

      // dispatch setSettings action with mock settings data
      await store.dispatch(setSettings(mockSettings));

      // check if getUserFromDatabase was called
      expect(getUserFromDatabase).toHaveBeenCalled();

      // check if settings state was updated correctly
      const actions = store.getActions();
      expect(actions).toHaveLength(2);
      expect(actions[0]).toEqual({
        type: "settings/set/pending",
        payload: undefined,
      });
    });
  });
});
