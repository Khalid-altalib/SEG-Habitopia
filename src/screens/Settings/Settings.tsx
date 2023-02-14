import React from "react";
import RegularLayout from "../../components/RegularLayout/RegularLayout";
import SettingsPage from "../../features/settings/SettingsPage";
import styles from "../../constants/Styles";
import { ScrollView, View } from "native-base";
import Background from "../../components/Background";
import PaddedContainer from "../../components/PaddedContainer";
import Colors from "../../constants/Colors";

const Settings = () => {
  return (
    <Background>
      <RegularLayout>
        <ScrollView>
          <SettingsPage />
        </ScrollView>
      </RegularLayout>
    </Background>
  );
};

export default Settings;
