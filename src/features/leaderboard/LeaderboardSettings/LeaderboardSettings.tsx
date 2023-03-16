import { Button, HStack, Select } from "native-base";
import React from "react";
import { Challenge } from "../../../../types";
import { useDispatch, useSelector } from "../../../app/hooks";
import { fetchChallenges } from "../../challenges/challengesSlice";
import {
  changeSetting,
  fetchLeaderboard,
  LeaderboardState,
} from "../leaderboardSlice";
import { useState, useEffect } from "react";
import StatusContainer from "@components/StatusContainer/StatusContainer";

type Props = {};

const timeIntervals = ["Weekly", "Monthly", "All Time"];

const LeaderboardSettings = (props: Props) => {
  const timeInterval = useSelector((state) => state.leaderboard.timeInterval);

  // const challenges = useSelector((state) => state.challenges.challenges); BACKEND_PLACEHOLDER

  // const challengeTypes = challenges.map(
  //   (challenge: Challenge) => challenge.name
  // );

  const { challenges, fetchChallenges: requestStatus } = useSelector(
    (state) => state.challenges
  );
  const { loading, error } = requestStatus;

  const [selectedChallengeType, setSelectedChallengeType] = useState("");

  const dispatch = useDispatch();

  const handleFetchChallenges = async () => {
    await dispatch(fetchChallenges());
    setSelectedChallengeType(challenges[0].name);
  };

  useEffect(() => {
    handleFetchChallenges();
  }, []);

  const handleChange = async (settingName: string, value: string) => {
    dispatch(changeSetting({ name: settingName, value: value }));
    await dispatch(fetchLeaderboard());
  };

  useEffect(() => {
    if (selectedChallengeType) {
      handleChange("challengeType", selectedChallengeType);
    }
  }, [selectedChallengeType]);

  return (
    <StatusContainer loading={loading} error={error} data={challenges}>
      <HStack space={4} testID="leaderboard-settings">
        {challenges &&
          selectedChallengeType !== "" &&
          challenges.map((challenge) => {
            const challengeType = challenge.name;
            const buttonColor =
              challengeType === selectedChallengeType ? "red.500" : "blue.500";
            console.log(selectedChallengeType, challengeType);
            return (
              <Button
                testID="option"
                backgroundColor={buttonColor}
                onPress={() => setSelectedChallengeType(challengeType)}
                key={challengeType}
              >
                {challengeType}
              </Button>
            );
          })}
      </HStack>
    </StatusContainer>
  );
};

export default LeaderboardSettings;
