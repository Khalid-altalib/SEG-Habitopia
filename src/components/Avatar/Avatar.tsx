import React from "react";
import { Avatar as NativeBaseAvatar, Box, AspectRatio } from "native-base";

type Props = {
  userId: string;
};

const Avatar = (props: Props) => {
  const { userId } = props;
  return (
    <AspectRatio ratio={1}>
      <NativeBaseAvatar
        width="full"
        height="full"
        source={{ uri: `https://robohash.org/${userId}` }}
      />
    </AspectRatio>
  );
};

export default Avatar;
