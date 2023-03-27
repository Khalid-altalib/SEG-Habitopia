import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, HStack, View, VStack } from "native-base";
import Text from "@components/Text";
import React from "react";
import { ButtonType, RootParams, TextType } from "../../../../types";
import { useSelector } from "../../../app/hooks";
import FollowButton from "../FollowButton/FollowButton";
import FollowListDisplay from "../FollowListDisplay/FollowListDisplay";
import Avatar from "@components/Avatar/Avatar";
import Button from "@components/Button";

type Props = {
  isLocalUserProfile: boolean;
};

const ProfileHeader = (props: Props) => {
  const { isLocalUserProfile } = props;
  const { profile } = useSelector((state) => state.profile);

  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();

  return (
    <View>
      {profile && (
        <Box>
          <HStack space={25} marginBottom={12.5}>
            <Box width={125}>
              <Avatar userId={profile.userId} />
            </Box>

            <VStack flex={1} space={25 / 2}>
              <HStack space={25 / 2}>
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
                <Button
                  type={ButtonType.Secondary}
                  onPress={() => navigation.push("Settings")}
                  isFullWidth
                >
                  Settings
                </Button>
              ) : (
                <FollowButton />
              )}
            </VStack>
          </HStack>
          <View>
            <Text type={TextType.Regular}>{profile!.name}</Text>
            {profile?.biography === null || profile?.biography === "" ? null : (
              <Text type={TextType.Small} style={{ marginTop: 2 }}>
                {profile?.biography}
              </Text>
            )}
          </View>
        </Box>
      )}
    </View>
  );
};

export default ProfileHeader;
