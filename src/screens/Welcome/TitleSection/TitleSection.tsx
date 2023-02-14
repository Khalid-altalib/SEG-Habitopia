// React Native
import { View } from "react-native";

// Habitopia
import Title from "./Title";
import Subtitle from "./Subtitle";

/**
 * A section for showing a title and subtitle.
 *
 * @returns The component representing the title section.
 */
const TitleSection = (): JSX.Element => (
  <View style={{ alignItems: "center" }}>
    <Title />
    <Subtitle />
  </View>
);

export default TitleSection;
