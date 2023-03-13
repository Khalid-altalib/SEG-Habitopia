import React from "react";
import { Avatar as NativeBaseAvatar, Box } from "native-base";

type Props = {
  userId: string;
  width: number | string;
  height: number | string;
};

const Avatar = (props: Props) => {
  const { userId, width, height } = props;
  return (
    <NativeBaseAvatar
      width={width}
      height={height}
      source={{ uri: `https://robohash.org/${userId}` }}
    />
  );
};

export default Avatar;
