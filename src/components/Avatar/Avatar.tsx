import React from "react";
import { Avatar as NativeBaseAvatar, Box } from "native-base";

type Props = {
  userId: string;
};

const Avatar = (props: Props) => {
  const { userId } = props;
  return (
    <NativeBaseAvatar
      backgroundColor={"white"}
      source={{ uri: `https://robohash.org/${userId}` }}
    />
  );
};

export default Avatar;
