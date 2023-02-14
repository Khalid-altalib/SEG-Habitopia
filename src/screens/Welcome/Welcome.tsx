// React
import React from "react";

// Habitopia
import Background from "../../components/Background";
import PaddedContainer from "../../components/PaddedContainer";
import SectionsContainer from "./SectionsContainer";
import TitleSection from "./TitleSection";
import ButtonSection from "./ButtonSection";

/**
 * The welcome screen for the application with a greeting and buttons to create an account or sign in.
 *
 * @returns The component representing the screen.
 */
const Welcome = (): JSX.Element => {
  return (
    <Background>
      <PaddedContainer>
        <SectionsContainer>
          <TitleSection />
          <ButtonSection />
        </SectionsContainer>
      </PaddedContainer>
    </Background>
  );
};

export default Welcome;
