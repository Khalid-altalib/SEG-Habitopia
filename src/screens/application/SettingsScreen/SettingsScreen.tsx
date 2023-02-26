import React from "react";
import SettingsPage from "@features/settings/SettingsPage/SettingsPage";
import { ScrollView } from "native-base";
import Background from "@components/Background";
import PaddedContainer from "@components/PaddedContainer";

const SettingsScreen = () => {
  return (
    <Background>
      <PaddedContainer>
        <ScrollView>
          <SettingsPage />
        </ScrollView>
      </PaddedContainer>
    </Background>
  );
};

export default SettingsScreen;
