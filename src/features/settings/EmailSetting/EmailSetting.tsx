import { Button, Input, Text, View } from "native-base";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../app/hooks";

type Props = {};

const EmailSetting = (props: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "example@email.org",
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    console.log("Hi");
  };
  return (
    <View>
      <View>
        <Text style={{ marginBottom: 5 }}>Email Address</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input onChangeText={onChange} value={value} size="xl" />
          )}
          name="email"
        />
        <Button onPress={handleSubmit(onSubmit)} style={{ marginTop: 20 }}>
          Done
        </Button>
      </View>
    </View>
  );
};

export default EmailSetting;
