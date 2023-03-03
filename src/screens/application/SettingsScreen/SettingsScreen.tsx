import React from "react";
import SettingsPage from "@features/settings/SettingsPage/SettingsPage";
import { ScrollView } from "native-base";
import Background from "@components/Background";
import PaddedContainer from "@components/PaddedContainer";

const SettingsScreen = () => {
  return (
    <Background>
      <ScrollView height="100%">
        <PaddedContainer>
          <SettingsPage />
        </PaddedContainer>
      </ScrollView>
    </Background>
  );
};

export default SettingsScreen;
