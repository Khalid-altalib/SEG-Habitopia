import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
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
import { LocalUser, NavigationParams, Profile } from "../../types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import RegularLayout from "../components/RegularLayout/RegularLayout";
import StatusContainer from "../components/StatusContainer/StatusContainer";
import ProfileHeader from "../features/profile/ProfileHeader/ProfileHeader";
import { fetchProfile } from "../features/profile/profileSlice";
import ProfileStatistics from "../features/profile/ProfileStatistics/ProfileStatistics";
import { logOutUser } from "../features/auth/authSlice";

const ProfileComponent = () => {
  const route = useRoute<RouteProp<NavigationParams, "You" | "Profile">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationParams>>();

  let { userId } = route.params;

  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

  const localUser: LocalUser | undefined = useAppSelector(
    (state) => state.auth.user
  );

  const isLocalUserProfile = localUser?.userId === userId;

  const { error, loading, profile } = useAppSelector((state) => state.profile);

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  const fetchData = async () => {
    await dispatch(fetchProfile(userId));
  };

  useEffect(() => {
    navigation.setOptions({ title: profile?.name || "" });
  }, [profile]);

  return (
    <ScrollView>
      <RegularLayout>
        <StatusContainer error={error} loading={loading} data={profile}>
          <ProfileHeader isLocalUserProfile={isLocalUserProfile} />
          <Divider my={4} />
          <ProfileStatistics />
          <Button
            onPress={() => {
              navigation.push("Profile", { userId: "a" });
            }}
            my={4}
          >
            Visit Stacked Profile (Placeholder)
          </Button>
          <Button
            onPress={() => {
              dispatch(logOutUser());
            }}
          >
            Log Out
          </Button>
        </StatusContainer>
      </RegularLayout>
    </ScrollView>
  );
};

export default ProfileComponent;
