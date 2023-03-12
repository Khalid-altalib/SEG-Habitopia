import { getUserFromDatabase } from "@app/util";
import { configureStore } from "@reduxjs/toolkit";
import settingsReducer, { fetchSettings } from "./settingsSlice";

jest.mock("../../app/util", () => ({
  getUserFromDatabase: jest.fn(),
}));

describe("settingsSlice", () => {
  let store: ReturnType<typeof configureStore>;
  const mockUserData = {
    email: "test@test.com",
    name: "Test User",
    notifications: true,
    biography: "This is a test biography.",
  };

  beforeEach(() => {
    store = configureStore({
      reducer: {
        settings: settingsReducer,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should handle fetchSettings correctly", async () => {
    (getUserFromDatabase as jest.Mock).mockResolvedValueOnce(mockUserData);
    const expectedSettings = {
      email: mockUserData.email,
      name: mockUserData.name,
      notifications: mockUserData.notifications,
      biography: mockUserData.biography,
    };

    await store.dispatch(fetchSettings());

    const actualSettings = store.getState().settings.settings;
    expect(actualSettings).toEqual(expectedSettings);
  });

  it("should handle fetchSettings", async () => {
    const errorMessage = "Error fetching user data";
    (getUserFromDatabase as jest.Mock).mockRejectedValueOnce(
      new Error(errorMessage)
    );

    await expect(store.dispatch(fetchSettings())).resolves.toMatchObject({
      error: expect.objectContaining({ message: "Rejected" }),
    });
  });
});
