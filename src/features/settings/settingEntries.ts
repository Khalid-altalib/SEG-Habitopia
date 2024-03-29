/**
 * The input settings that will be displayed in the settings page
 */

type SettingEntries = {
  [key: string]: SettingEntry;
};

export type SettingEntry = {
  name: string;
};

const settingEntries: SettingEntries = {
  name: {
    name: "Name",
  },
  password: {
    name: "Password",
  },
  biography: {
    name: "Bio",
  },
};

export default settingEntries;
