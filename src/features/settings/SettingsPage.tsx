import React from "react";
import FlowLayout from "../../components/FlowLayout/FlowLayout";
import { Input, Text, VStack } from "native-base";

const SettingsPage = () => {
  return (
    <FlowLayout>
      <Text mt={5}>Account Information</Text>
      <VStack mt={8}>
        <Text fontWeight={"bold"}>Phone Number</Text>
        <Input />
      </VStack>
      <VStack mt={8}>
        <Text fontWeight={"bold"}>Email Address</Text>
        <Input />
      </VStack>
      <VStack mt={8}>
        <Text fontWeight={"bold"}>Password</Text>
        <Input secureTextEntry={true} />
      </VStack>
      <Text style={{ fontWeight: "bold", marginTop: 16 }}>
        Notification Preferences
      </Text>
      <VStack mt={8}>
        <Text fontWeight={"bold"}>Notification Settings</Text>
        <Input />
      </VStack>
      <Text style={{ fontWeight: "bold", marginTop: 16 }}>
        Billing Information
      </Text>
      <VStack mt={8}>
        <Text fontWeight={"bold"}>Billing Information</Text>
        <Input />
      </VStack>
    </FlowLayout>
  );
};

export default SettingsPage;
