import { SettingsState } from "./settingsSlice";

const settingsMockState: SettingsState = {
  settings: {
    email: "test@test.com",
    password: "password",
    notifications: true,
    name: "Test User",
    biography: "Hello, I'm Test User.",
  },
  fetchSettings: {
    loading: false,
    error: "",
  },
  setSettings: {
    loading: false,
    error: "",
  },
};

export default settingsMockState;
