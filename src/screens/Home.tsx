import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text, View } from "native-base";
import React from "react";
import { NavigationParams } from "../../types";

import styles from "../constants/Styles";

function Home() {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationParams>>();

  return (
    <View style={[styles.maxSize, styles.centeredContent]}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => {
          navigation.push("Profile", { userId: "a" });
        }}
      >
        Visit Ihtasham's Profile (Placeholder)
      </Button>
    </View>
  );
}

export default Home;
