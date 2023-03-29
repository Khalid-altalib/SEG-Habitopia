// Import necessary modules
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

  // Get the joinChallenge request status from the Redux store
  const { joinChallenge: requestStatus } = useSelector(
    (state) => state.challenges
  );

  // Extract the loading status from the requestStatus object
  const { loading } = requestStatus;

  // Get the image URI for the challenge from the challengeMappings object
  const { image } = challengeMappings[name] || challengeMappings["fallback"];

  // Get the navigation object
  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();

  const dispatch = useDispatch();

  // Define a function to handle the button click event
  const handleButtonClick = async () => {
    // Dispatch the joinChallenge action with the name of the challenge
    await dispatch(joinChallenge(name));

    // Dispatch the fetchChats action to update the chats in the store
    dispatch(fetchChats());

    // Pop the current screen off the navigation stack to go back to the previous screen
    navigation.pop();
  };

  // Render the component
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
          {/* Render the name of the challenge as a heading */}
          <Text type={TextType.Heading}>{name}</Text>

          {/* Render the image for the challenge */}
          <Image
            width={150}
            height={150}
            alt="Challenge Image"
            borderRadius="lg"
            source={{ uri: image }}
          />

          {/* Render the description of the challenge */}
          <Text type={TextType.Regular}>{description}</Text>

          <VStack space={5} marginTop={20}>
            {/* Render the join button */}
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

            {/* Render the back button */}
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

// Export the component as the default export
export default ChallengeModal;
