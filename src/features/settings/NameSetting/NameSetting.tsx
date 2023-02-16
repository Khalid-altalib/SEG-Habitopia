import { Button, Input, Text, View } from "native-base";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../app/hooks";

type Props = {};

const NameSetting = (props: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    console.log("Hi");
  };
  return (
    <View>
      <View>
        <Text mb={5}>Name</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input onChangeText={onChange} value={value} size="xl" />
          )}
          name="name"
        />
      </View>
      <View>
        <Button onPress={handleSubmit(onSubmit)} mt={20}>
          Done
        </Button>
      </View>
    </View>
  );
};

export default NameSetting;
