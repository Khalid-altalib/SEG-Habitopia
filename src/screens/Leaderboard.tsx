import { Heading, Text, View } from "native-base";
import React from "react";
import PaddedLayout from "../components/FlowLayout";
import RegularLayout from "../components/RegularLayout";

type Props = {};

const Leaderboard = (props: Props) => {
  return (
    <View>
      <RegularLayout>
        <Heading>Hi</Heading>
      </RegularLayout>
    </View>
  );
};

export default Leaderboard;
