import { useDispatch, useSelector } from "@app/hooks";
import React, { useEffect, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { followUser } from "../profileSlice";
import Button from "@components/Button";
import { ButtonType } from "types";

const FollowButton = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile?.profile);
  const { followUser: requestStatus } = useSelector((state) => state.profile);
  const { loading } = requestStatus;

  const handleFollow = async () => {
    if (!profile?.following) {
      await dispatch(followUser(profile?.userId || ""));
    } else {
      Toast.show({
        type: "error",
        text1: "Already following!",
      });
    }
  };

  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  useEffect(() => {
    if (profile && didMount) {
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
  }, [profile?.following]);

  const followButtonText = profile?.following ? "Following" : "Follow";

  return (
    <Button
      type={ButtonType.Secondary}
      isLoading={loading}
      onPress={handleFollow}
      isFullWidth
      testID="follow-button"
    >
      {followButtonText}
    </Button>
  );
};

export default FollowButton;
