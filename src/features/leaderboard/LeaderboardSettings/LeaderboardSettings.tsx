import { Button, HStack, Select } from "native-base";
import React from "react";
import { Challenge } from "../../../../types";
import { useDispatch, useSelector } from "../../../app/hooks";
import { fetchChallenges } from "../../challenges/challengesSlice";
import { changeSetting, LeaderboardState } from "../leaderboardSlice";
import { useState, useEffect } from "react";

type Props = {};

const timeIntervals = ["Weekly", "Monthly", "All Time"];

const LeaderboardSettings = (props: Props) => {
  const timeInterval = useSelector((state) => state.leaderboard.timeInterval);

  const challengeType = useSelector((state) => state.leaderboard.challengeType);

  // const challenges = useSelector((state) => state.challenges.challenges); BACKEND_PLACEHOLDER

  // const challengeTypes = challenges.map(
  //   (challenge: Challenge) => challenge.name
  // );

  const challengeTypes = ["Sleep", "Gym", "Diet"];

  const [selectedChallengeType, setSelectedChallengeType] = useState(
    challengeTypes[0]
  );

  const dispatch = useDispatch();

  const handleChange = async (settingName: string, value: string) => {
    dispatch(changeSetting({ name: settingName, value: value }));
    await dispatch(fetchChallenges());
  };

  useEffect(() => {
    handleChange("challengeType", selectedChallengeType);
  }, [selectedChallengeType]);

  return (
    <HStack space={4}>
      {challengeTypes.map((challengeType) => {
        const buttonColor =
          challengeType === selectedChallengeType ? "red.500" : "blue.500";
        console.log(selectedChallengeType, challengeType);
        return (
          <Button
            backgroundColor={buttonColor}
            onPress={() => setSelectedChallengeType(challengeType)}
            key={challengeType}
          >
            {challengeType}
          </Button>
        );
      })}
    </HStack>
  );
};

export default LeaderboardSettings;
