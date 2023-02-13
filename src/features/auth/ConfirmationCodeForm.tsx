import React from "react";
import { Input } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { View } from "react-native";

import { addSignUpData } from "./authSlice";
import { useAppDispatch } from "../../app/hooks";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { AuthParams, ButtonType, TextType } from "../../../types";

type formData = {
  confirmationCode: string;
};

const ConfirmationCodeForm = () => {
  // Initial form state
  const { control, handleSubmit } = useForm({
    defaultValues: {
      confirmationCode: "",
    },
  });

  // onSubmit handler
  const dispatch = useAppDispatch();

  const onSubmit = async (data: formData) => {
    console.log(data);
    dispatch(addSignUpData(data));
  };

  // React Navigation
  const navigation = useNavigation<NavigationProp<AuthParams>>();

  // JSX
  return (
    <View>
      <Text style={{ marginBottom: 5 }} type={TextType.Subtle}>
        Confirmation Code
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} size="xl" />
        )}
        name="confirmationCode"
      />
      <Button
        onPress={() => {
          handleSubmit(onSubmit);
          navigation.navigate("SelectAvatar");
        }}
        type={ButtonType.Primary}
        style={{ marginTop: 20 }}
        isFullWidth
        icon={<AntDesign name="arrowright" size={20} color="white" />}
      >
        Continue
      </Button>
    </View>
  );
};

export default ConfirmationCodeForm;
