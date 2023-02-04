import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Pressable, Text, Image, StyleSheet } from 'react-native'
import { RootParams } from '../../../types'




type Props = {}

const ChatItem = (props: Props) => {
  const navigation = useNavigation<NavigationProp<RootParams>>()

  return (
    <Pressable onPress={() => navigation.navigate('Other')}style={chatstyles.chatContainer}>
        <Image source={{uri: 'https://via.placeholder.com/150'}} style={chatstyles.image}/>
        <View style={chatstyles.container}>
            <View style={chatstyles.row}>
                <Text style={chatstyles.name} numberOfLines={1}>
                    Name Lorem Ipsum
                </Text>
                <Text>00:00</Text>
            </View>
            <View>
                <Text numberOfLines={2} style={chatstyles.lastMessage}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Labore earum alias minima facilis eos quis vitae id culpa, aut illo dolorem quas cupiditate totam eveniet quos nam obcaecati temporibus at!
                </Text>
            </View>
        </View>
    </Pressable>
  )
}

const chatstyles = StyleSheet.create({

    chatContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 60,

    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    },

    container: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    row:{
        flexDirection: 'row',
        marginBottom: 5,
    },

    name:{
        flex: 1,
    },
    
    lastMessage:{

    }
})

export default ChatItem