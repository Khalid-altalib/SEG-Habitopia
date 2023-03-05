import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Avatar,
  Button,
  Center,
  Heading,
  HStack,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import { Profile, RootParams } from "../../../../types";
import { useSelector } from "../../../app/hooks";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import FollowListDisplay from "../FollowListDisplay/FollowListDisplay";

type Props = {
  isLocalUserProfile: boolean;
};

const ProfileHeader = (props: Props) => {
  const { isLocalUserProfile } = props;
  const { profile } = useSelector((state) => state.profile);

  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();

  const biographyDisplay =
    profile?.biography === "" || profile?.biography === null
      ? "This user does not currently have a bio"
      : profile?.biography;

  return (
    <View>
      <HStack space={4} pb={4}>
        <Avatar size={100} />
        <VStack flex={1} justifyContent={"space-between"}>
          <HStack flex={1} justifyContent="center" paddingBottom={3} space={3}>
            <FollowListDisplay followListMode={"follower"} followCount={30} />
            <FollowListDisplay followListMode={"following"} followCount={41} />
          </HStack>

          {isLocalUserProfile ? (
            <Button onPress={() => navigation.push("Settings")}>
              Edit Profile/Settings
            </Button>
          ) : (
            <Button>Send Friend Request</Button>
          )}
        </VStack>
      </HStack>
      <View>
        <Text bold fontSize={"md"}>
          {profile!.name}
        </Text>
        <Text fontSize={"md"}>{biographyDisplay}</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
