import React from "react";
import { View, Input, Text, Button } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addLogInData } from "../../features/auth/authSlice";

import styles from "../../constants/Styles";

const EmailLogIn = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(addLogInData(data));
  };

  return (
    <View style={[styles.maxSize, styles.centeredContent]}>
      <Text>Email</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} />
        )}
        name="email"
        defaultValue=""
      />
      <Button onPress={handleSubmit(onSubmit)}>
        <Text>Submit</Text>
      </Button>
    </View>
  );
};

export default EmailLogIn;
