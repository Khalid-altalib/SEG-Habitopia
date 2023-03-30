// React Native Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Native Base
import { ColorMode } from "native-base";

// Habitopia
import colorModeManager from "@app/colorModeManager";

it("Gets the correct color mode when it exists in storage.", async () => {
  // Add the mock color mode to async storage.
  const MOCK_COLOR_MODE: ColorMode = "light";

  AsyncStorage.setItem("@color-mode", MOCK_COLOR_MODE);

  // Use the color mode manager to retrieve the color mode.
  const COLOR_MODE_MANAGER_VALUE: ColorMode = await colorModeManager.get();

  // Check they match.
  expect(COLOR_MODE_MANAGER_VALUE).toBe(MOCK_COLOR_MODE);
});

it("Gets the correct default color mode when there isn't an existing color mode in storage.", async () => {
  // Use the color mode manager to retrieve the color mode.
  const COLOR_MODE_MANAGER_VALUE: ColorMode = await colorModeManager.get();

  // Check it matches with the expected default color mode.
  const DEFAULT_COLOR_MODE: ColorMode = "light";

  expect(COLOR_MODE_MANAGER_VALUE).toBe(DEFAULT_COLOR_MODE);
});

it("Sets the color mode in storage to the correct given value.", async () => {
  // Set the color mode using the color mode manager.
  const SET_COLOR_MODE: ColorMode = "dark";

  colorModeManager.set(SET_COLOR_MODE);

  // Get the color mode from async storage.
  const GOT_COLOR_MODE: string | null = await AsyncStorage.getItem(
    "@color-mode"
  );

  // Check they match.
  expect(GOT_COLOR_MODE).toBe(SET_COLOR_MODE);
});

it("Throws an error when given an invalid color mode to set.", async () => {
  // @ts-ignore - The point is to check invalid arguments.
  const SET_COLOR_MODE: ColorMode = "blueberry muffin";

  // Check it throws an error.
  await expect(colorModeManager.set(SET_COLOR_MODE)).rejects.toThrow(
    "Color mode must be 'light' or 'dark'."
  );
});
