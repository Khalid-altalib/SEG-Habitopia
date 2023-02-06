import React from "react";
import styles from "../constants/Styles";
import LogInForm from "../features/auth/LogInForm";
import { Box, Text, View, Center, Image } from "native-base";
import PaddedLayout from "../components/PaddedLayout";

const LogIn = () => {
  return (
    <View style={[styles.maxSize, styles.centeredContent]}>
      <PaddedLayout>
        <Center mb={"4"}>Welcome back! Log In to your account</Center>
        <Box>
          <LogInForm />
        </Box>
      </PaddedLayout>
    </View>
  );
};

export default LogIn;
