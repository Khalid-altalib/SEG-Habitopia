import { HStack, ScrollView } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "../../../app/hooks";
import { fetchChallenges } from "../../challenges/challengesSlice";
import { changeSetting, fetchLeaderboard } from "../leaderboardSlice";
import { useState, useEffect } from "react";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import Button from "@components/Button";
import { ButtonType } from "types";

const timeIntervals = ["Weekly", "Monthly", "All Time"];

/**
 * LeaderboardSettings component
 * renders buttons for selecting challenge type
 * fetches leaderboard data for the selected challenge type
 */
const LeaderboardSettings = (): JSX.Element => {
  const timeInterval = useSelector((state) => state.leaderboard.timeInterval);

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
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        overflow="visible"
      >
        <HStack
          space={25}
          overflow="visible"
          marginX={25}
          testID="leaderboard-settings"
        >
          {challenges &&
            selectedChallengeType !== "" &&
            challenges.map((challenge) => {
              const challengeType = challenge.name;

              return (
                <Button
                  type={
                    challengeType === selectedChallengeType
                      ? ButtonType.Primary
                      : ButtonType.Secondary
                  }
                  onPress={() => setSelectedChallengeType(challengeType)}
                  key={challengeType}
                >
                  {challengeType}
                </Button>
              );
            })}
        </HStack>
      </ScrollView>
    </StatusContainer>
  );
};

export default LeaderboardSettings;
