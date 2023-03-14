import { Image, VStack } from "native-base";
import React from "react";
import Text from "@components/Text";
import PaddedContainer from "@components/PaddedContainer";
import Button from "@components/Button";
import { ButtonType } from "types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NavigationParams } from "types";

const NoChats = () => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();

  const handlePress = () => navigation.navigate("Explore");

  return (
    <PaddedContainer>
      <VStack alignItems={"center"} space={5}>
        <Image
          source={require("../../../../assets/images/not_found.png")}
          style={{ width: 100, height: 100 }}
          alt="Chats not found"
        />
        <Text>You are currently not in any chats. Would you like to...</Text>
        <Button type={ButtonType.Primary} onPress={handlePress}>
          Join a Challenge?
        </Button>
      </VStack>
    </PaddedContainer>
  );
};

export default NoChats;
