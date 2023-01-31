import React from "react";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProfileScreenNavigationProp } from "../../../types";

const AuthNavigation = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View>
      <Button onPress={() => navigation.navigate("SignUp")} title="Sign up" />
      <Button onPress={() => navigation.navigate("LogIn")} title="Log in" />
    </View>
  );
};

export default AuthNavigation;
