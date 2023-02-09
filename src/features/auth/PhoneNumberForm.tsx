import React from "react";
import { Input } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";

import { addLogInData, logInUser } from "./authSlice";
import { useAppDispatch } from "../../app/hooks";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { TextType } from "../../../types";
import { View } from "react-native";

type formData = {
  phoneNumber: string;
};

const PhoneNumberForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      phoneNumber: "",
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (data: formData) => {
    console.log(data);
    dispatch(addLogInData(data));
    await dispatch(logInUser());
  };

  return (
    <View>
      <Text style={{ marginBottom: 5 }} type={TextType.Subtle}>
        Phone Number
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} size="xl" />
        )}
        name="phoneNumber"
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        style={{ marginTop: 20 }}
        isFullWidth
        icon={<AntDesign name="arrowright" size={20} color="white" />}
      >
        Continue
      </Button>
    </View>
  );
};

export default PhoneNumberForm;
