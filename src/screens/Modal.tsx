import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, View } from "native-base";
import React from "react";
import { RootParams } from "../../types";
import RegularLayout from "../components/RegularLayout/RegularLayout";

type Props = {};

const Modal = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();
  const route = useRoute<RouteProp<RootParams, "Modal">>();
  return (
    <RegularLayout>
      <View alignContent={"center"} justifyContent={"center"}>
        {route.params.children}
        <Button onPress={() => navigation.goBack()}>Close</Button>
      </View>
    </RegularLayout>
  );
};

export default Modal;
