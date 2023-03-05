import { useDispatch, useSelector } from "@app/hooks";
import { Button } from "native-base";
import React from "react";
import { followUser } from "../profileSlice";

type Props = {};

const FollowButton = (props: Props) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile?.profile);

  const handleFollow = () => {
    dispatch(followUser());
  };

  return <Button></Button>;
};

export default FollowButton;
