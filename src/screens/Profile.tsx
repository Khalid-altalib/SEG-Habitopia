import {
  Avatar,
  Button,
  Divider,
  Heading,
  HStack,
  ScrollView,
  SimpleGrid,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useEffect } from "react";
import { LocalUser, Profile } from "../../types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import RegularLayout from "../components/RegularLayout/RegularLayout";
import { fetchProfile } from "../features/profile/profileSlice";

type Props = {
  profile: Profile;
};

const ProfileComponent = (props: Props) => {
  // const { profile } = props;

  const { name, biography, statistics, userId } = {
    userId: 1,
    name: "Ihtasham",
    biography:
      "Hi, my name is Ihtasham and this is my bio. Welcome to Habitopia.",
    statistics: { checkIns: 32, streak: 6, level: 5, wins: 0 },
  }; // PLACEHOLDER

  const dispatch = useAppDispatch();

  const localUser: LocalUser | null = useAppSelector(
    (state) => state.auth.user
  );

  const isLocalUserProfile = localUser?.userId === userId;

  useEffect(() => {
    dispatch(fetchProfile(userId));
  }, []);

  return (
    <ScrollView>
      <RegularLayout>
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
            {name}
          </Text>
          <Text fontSize={"md"}>{biography}</Text>
        </View>
        <Divider my={4} />
        <VStack>
          <Heading>Statistics</Heading>
          <SimpleGrid></SimpleGrid>
        </VStack>
      </RegularLayout>
    </ScrollView>
  );
};

export default ProfileComponent;
