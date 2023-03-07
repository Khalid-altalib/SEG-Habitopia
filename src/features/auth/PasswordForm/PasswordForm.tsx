import React from "react";
import { Input } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";

import {
  addLogInData,
  addSignUpData,
  logInUser,
  signUpUser,
} from "../authSlice";
import { useDispatch } from "../../../app/hooks";
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import { AuthParams, ButtonType, TextType } from "../../../../types";
import { View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type formData = {
  password: string;
};

const PasswordForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      password: "",
    },
  });
  const dispatch = useDispatch();

  const onSubmit = async (data: formData) => {
    dispatch(addSignUpData(data));
    await dispatch(signUpUser());
    navigation.navigate("ConfirmationCode");
  };

  const navigation = useNavigation<NavigationProp<AuthParams>>();

  return (
    <View>
      <Text style={{ marginBottom: 5 }} type={TextType.Subtle}>
        Password
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            size="xl"
            type="password"
          />
        )}
        name="password"
      />
      <Button
        style={{ marginTop: 20 }}
        isFullWidth
        icon={<AntDesign name="arrowright" size={20} color="white" />}
        type={ButtonType.Primary}
        onPress={handleSubmit(onSubmit)}
      >
        Continue
      </Button>
    </View>
  );
};

export default PasswordForm;
