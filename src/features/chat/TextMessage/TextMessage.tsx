import { StyleSheet } from "react-native";
import { Message, TextType } from "../../../../types";
import { useSelector } from "@app/hooks";
import moment from "moment";
import Text from "@components/Text";
import { HStack, theme, View } from "native-base";
import { convertDateToTimeString } from "@app/util";

const TextMessage = (message: Message) => {
  const { user } = useSelector((store) => store.auth);
  function isMessage() {
    return message.userID === user?.userId;
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMessage() ? "#DCF8C5" : "white",
          alignSelf: isMessage() ? "flex-end" : "flex-start",
        },
      ]}
      rounded="lg"
    >
      <View flexDirection="row">
        <Text
          type={TextType.ChatName}
          color={theme.colors.coolGray[800]}
          style={{ marginBottom: 25 / 4 }}
        >
          {message.userName}
        </Text>
        <Text
          type={TextType.ChatName}
          color={theme.colors.coolGray[400]}
          style={{ marginHorizontal: 25 / 4 }}
        >
          •
        </Text>
        <Text type={TextType.ChatName} color={theme.colors.coolGray[400]}>
          {convertDateToTimeString(moment(message.createdAt).toDate())}
        </Text>
      </View>
      <Text type={TextType.ChatText} color="black">
        {message.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 25 / 2,
    padding: 10,
  },

  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
});

export default TextMessage;
