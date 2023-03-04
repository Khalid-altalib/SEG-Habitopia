import { useDispatch, useSelector } from "@app/hooks";
import PaddedContainer from "@components/PaddedContainer";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import UserList from "@components/UserList/UserList";
import React, { useEffect } from "react";
import { fetchFollowList } from "@features/profile/profileSlice";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootParams } from "types";

type Props = {};

const FollowListScreen = (props: Props) => {
  const route = useRoute<RouteProp<RootParams, "FollowList">>();
  const { followListMode } = route.params;

  const { followList, fetchFollowList: requestStatus } = useSelector(
    (state) => state.profile
  );

  const { loading, error } = requestStatus;

  const dispatch = useDispatch();

  useEffect(() => {
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
