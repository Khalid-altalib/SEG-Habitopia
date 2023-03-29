// Import the AntDesign icon from the Expo Vector Icons library
import { AntDesign } from "@expo/vector-icons";

// Import several components from the Native Base library
import { ZStack, Image, IconButton } from "native-base";

// Import React and the useState hook from the React library
import React, { useState } from "react";

// Import TouchableOpacity from the React Native library
import { TouchableOpacity } from "react-native";

type Props = {
  isUserLiked: boolean;
};

const CatchUpBox = (props: Props) => {
  const { isUserLiked } = props;
  // Declare the isLiked state with the value of isUserLiked
  const [isLiked, setIsLiked] = useState(isUserLiked);

  // Define the onHeartPressed function to toggle the isLiked state
  const onHeartPressed = () => setIsLiked(!isLiked);

  // Render a TouchableOpacity with a ZStack and an Image component inside
  // The Image component displays an image from a URL using the source prop
  // The IconButton component displays a heart icon and changes the icon depending on whether the CatchUpBox has been liked or not
  return (
    <TouchableOpacity testID="catchUpBox">
      <ZStack padding={5} width={150} height={150}>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          alt="Alternate Text"
          size="xl"
          rounded="xl"
        />
        <IconButton
          testID="heartButton"
          borderRadius="xl"
          colorScheme="red"
          variant="ghost"
          onPress={onHeartPressed}
          _icon={{
            as: AntDesign,
            name: isLiked ? "heart" : "hearto",
          }}
        />
      </ZStack>
    </TouchableOpacity>
  );
};

export default CatchUpBox;
