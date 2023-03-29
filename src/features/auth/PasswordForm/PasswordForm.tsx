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
import { Toast } from "react-native-toast-message/lib/src/Toast";

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
    const password = data.password;
    let error = "";

    if (password.match("/W|_/g")) {
      error = "Must contain at least one special character";
    }

    if (!password.match("^(?=.*[a-z])(?=.*[A-Z]).+$")) {
      error = "Must contain both uppercase and lowercase characters";
    }

    if (!password.match(".*[0-9].*")) {
      error = "Must contain at least one number";
    }

    if (password.length < 8) {
      error = "Must be at least 8 characters long";
    }

    if (error == "") {
      dispatch(addSignUpData(data));
      await dispatch(signUpUser());
      navigation.navigate("ConfirmationCode");
    } else {
      Toast.show({ type: "error", text1: "Invalid Password", text2: error });
    }
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
            testID="password-input"
            autoCapitalize="none"
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
