import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, View } from "native-base";
import React from "react";
import { RootParams } from "../../../../types";
import { useDispatch, useSelector } from "../../../app/hooks";
import { setSettings } from "../settingsSlice";

type Props = {
  disabled?: boolean;
  getValues: (valueName: string) => string;
  valueName: string;
};

const DoneButton = (props: Props) => {
  const navigation = useNavigation<NavigationProp<RootParams>>();
  const { getValues, disabled, valueName } = props;

  const { loading } = useSelector((state) => state.settings.setSettings);

  const dispatch = useDispatch();

  const handlePress = async () => {
    await dispatch(setSettings({ [valueName]: getValues("formValue") }));
    navigation.goBack();
  };

  return (
    <View>
      <Button
        onPress={handlePress}
        mt={8}
        isDisabled={disabled}
        isLoading={loading}
        testID="button"
      >
        Done
      </Button>
    </View>
  );
};

export default DoneButton;
