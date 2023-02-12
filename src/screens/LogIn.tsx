import React from "react";
import styles from "../constants/Styles";
import LogInForm from "../features/auth/LogInForm/LogInForm";
import { Box, Text, View, Center, Image } from "native-base";
import FlowLayout from "../components/FlowLayout/FlowLayout";

const LogIn = () => {
  return (
    <View style={[styles.maxSize, styles.centeredContent]}>
      <FlowLayout>
        <Center mb={"4"}>Welcome back! Log In to your account</Center>
        <Box>
          <LogInForm />
        </Box>
      </FlowLayout>
    </View>
  );
};

export default LogIn;
