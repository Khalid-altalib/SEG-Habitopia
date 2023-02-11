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
import ProfileHeader from "../features/profile/ProfileHeader/ProfileHeader";
import { fetchProfile } from "../features/profile/profileSlice";

type Props = {
  userId: number;
};

const ProfileComponent = (props: Props) => {
  const { userId } = props;

  const dispatch = useAppDispatch();

  const localUser: LocalUser | null = useAppSelector(
    (state) => state.auth.user
  );

  const { profile } = useAppSelector((state) => state.profile);

  const isLocalUserProfile = localUser?.userId === userId;

  useEffect(() => {
    dispatch(fetchProfile(userId));
  }, []);

  return (
    <ScrollView>
      <RegularLayout>
        <ProfileHeader isLocalUserProfile={isLocalUserProfile} />
        <Divider my={4} />
        <VStack>
          <Heading>Statistics</Heading>
        </VStack>
      </RegularLayout>
    </ScrollView>
  );
};

export default ProfileComponent;
