jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

// We overwrite console output functions during testing because some external packages
// such as Amplify like to output debug information which looks very messy when reviewing
// test output and makes it harder to see which test cases were successful.
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
