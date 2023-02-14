import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { GestureResponderEvent } from "react-native";
import { Challenge, RootParams } from "../../../../types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import ChallengeBox from "../ChallengeBox/ChallengeBox";
import ChallengeModal from "../ChallengeModal/ChallengeModal";
import { fetchChallenges } from "../challengesSlice";

type Props = {};

const ChallengeBoxes = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();
  const { challenges, loading, error } = useAppSelector(
    (state) => state.challenges
  );
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const allChallenges = [
    {
      name: "Sleep",
      description: "Study everyday for a minimum of 5 hours or u not sigma lol",
      active: true,
      color: "cornflowerblue",
      image: "https://picsum.photos/200",
    },
    {
      name: "Food",
      description: "Sleep earlier or u not sigma lol",
      active: true,
      color: "limegreen",
      image: "https://picsum.photos/200",
    },
    {
      name: "Fitness",
      description: "jim or u not sigma lol",
      active: false,
      color: "black",
      image: "https://picsum.photos/200",
    },
    {
      name: "Sleep",
      description: "Study everyday for a minimum of 5 hours or u not sigma lol",
      active: true,
      color: "cornflowerblue",
      image: "https://picsum.photos/200",
    },
    {
      name: "Food",
      description: "Sleep earlier or u not sigma lol",
      active: true,
      color: "limegreen",
      image: "https://picsum.photos/200",
    },
    {
      name: "Fitness",
      description: "jim or u not sigma lol",
      active: false,
      color: "black",
      image: "https://picsum.photos/200",
    },
  ]; // useAppSelector((state) => state.challenges.challenges); BACKEND_PLACEHOLDER

  // useEffect(() => {
  //   dispatch(fetchChallenges());
  // });

  return (
    <StatusContainer loading={loading} error={error} data={allChallenges}>
      <VStack space={3} width={"100%"}>
        {allChallenges.map((entry, index) => (
          <ChallengeBox
            name={entry.name}
            onGoing={entry.active}
            color={entry.color}
            image={entry.image}
            key={index}
            onPress={() =>
              navigation.navigate("Modal", {
                children: (
                  <ChallengeModal challengeDescription={entry.description} />
                ),
              })
            }
          />
        ))}
      </VStack>
    </StatusContainer>
  );
};

export default ChallengeBoxes;
