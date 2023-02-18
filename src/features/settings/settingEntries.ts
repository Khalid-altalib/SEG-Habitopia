type SettingEntries = {
  [key: string]: {
    name: string;
  };
};

const settingEntries: SettingEntries = {
  name: {
    name: "Name",
  },
  email: {
    name: "Email",
  },
  password: {
    name: "Password",
  },
  biography: {
    name: "Bio",
  },
};

export default settingEntries;
