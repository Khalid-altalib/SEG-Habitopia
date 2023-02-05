import React from "react";
import styles from "../constants/Styles";
import LogInForm from "../features/auth/LogInForm";
import { View } from "native-base";

const LogIn = () => {
  return (
    <View style={[styles.maxSize, styles.centeredContent]}>
      <LogInForm />
    </View>
  );
};

export default LogIn;
