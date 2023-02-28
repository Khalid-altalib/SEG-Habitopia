import React from "react";
import { Input, TextArea } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";

import { addSignUpData } from "./authSlice";
import { useDispatch } from "../../app/hooks";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { AuthParams, ButtonType, TextType } from "../../../types";
import { View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type formData = {
  bio: string;
};

const BioForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      bio: "",
    },
  });
  const dispatch = useDispatch();

  const onSubmit = async (data: formData) => {
    dispatch(addSignUpData(data));
    navigation.navigate("SignIn");
  };

  const navigation = useNavigation<NavigationProp<AuthParams>>();

  return (
    <View>
      <Text style={{ marginBottom: 5 }} type={TextType.Subtle}>
        Biography
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextArea
            autoCompleteType={false}
            onChangeText={onChange}
            value={value}
            size="xl"
            maxLength={100}
            maxHeight={35 * 3}
            overflow="true"
          />
        )}
        name="bio"
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

export default BioForm;
