// Habitopia
import Text from "../../../../components/Text";
import { TextType } from "../../../../../types";

/**
 * A title for the welcome screen.
 *
 * @returns The component representing the title.
 */
const Title = (): JSX.Element => (
  <Text type={TextType.Heading} style={{ marginBottom: "3%" }}>
    Habitopia.
  </Text>
);

export default Title;
