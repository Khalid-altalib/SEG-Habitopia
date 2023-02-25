// React Native
import { View } from "react-native";

// Habitopia
import CreateAccountButton from "./CreateAccountButton";
import SignInButton from "./SignInButton";

/**
 * A section for showing the "Create Account" and "Sign In" buttons.
 *
 * @returns The component representing the button section.
 */
const ButtonSection = (): JSX.Element => (
  <View>
    <CreateAccountButton />
    <SignInButton />
  </View>
);

export default ButtonSection;
