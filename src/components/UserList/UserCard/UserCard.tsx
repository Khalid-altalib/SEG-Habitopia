import Avatar from "@components/Avatar/Avatar";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Button, Heading, HStack } from "native-base";
import React from "react";
import { NavigationParams, User } from "types";

type Props = {
  user: User;
};

const UserCard = (props: Props) => {
  const { user } = props;
  const { name, userId } = user;

  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationParams>>();

  const handleVisitProfile = () => {
    navigation.push("Profile", { userId: userId });
  };

  return (
    <Box backgroundColor="info.600" mb={3} padding={3} borderRadius={8}>
      <HStack space={2} alignItems="center">
        <Avatar name={name} />
        <HStack flex={1} justifyContent="space-between" alignItems="center">
          <Heading fontSize="xl">{name}</Heading>
          <Button backgroundColor={"amber.500"} onPress={handleVisitProfile}>
            View Profile
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default UserCard;
