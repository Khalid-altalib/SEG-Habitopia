import { Box } from "native-base";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../../constants/Styles";

type Props = { children: React.ReactNode };

const RegularLayout = (props: Props) => {
  const HORIZONTAL_BORDER_PADDING_SIZE = 15;
  const VERTICAL_BORDER_PADDING_SIZE = 20;

  const insets = useSafeAreaInsets();

  return (
    <Box
      style={[
        styles.maxSize,
        {
          paddingTop: VERTICAL_BORDER_PADDING_SIZE,
          paddingBottom: VERTICAL_BORDER_PADDING_SIZE,
          paddingLeft: insets.left + HORIZONTAL_BORDER_PADDING_SIZE,
          paddingRight: insets.right + HORIZONTAL_BORDER_PADDING_SIZE,
        },
      ]}
    >
      {props.children}
    </Box>
  );
};

export default RegularLayout;
