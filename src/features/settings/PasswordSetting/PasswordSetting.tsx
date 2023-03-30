import { Button, Input, Text, View } from "native-base";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DoneButton from "../DoneButton/DoneButton";

type Props = {};

/**
 * A specialised version of the generic settings component
 * which adds more input for the user to provide their old password
 * and confirm their new password
 *
 * @param props - The properties passed to the component.
 * @returns - The passwrod setting component.
 */
const PasswordSetting = (props: Props) => {
  const { control, getValues, watch } = useForm({
    defaultValues: {
      formValue: "",
      confirmPassword: "",
      oldPassword: "",
    },
  });

  watch();

  const arePasswordsNotEqual = () =>
    getValues("formValue") !== getValues("confirmPassword");

  return (
    <View>
      <View marginBottom={5}>
        <Text mb={5}>Old Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              size="xl"
              autoCapitalize="none"
            />
          )}
          name="oldPassword"
        />
      </View>
      <View marginBottom={5}>
        <Text mb={5}>New Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              size="xl"
              autoCapitalize="none"
            />
          )}
          name="formValue"
        />
      </View>
      <View>
        <Text mb={5}>Confirm Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              size="xl"
              autoCapitalize="none"
            />
          )}
          name="confirmPassword"
        />
      </View>
      <DoneButton
        getValues={getValues}
        valueName="password"
        disabled={arePasswordsNotEqual()}
        oldPassword={getValues("oldPassword")}
      />
    </View>
  );
};

export default PasswordSetting;
