import React from "react";
import SettingsPage from "@features/settings/SettingsPage/SettingsPage";
import { ScrollView } from "native-base";
import Background from "@components/Background";
import PaddedContainer from "@components/PaddedContainer";

/**
 * @returns A React component which displays the list of settings
 * available for the user to configure, including text inputs
 * and toggles
 */
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
