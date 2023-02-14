// React
import React from "react";

// React Native
import { View } from "react-native";

// React Hook Form
import { useForm } from "react-hook-form";

// Habitopia
import { SignInFormValues } from "../../../../types";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import SubmitButton from "./SubmitButton";

/**
 * A form, for signing into an account, that takes the user's email and password.
 *
 * @returns The component representing the form.
 */
const SignInForm = () => {
  const { control, handleSubmit } = useForm<SignInFormValues>();

  return (
    <View>
      <EmailField control={control} />
      <PasswordField control={control} />
      <SubmitButton handleSubmit={handleSubmit} />
    </View>
  );
};

export default SignInForm;
