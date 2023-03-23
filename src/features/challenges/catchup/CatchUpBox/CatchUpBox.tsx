//Expo Icons
import { AntDesign } from "@expo/vector-icons";

//Native Base
import { ZStack, Image, IconButton } from "native-base";

//React
import React, { useState } from "react";

//React Native
import { TouchableOpacity } from "react-native";

type Props = {};
/** */
const CatchUpBox = (props: Props) => {
  let isUserLiked = false;
  const [isLiked, setIsLiked] = useState(isUserLiked);
  const onHeartPressed = () => setIsLiked(!isLiked);
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
