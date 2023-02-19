// React Hook Form
import { UseFormHandleSubmit } from "react-hook-form";

// Expo Vector Icons
import { AntDesign } from "@expo/vector-icons";

// Habitopia
import Button from "../../../../components/Button";
import { addLogInData, logInUser } from "../../authSlice";
import { useAppDispatch } from "../../../../app/hooks";
import { ButtonType, SignInFormValues } from "../../../../../types";

/**
 * A button for submitting the sign in form.
 *
 * @param props The properties passed to the component.
 * @returns The component representing the submit button.
 */

const SubmitButton = ({ handleSubmit }: Props) => {
  const dispatch = useAppDispatch();

  const onSubmit = async (data: SignInFormValues) => {
    dispatch(addLogInData(data));

    await dispatch(logInUser());
  };

  return (
    <Button
      style={{ marginTop: 20 }}
      isFullWidth
      icon={<AntDesign name="arrowright" size={20} color="white" />}
      type={ButtonType.Primary}
      onPress={handleSubmit(onSubmit)}
    >
      Continue
    </Button>
  );
};

type Props = {
  /** A callback used by React Hook Form to handle submit, i.e. validate the form and act as an error callback. */
  handleSubmit: UseFormHandleSubmit<SignInFormValues>;
};

export default SubmitButton;
