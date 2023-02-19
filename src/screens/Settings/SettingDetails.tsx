import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootParams } from "../../../types";
import { View } from "native-base";
import Background from "../../components/Background";
import RegularLayout from "../../components/RegularLayout/RegularLayout";
import PasswordSetting from "../../features/settings/PasswordSetting/PasswordSetting";
import GenericSetting from "../../features/settings/GenericSetting/GenericSetting";

type Props = {};

const genericSettingTypes = ["email", "name", "biography"];

const SettingDetails = (props: Props) => {
  const route = useRoute<RouteProp<RootParams, "SettingDetails">>();

  const { settingType, defaultValue } = route.params;

  const displaySettingDetailsContent = () => {
    if (genericSettingTypes.includes(settingType)) {
      return (
        <GenericSetting defaultValue={defaultValue} settingType={settingType} />
      );
    } else {
      return <PasswordSetting />;
    }
  };
  return (
    <Background>
      <RegularLayout>
        <View>{displaySettingDetailsContent()}</View>
      </RegularLayout>
    </Background>
  );
};

export default SettingDetails;
