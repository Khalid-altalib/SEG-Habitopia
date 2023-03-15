import { Heading, View, VStack } from "native-base";
import React from "react";
import { DataStore } from "aws-amplify";
import { User } from "../../../models";
import { getUserFromDatabase } from "../../../app/util";

import { Statistic } from "../../../../types";
import { useSelector } from "../../../app/hooks";
import ProfileStatistic from "./ProfileStatistic";
import { useState, useEffect } from "react";

type Props = {};

const ProfileStatistics = (props: Props) => {
  const { profile } = useSelector((state) => state.profile);
  return (
    <VStack>
      <Heading mb={4}>Statistics</Heading>
      <View
        flexWrap="wrap"
        flexDirection={"row"}
        style={{ marginLeft: -10, marginRight: -10 }}
      >
        {profile?.statistics instanceof Array
          ? profile?.statistics.map((statistic, i) => (
              <ProfileStatistic statistic={statistic} key={i} />
            ))
          : null}
      </View>
    </VStack>
  );
};

export default ProfileStatistics;
