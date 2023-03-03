// React Native
import { Switch } from "react-native";

// Native Base
import { Box, HStack, theme, useColorMode } from "native-base";

// Habitopia
import Text from "@components/Text";
import { TextType } from "types";

/**
 * A switch button for toggling between light and dark mode.
 *
 * @returns The switch button.
 */
const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      display={"flex"}
      justifyContent={"space-between"}
      alignItems="center"
      paddingTop={3}
    >
      <Box>
        <Text type={TextType.Small}>Light Mode </Text>
        <Text type={TextType.Subtle}>Choose the color mode</Text>
      </Box>
      <Box>
        <Switch
          value={colorMode === "light"}
          onChange={toggleColorMode}
          trackColor={{ true: theme.colors.purple[700] }}
        />
      </Box>
    </HStack>
  );
};

export default ColorModeToggle;
