import Button from "@components/Button";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View } from "native-base";
import React from "react";
import { ButtonType, RootParams } from "../../../../types";
import { useDispatch, useSelector } from "../../../app/hooks";
import { setSettings } from "../settingsSlice";

type Props = {
  getValues: (valueName: string) => string;
  valueName: string;
  oldPassword?: string;
};

const DoneButton = (props: Props) => {
  const navigation = useNavigation<NavigationProp<RootParams>>();
  const { getValues, valueName, oldPassword } = props;

  const { loading } = useSelector((state) => state.settings.setSettings);

  const dispatch = useDispatch();

  const handlePress = async () => {
    await dispatch(
      setSettings({
        [valueName]: getValues("formValue"),
        oldPassword: oldPassword,
      })
    );
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <Button
      type={ButtonType.Primary}
      onPress={handlePress}
      isFullWidth
      isLoading={loading}
      style={{ marginTop: 25 }}
    >
      Done
    </Button>
  );
};

export default DoneButton;
