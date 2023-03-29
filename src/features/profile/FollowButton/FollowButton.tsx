// React
import React, { useEffect, useState } from "react";

// Habitopia
import { useDispatch, useSelector } from "@app/hooks";
import { Button } from "native-base";
import { followUser } from "../profileSlice";

// React Native Toast Message
import { Toast } from "react-native-toast-message/lib/src/Toast";

/**
 * A button component that handles following/unfollowing a user profile.
 *
 * @return The button component.
 */
const FollowButton = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile?.profile);
  const { loading } = useSelector((state) => state.profile.followUser);

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
    <Button isLoading={loading} onPress={handleFollow} testID="follow-button">
      {followButtonText}
    </Button>
  );
};

export default FollowButton;
