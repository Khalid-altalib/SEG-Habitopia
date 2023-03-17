import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Divider, ScrollView, useColorModeValue } from "native-base";
import React, { useEffect } from "react";
import { LocalUser, NavigationParams } from "types";
import { useDispatch, useSelector } from "@app/hooks";
import { selectProfile, selectUser } from "@app/selectors";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import ProfileHeader from "@features/profile/ProfileHeader/ProfileHeader";
import { fetchProfile } from "@features/profile/profileSlice";
import ProfileStatistics from "@features/profile/ProfileStatistics/ProfileStatistics";
import PaddedContainer from "@components/PaddedContainer";
import Background from "@components/Background";

const ProfileScreen = () => {
  const route = useRoute<RouteProp<NavigationParams, "You" | "Profile">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationParams>>();

  let { userId } = route.params;

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const localUser: LocalUser | undefined = useSelector(selectUser);

  const isLocalUserProfile = localUser?.userId === userId;

  const { profile, fetchProfile: requestStatus } = useSelector(
    (state) => state.profile
  );

  const { loading, error } = requestStatus;

  const { settings } = useSelector((state) => state.settings);

  useEffect(() => {
    if (!profile || profile.userId !== userId) {
      dispatch(fetchProfile(userId));
    }
  }, [isFocused]);

  useEffect(() => {
    dispatch(fetchProfile(userId));
  }, [settings]);

  return (
    <Background>
      <ScrollView height="full">
        <PaddedContainer>
          <StatusContainer error={error} loading={loading} data={profile}>
            <ProfileHeader isLocalUserProfile={isLocalUserProfile} />
            <Divider
              marginY={4}
              backgroundColor={useColorModeValue("gray.300", "blueGray.700")}
            />
            <ProfileStatistics />
          </StatusContainer>
        </PaddedContainer>
      </ScrollView>
    </Background>
  );
};

export default ProfileScreen;
