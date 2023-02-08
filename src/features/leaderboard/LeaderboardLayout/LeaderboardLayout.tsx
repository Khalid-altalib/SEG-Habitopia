import { ScrollView, VStack } from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import RegularLayout from "../../../components/RegularLayout/RegularLayout";
import { fetchLeaderboard } from "../leaderboardSlice";

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

  const dispatch = useAppDispatch();

  const handleScrollBottom = async ({ nativeEvent }: any) => {
    if (isCloseToBottom(nativeEvent)) {
      await dispatch(fetchLeaderboard());
    }
  };

  return (
    <ScrollView scrollEventThrottle={2000} onScroll={handleScrollBottom}>
      <RegularLayout>
        <VStack space={4}>{children}</VStack>
      </RegularLayout>
    </ScrollView>
  );
};

export default LeaderboardLayout;
