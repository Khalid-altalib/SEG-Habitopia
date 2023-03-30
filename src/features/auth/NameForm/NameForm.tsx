import React from "react";
import { Input } from "native-base";
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
  name: string;
};


/**
 * A form for accepting the user's name
 *
 * @returns The component representing the name form
 */
const NameForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
    },
  });
  const dispatch = useDispatch();

  const onSubmit = async (data: formData) => {
    if (data.name.length < 3) {
      Toast.show({
        type: "error",
        text1: "Please ensure name is longer than 3 characters",
      });
    } else {
      dispatch(addSignUpData(data));
      navigation.navigate("EmailAddress");
    }
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
          <Input
            onChangeText={onChange}
            value={value}
            size="xl"
            testID="name-input"
            autoCapitalize="none"
          />
        )}
        name="name"
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

export default NameForm;
