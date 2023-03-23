// Native Base
import { ColorMode, StorageManager } from "native-base";

// React Native Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Manages storing and retrieving the color mode from asynchronous storage. This allows us
 * to ensure that the color mode is persistent, even when the user closes the app and comes
 * back later.
 */
const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem("@color-mode");
      return val === "dark" ? "dark" : "light";
    } catch (e) {
      return "light";
    }
  },
  set: async (value: ColorMode) => {
    if (value !== "light" && value !== "dark") {
      throw new Error("Color mode must be 'light' or 'dark'.");
    }

    if (value) {
      try {
        await AsyncStorage.setItem("@color-mode", value.toString());
      } catch (e) {
        console.log(e);
      }
    }
  },
};

export default colorModeManager;
