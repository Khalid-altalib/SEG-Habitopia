const initialState = {
  settings: {
    email: "example@gmail.com",
    password: "",
    notifications: true,
    name: "John Doe",
    biography: "hello my name is john doe and i have severe autism",
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

export default initialState;
