import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, Input, Text, View } from "native-base";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { RootParams } from "../../../../types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import DoneButton from "../DoneButton.tsx/DoneButton";

type Props = {
  defaultValue: string;
};

const NameSetting = (props: Props) => {
  const { control, getValues } = useForm({
    defaultValues: {
      name: props.defaultValue,
    },
  });

  return (
    <View>
      <Text mb={5}>Name</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} size="xl" />
        )}
        name="name"
      />
      <DoneButton getValues={getValues} valueName="name" />
    </View>
  );
};

export default NameSetting;
