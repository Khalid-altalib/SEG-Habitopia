import { Box, VStack } from "native-base";
import React from "react";
import { User } from "types";
import UserCard from "./UserCard/UserCard";

type Props = {
  users?: User[];
};

const UserList = (props: Props) => {
  const { users } = props;

  return (
    <VStack space={5}>
      {users && users.map((user, i) => <UserCard user={user} key={i} />)}
    </VStack>
  );
};

export default UserList;
