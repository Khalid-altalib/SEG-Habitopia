import { useSelector } from "@app/hooks";
import PaddedContainer from "@components/PaddedContainer";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import UserList from "@components/UserList/UserList";
import React from "react";

type Props = {};

const FollowListScreen = (props: Props) => {
  const { followList, fetchFollowList } = useSelector((state) => state.profile);
  const { loading, error } = fetchFollowList;

  return (
    <PaddedContainer>
      <StatusContainer loading={loading} error={error} data={followList}>
        <UserList users={followList} />
      </StatusContainer>
    </PaddedContainer>
  );
};

export default FollowListScreen;
