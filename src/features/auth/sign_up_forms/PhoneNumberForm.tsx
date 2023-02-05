import React, { useState } from "react";
import { Text, Button, Heading, View, IconButton, Icon } from "native-base";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-native-phone-number-input";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import { addLogInData, logInUser } from "../../../features/auth/authSlice";
import { useAppDispatch } from "../../../app/hooks";

const PhoneNumberForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      phoneNumber: "",
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (data: { phoneNumber: string }) => {
    console.log(data);
    dispatch(addLogInData(data));
    await dispatch(logInUser());
  };

  return (
    <View flexDirection="column">
      <View flex={1} alignItems="flex-start">
        <Icon
          as={<Fontisto name="phone" />}
          size="5xl"
          color="black"
          marginTop={75}
        />
        <Heading marginTop={5}>What's your phone number?</Heading>
      </View>
      <View flex={1} justifyContent="center">
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              defaultValue={value}
              defaultCode="GB"
              onChangeFormattedText={onChange}
              value={value}
            />
          )}
          name="phoneNumber"
        />
        <Text color="text.400" marginTop={3} fontSize="xs">
          Habitopia will send you a text with a verification code. Message and
          data rates apply.
        </Text>
        <IconButton
          onPress={handleSubmit(onSubmit)}
          marginTop={10}
          alignSelf="flex-end"
          icon={<AntDesign name="right" size={36} color="white" />}
          borderRadius="full"
          colorScheme="dark"
          variant="subtle"
        />
      </View>
      <View flex={1} />
    </View>
  );
};

export default PhoneNumberForm;
