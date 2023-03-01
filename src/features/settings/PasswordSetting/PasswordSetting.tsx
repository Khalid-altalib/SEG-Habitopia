import { Button, Input, Text, View } from "native-base";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DoneButton from "../DoneButton.tsx/DoneButton";

type Props = {};

const PasswordSetting = (props: Props) => {
  const { control, getValues, watch } = useForm({
    defaultValues: {
      formValue: "",
      confirmPassword: "",
    },
  });

  watch();

  const arePasswordsNotEqual = () =>
    getValues("formValue") !== getValues("confirmPassword");

  return (
    <View>
      <View marginBottom={5}>
        <Text mb={5}>New Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input onChangeText={onChange} value={value} size="xl" />
          )}
          name="formValue"
        />
      </View>
      <View>
        <Text mb={5}>Confirm Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input onChangeText={onChange} value={value} size="xl" />
          )}
          name="confirmPassword"
        />
      </View>
      <DoneButton
        getValues={getValues}
        valueName="password"
        disabled={arePasswordsNotEqual()}
      />
    </View>
  );
};

export default PasswordSetting;
