import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, View } from "native-base";
import React from "react";
import { RootParams } from "../../../../types";
import { useAppDispatch } from "../../../app/hooks";
import { setSettings } from "../settingsSlice";

type Props = {
  disabled?: boolean;
  getValues: (valueName: string) => string;
  valueName: string;
};

const DoneButton = (props: Props) => {
  const navigation = useNavigation<NavigationProp<RootParams>>();
  const { getValues, disabled, valueName } = props;
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(setSettings({ [valueName]: getValues(valueName) }));
    navigation.goBack();
  };

  return (
    <View>
      <Button onPress={handlePress} mt={8} disabled={disabled}>
        Done
      </Button>
    </View>
  );
};

export default DoneButton;
