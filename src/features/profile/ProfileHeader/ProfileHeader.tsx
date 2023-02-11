import {
  Avatar,
  Button,
  Heading,
  HStack,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import { Profile } from "../../../../types";
import { useAppSelector } from "../../../app/hooks";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";

type Props = {
  isLocalUserProfile: boolean;
};

const ProfileHeader = (props: Props) => {
  const { isLocalUserProfile } = props;
  const { profile } = useAppSelector((state) => state.profile);

  return (
    <View>
      <HStack space={4} pb={4}>
        <Avatar size={100} />
        <VStack flex={1} justifyContent={"space-between"}>
          <View flex={1} justifyContent="center">
            <Heading>152 Friends</Heading>
          </View>

          {isLocalUserProfile ? (
            <Button>Edit Profile</Button>
          ) : (
            <Button>Send Friend Request</Button>
          )}
        </VStack>
      </HStack>
      <View>
        <Text bold fontSize={"md"}>
          {profile!.name}
        </Text>
        <Text fontSize={"md"}>{profile!.biography}</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
