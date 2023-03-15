import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Button, HStack, Text, View, VStack } from "native-base";
import React from "react";
import { ButtonType, RootParams } from "../../../../types";
import { useSelector } from "../../../app/hooks";
import FollowButton from "../FollowButton/FollowButton";
import FollowListDisplay from "../FollowListDisplay/FollowListDisplay";
import Avatar from "@components/Avatar/Avatar";

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
      {profile && (
        <Box>
          <HStack space={12.5} marginBottom={12.5}>
            <Box width={125}>
              <Avatar userId="a" />
            </Box>

            <VStack flex={1} justifyContent={"space-between"}>
              <HStack
                flex={1}
                justifyContent="center"
                paddingBottom={12.5}
                space={12.5}
              >
                <FollowListDisplay
                  followListMode={"follower"}
                  followCount={profile.followerCount}
                />
                <FollowListDisplay
                  followListMode={"following"}
                  followCount={profile.followingCount}
                />
              </HStack>

              {isLocalUserProfile ? (
                <Button onPress={() => navigation.push("Settings")}>
                  Edit Profile/Settings
                </Button>
              ) : (
                <FollowButton />
              )}
            </VStack>
          </HStack>
          <View>
            <Text bold fontSize={"md"}>
              {profile!.name}
            </Text>
            <Text fontSize={"md"}>{biographyDisplay}</Text>
          </View>
        </Box>
      )}
    </View>
  );
};

export default ProfileHeader;
