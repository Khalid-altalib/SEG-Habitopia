import { Text, View } from "native-base";
import React from "react";

import styles from "../constants/Styles";
import Challenges from "../features/challenges/Challenges";

function Home() {
  return (
    <View style={[styles.maxSize, styles.centeredContent]}>
      <Challenges/>
    </View>
  );
}

export default Home;
