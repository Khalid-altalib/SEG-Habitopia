import React from "react";
import { Avatar as NativeBaseAvatar, Box } from "native-base";

type Props = {
  name: string;
};

const Avatar = (props: Props) => {
  const { name } = props;
  return (
    <NativeBaseAvatar
      backgroundColor={"white"}
      source={{ uri: `https://robohash.org/${name}` }}
    />
  );
};

export default Avatar;
