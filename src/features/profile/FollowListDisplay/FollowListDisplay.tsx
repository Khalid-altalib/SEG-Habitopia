import { useDispatch, useSelector } from "@app/hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Button, Center, Heading, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationParams, RootParams } from "types";
import { fetchFollowList } from "../profileSlice";

type Props = {
  followListMode: string;
  followCount: number;
};

const FollowListDisplay = (props: Props) => {
  const { followListMode, followCount } = props;
  const profile = useSelector((state) => state.profile?.profile);

  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();

  const dispatch = useDispatch();

  const handlePress = () => {
    navigation.push("FollowList", { followListMode: followListMode });
    dispatch(fetchFollowList({ followListMode, profileID: profile?.userId }));
  };

  // Gets the capitalized form of the follow list type

  const followListLabel =
    followListMode[0].toUpperCase() + followListMode.slice(1);

  return (
    <Button size="sm" flex={1} onPress={handlePress}>
      <Center>
        <Heading fontSize="md">{followCount}</Heading>
        <Text>{followListLabel}</Text>
      </Center>
    </Button>
  );
};

export default FollowListDisplay;
