import { Box, theme, useColorModeValue } from "native-base";
import React from "react";
import { Statistic, TextType } from "../../../../types";
import { LinearGradient } from "expo-linear-gradient";
import Text from "@components/Text";

type Props = {
  statistic: Statistic;
};

const ProfileStatistic = (props: Props) => {
  const { statistic } = props;
  const { name, quantity } = statistic;

  return (
    <Box overflow="hidden" rounded="lg">
      <LinearGradient
        colors={useColorModeValue(
          [theme.colors.white, theme.colors.gray[50]],
          [theme.colors.blueGray[600], theme.colors.blueGray[700]]
        )}
        start={[0, 0]}
        end={[1, 1]}
        style={{
          padding: 12.5,
          marginBottom: -9, // The -0 is to account for the text bottom margin/padding
        }}
      >
        <Text type={TextType.Small}>{name}</Text>
        <Text type={TextType.Heading}>{quantity}</Text>
      </LinearGradient>
    </Box>
  );
};

export default ProfileStatistic;
