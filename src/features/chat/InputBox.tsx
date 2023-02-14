import { Button, TextInput, View, StyleSheet } from 'react-native'
import React from 'react'
import { Checkin } from '../../models/index.js';
import { DataStore } from '@aws-amplify/datastore';


type Props = {}


const getData = async () => {
    try {
        const checkins = await DataStore.query(Checkin);
        console.log("Current check-in table: ", JSON.stringify(checkins, null, 2));
      } catch (error) {
        console.log("Error retrieving posts", error);
      }
}

const handleCheckIn = async () => {
    try{
    getData();
    await DataStore.save(
        new Checkin({
            timeStamp: "1970-01-01T12:30:23.999Z",
            userID: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
            chatroomID: "a5r4192g-39de-43d2-baf4-f8c16f0f6f4d"
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
