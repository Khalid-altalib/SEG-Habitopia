import { Card, Center, Heading, Text, VStack } from "native-base";
import React from "react";

type Props = {
  name: string;
  description: string;
};

/**
 *Custom pressable header to show challenge and chat details
 *
 * @param props - The properties passed to the component.
 * @returns - The header component.
 */
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
