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

type Props = {};

const FollowListScreen = (props: Props) => {
  const navigation = useNavigation<NavigationProp<RootParams>>();
  const route = useRoute<RouteProp<RootParams, "FollowList">>();
  const { followListMode } = route.params;

  const { followList, fetchFollowList: requestStatus } = useSelector(
    (state) => state.profile
  );

  const { loading, error } = requestStatus;

  const dispatch = useDispatch();

  const followListTitle =
    followListMode[0].toUpperCase() + followListMode.slice(1);

  useEffect(() => {
    navigation.setOptions({ title: followListTitle });
    dispatch(fetchFollowList(followListMode));
  }, []);

  return (
    <PaddedContainer>
      <StatusContainer loading={loading} error={error} data={followList}>
        <UserList users={followList} />
      </StatusContainer>
    </PaddedContainer>
  );
};

export default FollowListScreen;
