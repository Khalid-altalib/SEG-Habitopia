// Native Base
import { View } from "native-base";

// Habitopia
import Background from "@components/Background";
import PaddedContainer from "@components/PaddedContainer";
import Text from "@components/Text";
import { TextType } from "types";

/**
 * The bio screen where a new user can enter the bio for their account.
 *
 * @returns The component representing the screen.
 */
const BioScreen = () => {
  return (
    <Background>
      <PaddedContainer>
        <View style={{ width: "100%", height: "100%", paddingTop: "10%" }}>
          <Text type={TextType.Heading} style={{ marginBottom: "10%" }}>
            What would you like your bio to be?
          </Text>
        </View>
      </PaddedContainer>
    </Background>
  );
};

export default BioScreen;
