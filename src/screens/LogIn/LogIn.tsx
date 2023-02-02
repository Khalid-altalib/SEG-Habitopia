import { Text, View } from "native-base";
import React from "react";

import styles from "../../constants/Styles";

function LogIn() {
  return (
    <View style={[styles.maxSize, styles.centeredContent]}>
      <Text>LogInScreen</Text>
    </View>
  );
}

export default LogIn;
