import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HStack, View, VStack, Image } from "native-base";
import React from "react";
import { ButtonType, Challenge, RootParams, TextType } from "../../../../types";
import { useDispatch, useSelector } from "../../../app/hooks";
import { challengeMappings } from "../challengeMappings";
import { joinChallenge } from "../challengesSlice";
import { fetchChats } from "@features/chat/chatSlice";
import Background from "@components/Background";
import Text from "@components/Text";
import Button from "@components/Button";

type Props = {
  challenge: Challenge;
};

const ChallengeModal = (props: Props) => {
  const { challenge } = props;
  const { name, description } = challenge;
  const { joinChallenge: requestStatus } = useSelector(
    (state) => state.challenges
  );
  const { loading } = requestStatus;

  const { image } = challengeMappings[name] || challengeMappings["fallback"];

  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();

  const dispatch = useDispatch();

  const handleButtonClick = async () => {
    await dispatch(joinChallenge(name));
    dispatch(fetchChats());
    navigation.pop();
  };

  return (
    <View testID="challengePrompt">
      <Background>
        <VStack
          space={3}
          alignItems="center"
          justifyContent="center"
          height="100%"
          padding={20}
        >
          <Text type={TextType.Heading}>{name}</Text>
          <Image
            width={150}
            height={150}
            alt="Challenge Image"
            borderRadius="lg"
            source={{ uri: image }}
          />
          <Text type={TextType.Regular}>{description}</Text>

          <VStack space={5} marginTop={20}>
            <View testID={"joinButton"}>
              <Button
                type={ButtonType.Primary}
                onPress={handleButtonClick}
                isLoading={loading}
                isFullWidth
              >
                Join Challenge!
              </Button>
            </View>
            <View testID={"backButton"}>
              <Button
                type={ButtonType.Secondary}
                onPress={() => navigation.goBack()}
                isFullWidth
              >
                Not now
              </Button>
            </View>
          </VStack>
        </VStack>
      </Background>
    </View>
  );
};

export default ChallengeModal;
