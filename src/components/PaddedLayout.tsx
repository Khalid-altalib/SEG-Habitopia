import React from "react";
import { Box } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../constants/Styles";

type Props = { children: React.ReactNode };

const PaddedLayout = (props: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <Box
      style={[
        styles.maxSize,
        {
          paddingTop: insets.top + 30,
          paddingBottom: insets.bottom + 30,
          paddingLeft: insets.left + 30,
          paddingRight: insets.right + 30,
          alignItems: "center",
          justifyContent: "space-between",
        },
      ]}
    >
      {props.children}
    </Box>
  );
};

export default PaddedLayout;
