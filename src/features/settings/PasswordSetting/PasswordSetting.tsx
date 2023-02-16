import { Button, Input, Text, View } from "native-base";
import React, { useState } from "react";

type Props = {};

const PasswordSetting = (props: Props) => {
  const [formValues, setFormValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const onSubmit = () => {
    console.log("Hi");
  };

  const handleInputChange = (key: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <View>
      <View marginBottom={5}>
        <Text mb={5}>New Password</Text>
        <Input
          onChangeText={(text) => handleInputChange("newPassword", text)}
          value={formValues.newPassword}
          size="xl"
        />
      </View>
      <View>
        <Text mb={5}>Confirm Password</Text>
        <Input
          onChangeText={(text) => handleInputChange("confirmPassword", text)}
          value={formValues.confirmPassword}
          size="xl"
        />
      </View>
      <View>
        <Button
          onPress={onSubmit}
          mt={20}
          disabled={formValues.newPassword !== formValues.confirmPassword}
        >
          Done
        </Button>
      </View>
    </View>
  );
};

export default PasswordSetting;
