import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootParams } from "../../../types";
import { View } from "native-base";
import Background from "../../components/Background";
import PasswordSetting from "../../features/settings/PasswordSetting/PasswordSetting";
import GenericSetting from "../../features/settings/GenericSetting/GenericSetting";
import PaddedContainer from "../../components/PaddedContainer";

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
      <PaddedContainer>
        <View>{displaySettingDetailsContent()}</View>
      </PaddedContainer>
    </Background>
  );
};

export default SettingDetails;
