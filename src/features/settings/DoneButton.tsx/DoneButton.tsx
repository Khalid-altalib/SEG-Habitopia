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

  const handlePress = async () => {
    await dispatch(setSettings({ [valueName]: getValues(valueName) }));
    navigation.goBack();
  };

  return (
    <View>
      <Button
        onPress={handlePress}
        mt={8}
        isDisabled={disabled}
        isLoading={false}
      >
        Done
      </Button>
    </View>
  );
};

export default DoneButton;
