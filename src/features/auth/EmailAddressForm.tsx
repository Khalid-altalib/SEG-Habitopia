import React from "react";
import { Checkbox, Input } from "native-base";
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
  emailAddress: string;
  willReceiveMarketing: boolean;
};

const EmailAddressForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      emailAddress: "",
      willReceiveMarketing: false,
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
        Email Address
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} size="xl" />
        )}
        name="emailAddress"
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Checkbox onChange={onChange} isChecked={value} size="sm" value="1">
            <Text type={TextType.Subtle} style={{ marginTop: 20 }}>
              I do not wish to receive marketing communications about Habitopia
              products and services.
            </Text>
          </Checkbox>
        )}
        name="willReceiveMarketing"
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

export default EmailAddressForm;
