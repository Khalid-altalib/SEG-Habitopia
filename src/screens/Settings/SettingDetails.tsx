import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { SettingsParams } from "../../../types";
import EmailSetting from "../../features/settings/EmailSetting/EmailSetting";
import { View } from "native-base";
import Background from "../../components/Background";
import RegularLayout from "../../components/RegularLayout/RegularLayout";
import NameSetting from "../../features/settings/NameSetting/NameSetting";
import PasswordSetting from "../../features/settings/PasswordSetting/PasswordSetting";

type Props = {};

const SettingDetails = (props: Props) => {
  const route = useRoute<RouteProp<SettingsParams, "SettingDetails">>();

  const { settingType } = route.params;

  const displaySettingDetailsContent = () => {
    switch (settingType) {
      case "Email":
        return <EmailSetting />;
      case "Name":
        return <NameSetting />;
      case "Password":
        return <PasswordSetting />;
      default:
        break;
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
