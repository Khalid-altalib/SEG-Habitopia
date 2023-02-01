import { Text, View } from "native-base";
import React from "react";

import styles from "../constants/Styles";

function Home() {
  return (
    <View style={[styles.maxSize, styles.centeredContent]}>
      <Text>HomeScreen</Text>
    </View>
  );
}

export default Home;
