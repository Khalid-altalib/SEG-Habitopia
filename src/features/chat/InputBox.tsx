import { Button, TextInput, View, StyleSheet } from 'react-native'
import React from 'react'
import { Checkin } from '../../models/index.js';
import { DataStore } from '@aws-amplify/datastore';


type Props = {}


const handleCheckIn = async () => {
    try{
    await DataStore.save( // random data
        new Checkin({ // get time now as a string
            timeStamp: new Date().getTime().toString(),
            userID: "b5c0baaf-9cfc-4f75-8f4c-61a39eea57d2", // PLACEHOLDER FOR CURRENT USER
            chatroomID: "a36d9934-b05a-4765-af1d-79619d468eb3" // PLACEHOLDER FOR CURRENT CHATROOM
        })
    );
    console.log('Check in saved');
    } catch (error) {
        console.log("Error saving check in", error);
        }

}
const InputBox = (props: Props) => {
  return (
    <View style={styles.container}>
        <TextInput  style={styles.input} placeholder='type your message' />
        <Button  title='send' ></Button>
        <Button title='check in'  onPress = {handleCheckIn}></Button>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },

  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 15,
    paddingHorizontal: 10,
    overflow: "scroll",
  },
});

export default InputBox;
