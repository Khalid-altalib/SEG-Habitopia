import { Box } from "native-base";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../constants/Styles";

type Props = { children: React.ReactNode };

const RegularLayout = (props: Props) => {
  const BORDER_PADDING_SIZE = 15;

  const insets = useSafeAreaInsets();

  return (
    <Box
      style={[
        styles.maxSize,
        {
          paddingTop: BORDER_PADDING_SIZE,
          paddingBottom: BORDER_PADDING_SIZE,
          paddingLeft: insets.left + BORDER_PADDING_SIZE,
          paddingRight: insets.right + BORDER_PADDING_SIZE,
        },
      ]}
    >
      {props.children}
    </Box>
  );
};

export default RegularLayout;
