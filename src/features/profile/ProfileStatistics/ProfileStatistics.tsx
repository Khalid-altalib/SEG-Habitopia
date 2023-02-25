import { FlatList, Heading, View, VStack } from "native-base";
import React from "react";
import { DataStore } from "aws-amplify";
import { User } from "../../../models";
import { getUserFromDatabase } from "../../../app/util";

import { Statistic } from "../../../../types";
import { useAppSelector } from "../../../app/hooks";
import ProfileStatistic from "./ProfileStatistic";
import { useState, useEffect } from "react";
import { getCheckIns } from "../statisticsQueries";


type Props = {};

const ProfileStatistics = (props: Props) => {
  
  const { error, loading, profile } = useAppSelector((state) => state.profile);
  return (
    <VStack>
      <Heading mb={4}>Statistics</Heading>
      <View
        flexWrap="wrap"
        flexDirection={"row"}
        style={{ marginLeft: -10, marginRight: -10 }}
      >
        {profile?.statistics.map((statistic, i) => ( 
          <ProfileStatistic statistic={statistic} key={i} />
        ))}
        
      </View>
    </VStack>
  );
};

export default ProfileStatistics;
