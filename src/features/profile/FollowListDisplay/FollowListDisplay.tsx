import { useDispatch, useSelector } from "@app/hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Center, theme } from "native-base";
import React from "react";
import { RootParams, TextType } from "types";
import { fetchFollowList } from "../profileSlice";
import { LinearGradient } from "expo-linear-gradient";
import Text from "@components/Text";
import { TouchableOpacity } from "react-native";

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
    <Box overflow="hidden" rounded="lg" flexGrow={1}>
      <TouchableOpacity onPress={handlePress} testID="follow-list-display">
        <LinearGradient
          colors={[theme.colors.darkBlue[500], theme.colors.purple[700]]}
          start={[0, 0]}
          end={[1, 1]}
          style={{
            padding: 12.5,
          }}
        >
          <Center>
            <Text type={TextType.Subheading} color="white">
              {followCount}
            </Text>
            <Text type={TextType.Small} color="white">
              {followListLabel}
            </Text>
          </Center>
        </LinearGradient>
      </TouchableOpacity>
    </Box>
  );
};

export default FollowListDisplay;
