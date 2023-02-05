import React from "react";
import { View, Input, Text, Button } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { addLogInData, logInUser } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../app/hooks";

type logInCredentials = {
  email: string;
  password: string;
};

const LogInForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (data: logInCredentials) => {
    console.log(data);
    dispatch(addLogInData(data));
    await dispatch(logInUser());
  };
  return (
    <>
      <Text>Email</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} />
        )}
        name="email"
      />
      <Text>Password</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input type={"password"} onChangeText={onChange} value={value} />
        )}
        name="password"
      />
      <Button onPress={handleSubmit(onSubmit)}>
        <Text>Submit</Text>
      </Button>
    </>
  );
};

export default LogInForm;
