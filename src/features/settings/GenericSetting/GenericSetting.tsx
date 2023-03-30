import { Button, Input, TextArea, View } from "native-base";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "../../../app/hooks";
import DoneButton from "../DoneButton/DoneButton";
import settingEntries from "../settingEntries";
import Text from "@components/Text";
import { TextType } from "types";

type Props = {
  defaultValue: string;
  settingType: string;
};

/**
 * An input box that updates the state of the associated setting
 * to be submitted to the server
 *
 * @param props - The properties passed to the component.
 * @returns - The generic setting component.
 */
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
      <Text style={{ marginBottom: 10 }} type={TextType.Regular}>
        {settingTitle}
      </Text>

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
