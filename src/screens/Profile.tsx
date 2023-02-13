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
import StatusContainer from "../components/StatusContainer/StatusContainer";
import ProfileHeader from "../features/profile/ProfileHeader/ProfileHeader";
import { fetchProfile } from "../features/profile/profileSlice";
import ProfileStatistics from "../features/profile/ProfileStatistics/ProfileStatistics";

type Props = {
  userId: number;
};

const ProfileComponent = (props: Props) => {
  const { userId } = props;

  const dispatch = useAppDispatch();

  const localUser: LocalUser | undefined = useAppSelector(
    (state) => state.auth.user
  );

  const isLocalUserProfile = localUser?.userId === userId;

  const { error, loading, profile } = useAppSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile(userId));
  }, []);

  return (
    <ScrollView>
      <RegularLayout>
        <StatusContainer error={error} loading={loading} data={profile}>
          <ProfileHeader isLocalUserProfile={isLocalUserProfile} />
          <Divider my={4} />
          <ProfileStatistics />
        </StatusContainer>
      </RegularLayout>
    </ScrollView>
  );
};

export default ProfileComponent;
