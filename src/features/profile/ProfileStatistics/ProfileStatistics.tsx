import { FlatList, Heading, View, VStack } from "native-base";
import React from "react";
import { DataStore } from "aws-amplify";
import { User } from "../../../models";

import { Statistic } from "../../../../types";
import { useAppSelector } from "../../../app/hooks";
import ProfileStatistic from "./ProfileStatistic";
import { useState, useEffect } from "react";

type Props = {};

const getCheckins = async () => {
  const checkins = await DataStore.query(User, (c) => c.id.eq("b5c0baaf-9cfc-4f75-8f4c-61a39eea57d2")); // need to get the user profile that we want
  console.log("hello");
  var checkinCount = 0;
  // get number of items in the array
  // console.log(checkins[0].Checkins.toArray())
  // console.log(checkins[0].ChatRooms.toArray())

  // AsyncCollection {
  //   "values": Promise {
  //     "_A": null,
  //     "_x": 0,
  //     "_y": 3,
  //     "_z": Promise {
  //       "_A": null,
  //       "_x": 0,
  //       "_y": 0,
  //       "_z": null,
  //     },
  //   },
  // }
  // currently this is what it looks like, and it looks exactly like this for the other arrays, even when the array is empty or full...

  // console.log(checkins[0].challenges.toArray()) // there must be some way to access the array of CheckIn objects, just to count it
  
  for await (const checkin of checkins[0].Checkins) {
    checkinCount++;
  }
  console.log("ho");
  console.log(checkinCount);

  await checkinCount;
  return checkinCount;
  
};

const getGetCheckins = async () => {
  await getCheckins();
  console.log("hi");
  console.log(getCheckins());

};

const ProfileStatistics = (props: Props) => {
  const [checkinCount, setCheckinCount] = useState<number>(0); // use react state to update the checkin count once it is retrieved
  const [statistics, setStatistics] = useState<Statistic[]>([
    { name: "Streak", quantity: 5 },
    { name: "Wins", quantity: 1 },
    { name: "Check Ins", quantity: 0 },
    { name: "Level", quantity: 8 },
  ]);

  useEffect(() => {
    getCheckins().then((checkinCount) => {
      console.log("hey");
      console.log(checkinCount);
      setCheckinCount(checkinCount);
    });
  }, []);

  useEffect(() => {
    setStatistics([
      { name: "Streak", quantity: 5 },
      { name: "Wins", quantity: 1 },
      { name: "Check Ins", quantity: checkinCount },
      { name: "Level", quantity: 8 },
    ]);
  }, [checkinCount]);


  const { error, loading, profile } = useAppSelector((state) => state.profile);
  //   const { statistics } = profile; // BACKEND_PLACEHOLDER
  
  
// const statistics: Statistic[] = [
  //   { name: "Streak", quantity: 5 },
  //   { name: "Wins", quantity: 1 },
  //   { name: "Check Ins", quantity: 42 },
  //   { name: "Level", quantity: 8 },
  // ];




  return (
    <VStack>
      <Heading mb={4}>Statistics</Heading>
      <View
        flexWrap="wrap"
        flexDirection={"row"}
        style={{ marginLeft: -10, marginRight: -10 }}
      >
        {statistics.map((statistic, i) => (
          <ProfileStatistic statistic={statistic} key={i} />
        ))}
      </View>
    </VStack>
  );
};

export default ProfileStatistics;
