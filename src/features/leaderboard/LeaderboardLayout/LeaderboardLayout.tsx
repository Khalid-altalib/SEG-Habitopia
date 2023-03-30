import { ScrollView, VStack } from "native-base";
import React from "react";
import { useDispatch } from "../../../app/hooks";
import { fetchLeaderboard } from "../leaderboardSlice";

type Props = {
  children: React.ReactNode;
};

/**
 * Determines if the user has scrolled to the bottom of the scroll view
 * @returns boolean - true if the user has scrolled to the bottom of the scroll view
 */
const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: any) => {
  const paddingToBottom = 0;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

/**
 * LeaderboardLayout component renders a scroll view with a vertical stack
 * @returns JSX.Element - LeaderboardLayout component
 */
const LeaderboardLayout = (props: Props) => {
  const { children } = props;

  const dispatch = useDispatch();

  // fetches leaderboard data when the user scrolls to the bottom of the scroll view
  const handleScrollBottom = async ({ nativeEvent }: any) => {
    if (isCloseToBottom(nativeEvent)) {
      await dispatch(fetchLeaderboard());
    }
  };

  return (
    <ScrollView
      scrollEventThrottle={2000}
      onScroll={handleScrollBottom}
      paddingTop={25}
      testID="scroll-view"
    >
      <VStack>{children}</VStack>
    </ScrollView>
  );
};

export default LeaderboardLayout;
