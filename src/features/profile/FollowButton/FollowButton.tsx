import { useDispatch, useSelector } from "@app/hooks";
import { Button } from "native-base";
import React from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { followUser } from "../profileSlice";

type Props = {};

const FollowButton = (props: Props) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile?.profile);
  const { followUser: requestStatus } = useSelector((state) => state.profile);
  const { loading } = requestStatus;

  const handleFollow = async () => {
    await dispatch(followUser());
    if (profile) {
      if (profile.following == true) {
        Toast.show({
          type: "success",
          text1: "Followed user! ✅",
          text2: `You are now following ${profile.name}`,
        });
      } else {
        Toast.show({
          type: "success",
          text1: "Unfollowed user! ✅",
          text2: `You are now no longer following ${profile.name}`,
        });
      }
    }
  };

  const followButtonText = profile?.following ? "Following" : "Follow";

  return (
    <Button isLoading={loading} onPress={handleFollow}>
      {followButtonText}
    </Button>
  );
};

export default FollowButton;
