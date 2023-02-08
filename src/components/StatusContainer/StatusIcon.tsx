import { Center, Text, VStack } from "native-base";
import React from "react";

type Props = {
  label: string;
  icon: React.ReactNode;
};

const StatusIcon = (props: Props) => {
  const { label, icon } = props;

  return (
    <Center>
      <VStack space={2} marginY={6}>
        <Center>{icon}</Center>
        <Text>{label}</Text>
      </VStack>
    </Center>
  );
};

export default StatusIcon;
