import { background, border } from "native-base/lib/typescript/theme/styled-system";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  maxSize: {
    width: "100%",
    height: "100%",
  },
  centeredContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  paddedContent: {
    padding: 30,
  },
});

export default styles;
