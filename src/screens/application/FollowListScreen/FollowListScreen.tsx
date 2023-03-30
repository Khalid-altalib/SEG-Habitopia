import { useDispatch, useSelector } from "@app/hooks";
import PaddedContainer from "@components/PaddedContainer";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import UserList from "@components/UserList/UserList";
import React, { useEffect } from "react";
import { fetchFollowList } from "@features/profile/profileSlice";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RootParams } from "types";
import { ScrollView } from "native-base";
import Background from "@components/Background";

/**
 * @returns A React component which displays the list of either
 * the user's following or followers
 */
const FollowListScreen = () => {
  const navigation = useNavigation<NavigationProp<RootParams>>();
  const route = useRoute<RouteProp<RootParams, "FollowList">>();
  const { followListMode } = route.params;

  const { followList, fetchFollowList: requestStatus } = useSelector(
    (state) => state.profile
  );

  const { loading, error } = requestStatus;

  const dispatch = useDispatch();

  let followListTitle =
    followListMode[0].toUpperCase() + followListMode.slice(1);

  if (followListMode == "follower") {
    followListTitle += "s";
  }

  useEffect(() => {
    navigation.setOptions({ title: followListTitle });
    dispatch(fetchFollowList(followListMode));
  }, []);

  return (
    <Background>
      <ScrollView>
      <PaddedContainer>
        <StatusContainer loading={loading} error={error} data={followList}>
          <UserList users={followList} />
        </StatusContainer>
      </PaddedContainer>
    </ScrollView>
    </Background>
  );
};

export default FollowListScreen;
