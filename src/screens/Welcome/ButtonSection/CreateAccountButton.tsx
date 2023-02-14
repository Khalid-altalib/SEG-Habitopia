// React Navigation
import { NavigationProp, useNavigation } from "@react-navigation/native";

// Habitopia
import { AuthParams, ButtonType } from "../../../../types";
import Button from "../../../components/Button";

/**
 * A button that navigates the user to the screen for creating an account.
 *
 * @returns The component representing the "Create Account" button.
 */
const CreateAccountButton = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<AuthParams>>();

  const firstScreenInCreateAccountProcess = "Name";

  return (
    <Button
      type={ButtonType.Primary}
      onPress={() => navigation.navigate(firstScreenInCreateAccountProcess)}
      isFullWidth
    >
      Create account
    </Button>
  );
};

export default CreateAccountButton;
