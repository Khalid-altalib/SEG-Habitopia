import { Card, Center, Heading, Text, VStack } from "native-base";
import React from "react";

type Props = {
  name: string;
  description: string;
};

const Header = (props: Props) => {
  const { name, description } = { ...props };
  return (
    <Center>
      <Heading fontSize="4xl">{name}</Heading>
      <Text fontSize="xl">{description}</Text>
    </Center>
  );
};

export default Header;
