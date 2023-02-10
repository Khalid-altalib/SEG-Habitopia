import {
  Avatar,
  Button,
  Heading,
  HStack,
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

  const { username, biography } = {
    username: "Ihtasham",
    biography:
      "Hi, my name is Ihtasham and this is my bio. Welcome to Habitopia.",
  };

  const dispatch = useAppDispatch();

  const localUser: LocalUser | null = useAppSelector(
    (state) => state.auth.user
  );

  const isLocalUserProfile = localUser?.username === username;

  useEffect(() => {
    dispatch(fetchProfile(username));
  }, []);

  return (
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
          {username}
        </Text>
        <Text fontSize={"md"}>{biography}</Text>
      </View>
    </RegularLayout>
  );
};

export default ProfileComponent;
