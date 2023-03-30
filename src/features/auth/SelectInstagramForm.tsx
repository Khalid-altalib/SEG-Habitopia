import React from "react";
import { Input } from "native-base";
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
  instagramHandle: string;
};

const SelectInstagramForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      instagramHandle: "",
    },
  });

  const dispatch = useDispatch();

  const navigation = useNavigation<NavigationProp<AuthParams>>();

  const onSubmit = async (data: formData) => {
    dispatch(addSignUpData(data));
  };

  return (
    <View>
      <Text style={{ marginBottom: 5 }} type={TextType.Subtle}>
        Instagram Handle (@)
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            size="xl"
            autoCapitalize="none"
          />
        )}
        name="instagramHandle"
      />
      <Button
        onPress={() => {
          handleSubmit(onSubmit);
          navigation.navigate("SelectChallenges");
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

export default SelectInstagramForm;
