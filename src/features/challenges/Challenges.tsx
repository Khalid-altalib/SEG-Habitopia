import { Box, Button, Center, HStack } from 'native-base';
import React, { useState } from 'react'
import { View, Image, SafeAreaView, FlatList, Text, TouchableOpacity, GestureResponderEvent, ListRenderItem, Alert, Modal, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { Challenge } from '../../../types';
import PaddedLayout from '../../components/PaddedLayout';
import styles from '../../constants/Styles';

type ChallengeChoice = {
    challenge: Challenge;
    onPress: ((event: GestureResponderEvent) => void);
}
const Challenges = () => {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedChallenge, setselectedChallenge] = useState<Challenge>()
    const allChallenges: Challenge[] = [
        {
            name: 'Sleep', 
            description: 'Study everyday for a minimum of 5 hours or u not sigma lol', 
            active: true,
            color: 'cornflowerblue',
            image: 'https://media.tenor.com/qr1kVztk6uwAAAAM/sleepy-bed-time.gif'
        }, 
        {
            name: 'Food', 
            description: 'Sleep earlier or u not sigma lol', 
            active: true,
            color: 'limegreen',
            image: 'https://blog.bareminerals.com/wp-content/uploads/2019/07/BareBlog_CleanMealPlans_animation-2.gif'
        }, 
        {
            name: 'Fitness', 
            description: 'jim or u not sigma lol', 
            active: false,
            color: 'black',
            image: 'https://media.tenor.com/7WEoh2-8BxsAAAAC/free-weights-dumbbell.gif'

        }
    ];
    const ChallengeView = ({challenge, onPress}: ChallengeChoice) => {
        let color = challenge.color;
        if (color === 'black' || '#000000') {
            color = 'white'
        }
        return(
            <>
            {challenge.active ? (
            <TouchableOpacity onPress={onPress}>
                    <Box style={styles.activeChallengeBox} backgroundColor= {challenge.color}>
                        <HStack>
                            <Box style={{justifyContent: 'center', padding: 10}}>
                                <Text style= {[styles.challengeText, {color: color}]}>{challenge.name}</Text>
                                <Text style= {styles.onGoingText}>On-going</Text>
                            </Box>
                            <Image source={{uri: challenge.image}} style= {styles.challengeImage}/>
                        </HStack>
                    </Box>
            </TouchableOpacity>
            ) 
            : (
            <TouchableOpacity onPress={onPress}>
                    <Box style={styles.challengeBox} backgroundColor= {challenge.color}>
                        <HStack>
                            <Box style={{justifyContent: 'center', padding: 10}}>
                                <Text style= {[styles.challengeText, {color: color}]}>{challenge.name}</Text>
                            </Box>
                            <Image source={{uri: challenge.image}} style= {styles.challengeImage}/>
                        </HStack>
                    </Box>
            </TouchableOpacity>
            )}
            </>
            
    )};
    
  return (
        
          <PaddedLayout>
            <View style={styles.centeredContent}>
            <Text style={styles.challengeTitle}>Pick a category 🚀🚀</Text>
            
            <FlatList 
            style= {styles.challengeList}
            data = {allChallenges}
            renderItem = {({item}) => <ChallengeView
            challenge={item}
            onPress={() => {setselectedChallenge(item); setModalVisible(true)}} 
          />}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View>
                <View style={styles.challengeModalView}>
                    <Text>{selectedChallenge?.description}</Text>
                    <HStack>
                    <Button
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text>Cancel</Text>
                    </Button>
                    <Button>Accept</Button>
                    </HStack>
                </View>
                </View>
            </Modal>
            </View>
          </PaddedLayout>
          
  );
}

export default Challenges