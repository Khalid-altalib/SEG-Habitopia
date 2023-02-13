import React from "react";
import { Input } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";

import { addLogInData, addSignUpData, logInUser } from "./authSlice";
import { useAppDispatch } from "../../app/hooks";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { AuthParams, ButtonType, TextType } from "../../../types";
import { View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type formData = {
  name: string;
};

const NameForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (data: formData) => {
    console.log(data);
    dispatch(addSignUpData(data));
  };

  const navigation = useNavigation<NavigationProp<AuthParams>>();

  return (
    <View>
      <Text style={{ marginBottom: 5 }} type={TextType.Subtle}>
        Name
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} size="xl" />
        )}
        name="name"
      />
      <Button
        onPress={() => {
          handleSubmit(onSubmit);
          navigation.navigate("EmailAddress");
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

export default NameForm;
