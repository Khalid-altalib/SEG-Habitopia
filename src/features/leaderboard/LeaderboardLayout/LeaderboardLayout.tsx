import { ScrollView, VStack } from "native-base";
import React from "react";
import { useDispatch } from "../../../app/hooks";
import { fetchLeaderboard } from "../leaderboardSlice";
import PaddedContainer from "../../../components/PaddedContainer";

type Props = {
  children: React.ReactNode;
};

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

const LeaderboardLayout = (props: Props) => {
  const { children } = props;

  const dispatch = useDispatch();

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
    >
      <VStack>{children}</VStack>
    </ScrollView>
  );
};

export default LeaderboardLayout;
