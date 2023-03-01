import { SettingsState } from "./settingsSlice";

const settingsMockState: SettingsState = {
  settings: {
    email: "example@gmail.com",
    password: "",
    notifications: true,
    name: "John Doe",
    biography: "Hello, I'm John Doe.",
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
