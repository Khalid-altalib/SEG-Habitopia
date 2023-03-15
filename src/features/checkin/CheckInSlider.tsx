import { HStack } from "native-base";
import React from "react";
import CheckInBox from "./CheckInBox";

type Props = {};

const CheckInSlider = (props: Props) => {
  const data = [
    {
      name: "Study",
      timeLeft: "3",
    },
    {
      name: "Sleep",
      timeLeft: "3",
    },
    {
      name: "Fitness",
      timeLeft: "3",
    },
    {
      name: "Study",
      timeLeft: "3",
    },
    {
      name: "Sleep",
      timeLeft: "3",
    },
    {
      name: "Fitness",
      timeLeft: "3",
    },
    {
      name: "Study",
      timeLeft: "3",
    },
    {
      name: "Sleep",
      timeLeft: "3",
    },
    {
      name: "Fitness",
      timeLeft: "3",
    },
  ];
  return (
    <HStack marginLeft={25} marginTop={25} height={150}>
      {data.map((checkIn, index) => (
        <CheckInBox key={index} checkIn={checkIn} />
      ))}
    </HStack>
  );
};

export default CheckInSlider;
