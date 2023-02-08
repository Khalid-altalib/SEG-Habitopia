import { HStack, Select } from "native-base";
import React from "react";
import { Challenge } from "../../../../types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchChallenges } from "../../challenges/challengesSlice";
import { changeSetting, LeaderboardState } from "../leaderboardSlice";

type Props = {};

const timeIntervals = ["Weekly", "Monthly", "All Time"];

const LeaderboardSettings = (props: Props) => {
  const timeInterval = useAppSelector(
    (state) => state.leaderboard.timeInterval
  );

  const challengeType = useAppSelector(
    (state) => state.leaderboard.challengeType
  );

  const challenges = useAppSelector((state) => state.challenges.challenges);

  const challengeTypes = challenges.map(
    (challenge: Challenge) => challenge.name
  );

  const dispatch = useAppDispatch();

  const handleChange = async (settingName: string, value: string) => {
    dispatch(changeSetting({ name: settingName, value: value }));
    await dispatch(fetchChallenges());
  };

  return (
    <HStack space={4}>
      <Select
        selectedValue={timeInterval}
        minWidth={120}
        onValueChange={(value) => handleChange("timeInterval", value)}
      >
        {timeIntervals.map((value) => (
          <Select.Item label={value} value={value} key={value} />
        ))}
      </Select>
      <Select
        selectedValue={challengeType}
        minWidth={120}
        onValueChange={(value) => handleChange("challengeTypes", value)}
      >
        {challengeTypes.map((value) => (
          <Select.Item label={value} value={value} key={value} />
        ))}
      </Select>
    </HStack>
  );
};

export default LeaderboardSettings;
