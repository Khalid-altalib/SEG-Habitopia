import Avatar from "@components/Avatar/Avatar";
import Button from "@components/Button";
import Card from "@components/Card";
import Text from "@components/Text";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, HStack, theme, useColorModeValue, View, VStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonType, NavigationParams, TextType, User } from "types";

type Props = {
  user: User;
};

const UserCard = (props: Props) => {
  const { user } = props;
  const { name, userId } = user;

  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationParams>>();

  const handleVisitProfile = () => {
    navigation.push("Profile", { userId: userId });
  };

  return (
    <TouchableOpacity onPress={handleVisitProfile}>
      <Card>
        <HStack justifyContent={"space-between"} alignItems="center">
          <HStack space={25}>
            <Box boxSize={50}>
              <Avatar userId={userId} />
            </Box>
            <View>
              <Text
                type={TextType.Subheading}
                color={useColorModeValue(theme.colors.blueGray[900], theme.colors.white)}
              >
                {name}
              </Text>
            </View>
          </HStack>
        </HStack>
      </Card>
    </TouchableOpacity>
  );
};

export default UserCard;
