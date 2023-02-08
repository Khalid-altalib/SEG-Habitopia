import React from "react";
import { Box } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../../constants/Styles";

type Props = { children: React.ReactNode };

const FlowLayout = (props: Props) => {
  const BORDER_PADDING_SIZE = 30;

  const insets = useSafeAreaInsets();

  return (
    <Box
      style={[
        styles.maxSize,
        {
          paddingTop: insets.top + BORDER_PADDING_SIZE,
          paddingBottom: insets.bottom + BORDER_PADDING_SIZE,
          paddingLeft: insets.left + BORDER_PADDING_SIZE,
          paddingRight: insets.right + BORDER_PADDING_SIZE,
        },
      ]}
    >
      {props.children}
    </Box>
  );
};

export default FlowLayout;
