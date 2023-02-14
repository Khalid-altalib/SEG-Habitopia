// React Navigation
import { NavigationProp, useNavigation } from "@react-navigation/native";

// Habitopia
import { AuthParams, ButtonType } from "../../../../types";
import Button from "../../../components/Button";

/**
 * A button that navigates the user to the screen for signing in.
 *
 * @returns The component representing the "Sign In" button.
 */
const SignInButton = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<AuthParams>>();

  const signInScreen = "LogIn";

  return (
    <Button
      type={ButtonType.Secondary}
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate(signInScreen)}
      isFullWidth
    >
      Sign in
    </Button>
  );
};

export default SignInButton;
