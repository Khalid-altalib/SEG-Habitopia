import { Button, Input, Text, View } from "native-base";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import DoneButton from "../DoneButton.tsx/DoneButton";

type Props = {
  defaultValue: string;
};

const EmailSetting = (props: Props) => {
  const { control, getValues } = useForm({
    defaultValues: {
      email: props.defaultValue,
    },
  });

  return (
    <View>
      <Text mb={5}>Email Address</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} size="xl" />
        )}
        name="email"
      />
      <DoneButton getValues={getValues} valueName="email" />
    </View>
  );
};

export default EmailSetting;
