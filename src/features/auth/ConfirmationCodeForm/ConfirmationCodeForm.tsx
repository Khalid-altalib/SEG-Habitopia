import React from "react";
import { Input } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { View } from "react-native";

import { addSignUpData, sendConfirmationCode } from "../authSlice";
import { useDispatch, useSelector } from "../../../app/hooks";
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import { AuthParams, ButtonType, TextType } from "../../../../types";
import { Toast } from "react-native-toast-message/lib/src/Toast";

type formData = {
  confirmationCode: string;
};

/**
 * A form, for accepting the confirmation code that was sent to the user's
 * email
 *
 * @returns The component representing the confirmation code form.
 */
const ConfirmationCodeForm = () => {
  // Initial form state
  const { control, handleSubmit } = useForm({
    defaultValues: {
      confirmationCode: "",
    },
  });

  const { error, loading } = useSelector((state) => state.auth);

  // onSubmit handler
  const dispatch = useDispatch();

  const onSubmit = async (data: formData) => {
    dispatch(addSignUpData(data));
    await dispatch(sendConfirmationCode());
    if (error !== "") {
      Toast.show({
        type: "error",
        text1: "Error code invalid/expired",
        text2: "Please try again",
      });
    } else {
      navigation.navigate("SignIn");
    }
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
          <Input
            onChangeText={onChange}
            value={value}
            size="xl"
            testID="confirmation-code-input"
            autoCapitalize="none"
          />
        )}
        name="confirmationCode"
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        type={ButtonType.Primary}
        style={{ marginTop: 20 }}
        isFullWidth
        icon={<AntDesign name="arrowright" size={20} color="white" />}
        isLoading={loading}
      >
        Continue
      </Button>
    </View>
  );
};

export default ConfirmationCodeForm;
