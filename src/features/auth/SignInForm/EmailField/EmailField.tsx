// Native Base
import { Input } from "native-base";

// React Hook Form
import { Control, Controller } from "react-hook-form";

// Habitopia
import Text from "../../../../components/Text";
import { SignInFormValues, TextType } from "../../../../../types";

/**
 * An input field for entering an email address.
 *
 * @param props The properties passed to the component.
 * @returns The component representing the email field.
 */
const EmailField = ({ control }: Props) => (
  <>
    <FieldText />
    <FieldInput control={control} />
  </>
);

/**
 * Descriptive text for the email field.
 *
 * @returns The component representing the field text.
 */
const FieldText = () => (
  <Text style={{ marginBottom: 5 }} type={TextType.Subtle}>
    Email
  </Text>
);

/**
 * An input box for the email field.
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
        placeholder="Email"
        testID="email-input"
      />
    )}
    name="email"
  />
);

type Props = {
  /** An object with methods used internally by React Hook Form for registering components. */
  control: Control<SignInFormValues>;
};

export default EmailField;
