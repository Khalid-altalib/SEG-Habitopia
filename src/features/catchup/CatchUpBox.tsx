import { AntDesign } from "@expo/vector-icons";
import { ZStack, Image, IconButton } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

type Props = {};

const CatchUpBox = (props: Props) => {
  let isUserLiked = false;
  const [isLiked, setIsLiked] = useState(isUserLiked);
  const onHeartPressed = () => setIsLiked(!isLiked);
  return (
    <TouchableOpacity>
      <ZStack size="full" style={{ aspectRatio: 1 }}>
        <Image
          source={{ uri: "https://picsum.photos/2000" }}
          alt="Alternate Text"
          size="full"
          rounded="lg"
        />
        <IconButton
          colorScheme="red"
          variant="link"
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
