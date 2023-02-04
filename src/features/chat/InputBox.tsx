import { Button, TextInput, View, StyleSheet } from 'react-native'
import React from 'react'


type Props = {}

const InputBox = (props: Props) => {
  return (
    <View style={styles.container}>
        <TextInput  style={styles.input} placeholder='type your message' />
        <Button  title='send' ></Button>
        <Button title='check in'  ></Button>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
   

    input:{
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 15,
        paddingHorizontal: 10,
        overflow: 'scroll'
    }
})

export default InputBox