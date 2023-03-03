import { Card, Center, Heading, Text, VStack } from "native-base";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <Center>
      <Heading fontSize="4xl">Sleep Challenge</Heading>
      <Text fontSize="xl">Time to catch up on your sleep.</Text>
    </Center>
  );
};

export default Header;
