import moment from "moment";
import { View, Text, StyleSheet } from "react-native";
import { Message } from "types";

/**
 * A validation message for all check-ins that have been validated
 *
 * @param props - The properties passed to the component.
 * @returns - The validation message component.
 */
const ValidationMessage = (message: Message) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: "#ADD8E6",
        },
      ]}
    >
      <Text>{message.text}</Text>
      <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 20,
  },

  time: {
    color: "black",
    alignSelf: "flex-end",
  },

  count: {
    color: "black",
    alignSelf: "flex-start",
  },
});

export default ValidationMessage;
