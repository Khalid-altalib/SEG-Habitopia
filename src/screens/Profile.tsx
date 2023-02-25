import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Divider, ScrollView } from "native-base";
import React, { useEffect } from "react";
import { LocalUser, NavigationParams } from "../../types";
import { useDispatch, useSelector } from "../app/hooks";
import { selectProfile, selectUser } from "../app/selectors";
import StatusContainer from "../components/StatusContainer/StatusContainer";
import ProfileHeader from "../features/profile/ProfileHeader/ProfileHeader";
import { fetchProfile } from "../features/profile/profileSlice";
import ProfileStatistics from "../features/profile/ProfileStatistics/ProfileStatistics";
import PaddedContainer from "../components/PaddedContainer";

const ProfileComponent = () => {
  const route = useRoute<RouteProp<NavigationParams, "You" | "Profile">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationParams>>();

  let { userId } = route.params;

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const localUser: LocalUser | undefined = useSelector(selectUser);

  const isLocalUserProfile = localUser?.userId === userId;

  const { error, loading, profile } = useSelector(selectProfile);

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
      <PaddedContainer>
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
        </StatusContainer>
      </PaddedContainer>
    </ScrollView>
  );
};

export default ProfileComponent;
