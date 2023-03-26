import React from "react";
import { Checkbox, Input } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";

import { addLogInData, addSignUpData, logInUser } from "../authSlice";
import { useDispatch } from "../../../app/hooks";
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import { AuthParams, ButtonType, TextType } from "../../../../types";
import { View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

type formData = {
  email: string;
};

const EmailAddressForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const dispatch = useDispatch();

  const onSubmit = async (data: formData) => {
    if (!data.email.includes("@")) {
      Toast.show({
        type: "error",
        text1: "Please ensure email is valid",
      });
    } else {
      dispatch(addSignUpData(data));
      navigation.navigate("Password");
    }
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
          <Input
            onChangeText={onChange}
            value={value}
            size="xl"
            testID="email-input"
          />
        )}
        name="email"
      />
      <Button
        onPress={handleSubmit(onSubmit)}
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
