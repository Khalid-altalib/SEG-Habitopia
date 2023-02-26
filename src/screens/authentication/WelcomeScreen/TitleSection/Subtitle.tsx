// Habitopia
import Text from "@components/Text";
import { TextType } from "types";

/**
 * A subtitle for the welcome screen.
 *
 * @returns The component representing the subtitle.
 */
const Subtitle = (): JSX.Element => (
  <Text type={TextType.Subtle} style={{ marginBottom: "3%" }}>
    Unlimited accountability to beat procrastination.
  </Text>
);

export default Subtitle;
