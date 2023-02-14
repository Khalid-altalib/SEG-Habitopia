import React from "react";
import { View, Input } from "native-base";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { useForm, Controller } from "react-hook-form";
import { addLogInData, logInUser } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../app/hooks";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthParams, ButtonType, TextType } from "../../../types";
import { AntDesign } from "@expo/vector-icons";

type LogInCredentials = {
  email: string;
  password: string;
};

const LogInForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: LogInCredentials) => {
    dispatch(addLogInData(data));
    await dispatch(logInUser());
  };

  const navigation = useNavigation<NavigationProp<AuthParams>>();

  return (
    <View>
      <Text style={{ marginBottom: 5 }} type={TextType.Subtle}>
        Email
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            size="xl"
            placeholder="Email"
          />
        )}
        name="email"
      />
      <Text style={{ marginBottom: 5, marginTop: 20 }} type={TextType.Subtle}>
        Password
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            size="xl"
            placeholder="Password"
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

export default LogInForm;
