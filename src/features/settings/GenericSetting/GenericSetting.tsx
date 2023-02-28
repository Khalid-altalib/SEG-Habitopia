import { Button, Input, Text, TextArea, View } from "native-base";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "../../../app/hooks";
import DoneButton from "../DoneButton/DoneButton";
import settingEntries from "../settingEntries";

type Props = {
  defaultValue: string;
  settingType: string;
};

const GenericSetting = (props: Props) => {
  const { defaultValue, settingType } = props;

  const { control, getValues } = useForm({
    defaultValues: {
      formValue: defaultValue,
    },
  });

  const settingTitle = settingEntries[settingType].name;

  return (
    <View>
      <Text mb={5}>{settingTitle}</Text>

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            size="xl"
            testID="input"
          />
        )}
        name="formValue"
      />
      <DoneButton getValues={getValues} valueName={settingType} />
    </View>
  );
};

export default GenericSetting;
