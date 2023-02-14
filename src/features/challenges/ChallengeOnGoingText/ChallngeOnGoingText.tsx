import React from "react";
import { StyleProp, TextStyle } from "react-native";
import { Text } from "native-base";

type Props = {
  onGoing: boolean;
  style?: StyleProp<TextStyle>;
};

const ChallngeOnGoingText = (props: Props) => {
  const { onGoing, style } = props;
  return onGoing ? <Text style={style}>On-going</Text> : <></>;
};

export default ChallngeOnGoingText;
