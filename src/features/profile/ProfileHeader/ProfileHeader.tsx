// React Navigation
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// React
import React from "react";

// Native Base
import { Box, HStack, View, VStack } from "native-base";

// Habitopia
import { ButtonType, RootParams, TextType } from "types";
import { useSelector } from "@app/hooks";
import FollowButton from "../FollowButton/FollowButton";
import FollowListDisplay from "../FollowListDisplay/FollowListDisplay";
import Avatar from "@components/Avatar/Avatar";
import Button from "@components/Button";
import Text from "@components/Text";

type Props = {
  isLocalUserProfile: boolean;
};

/**
 * Renders the header component for a user's profile, including their avatar, follow counts, and profile details.
 *
 * @returns The component representing the profile header.
 */
const ProfileHeader = (props: Props) => {
  const { isLocalUserProfile } = props;
  const { profile } = useSelector((state) => state.profile);

  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();

  return (
    <View>
      {profile && (
        <Box>
          <HStack space={25} marginBottom={12.5}>
            <Box width={100}>
              <Avatar userId={profile.userId} />
            </Box>

            <VStack flex={1} space={25 / 2}>
              <HStack space={25 / 2} flex={1}>
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
                  testID="settings-button"
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
            <Box marginTop={2}>
              {profile?.biography === null || profile?.biography === "" ? (
                <Text type={TextType.Subtle}>
                  This user currently does not have a bio
                </Text>
              ) : (
                <Text type={TextType.Small}>{profile?.biography}</Text>
              )}
            </Box>
          </View>
        </Box>
      )}
    </View>
  );
};

export default ProfileHeader;
