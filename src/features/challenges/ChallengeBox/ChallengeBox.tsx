import { Box, HStack } from "native-base";
import React from "react";
import {
  GestureResponderEvent,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Challenge } from "../../../../types";
import ChallngeOnGoingText from "../ChallengeOnGoingText/ChallngeOnGoingText";
import challengeBoxStyles from "./ChallengeBoxStyles";

type Props = {
  name: string;
  onGoing: boolean;
  color: string;
  image: string;
  onPress: (event: GestureResponderEvent) => void;
};

const ChallengeBox = (props: Props) => {
  const { name, onGoing, color, image, onPress } = props;
  let textColor = color;
  if (textColor === "black" || "#000000") {
    textColor = "white";
  }
  let boxStyle;
  if (onGoing) {
    boxStyle = challengeBoxStyles.activeChallengeBox;
  } else {
    boxStyle = challengeBoxStyles.unactiveChallengeBox;
  }
  return (
    <>
      <TouchableOpacity>
        <Box style={boxStyle} backgroundColor={color} width={"100%"} flex={1}>
          <HStack>
            <Box style={{ justifyContent: "center", padding: 10 }}>
              <Text
                style={[challengeBoxStyles.challengeText, { color: textColor }]}
              >
                {name}
              </Text>
              <ChallngeOnGoingText
                onGoing={onGoing}
                style={challengeBoxStyles.onGoingText}
              />
            </Box>
            <Image
              source={{ uri: image }}
              style={challengeBoxStyles.challengeImage}
            />
          </HStack>
        </Box>
      </TouchableOpacity>
    </>
  );
};

export default ChallengeBox;
