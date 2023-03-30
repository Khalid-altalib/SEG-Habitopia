// Native Base
import { Input } from "native-base";

// React Hook Form
import { Control, Controller } from "react-hook-form";

// Habitopia
import Text from "../../../../components/Text";
import { SignInFormValues, TextType } from "../../../../../types";

/**
 * An input field for entering a password.
 *
 * @param props The properties passed to the component.
 * @returns The component representing the password field.
 */
const PasswordField = ({ control }: Props) => (
  <>
    <FieldText />
    <FieldInput control={control} autoCapitalize="none" />
  </>
);

/**
 * Descriptive text for password field.
 *
 * @returns The component representing the field text.
 */
const FieldText = () => (
  <Text style={{ marginBottom: 5, marginTop: 20 }} type={TextType.Subtle}>
    Password
  </Text>
);

/**
 * An input box for the password field.
 *
 * @param props The properties passed to the component.
 * @returns The component representing the field input.
 */
const FieldInput = ({ control }: Props) => (
  <Controller
    control={control}
    render={({ field: { onChange, value } }) => (
      <Input
        onChangeText={onChange}
        value={value}
        size="xl"
        placeholder="Password"
        type="password"
        testID="password-input"
        autoCapitalize="none"
      />
    )}
    name="password"
  />
);

type Props = {
  /** An object with methods used internally by React Hook Form for registering components. */
  control: Control<SignInFormValues>;
};

export default PasswordField;
