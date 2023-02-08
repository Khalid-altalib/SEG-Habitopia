import { background, border } from "native-base/lib/typescript/theme/styled-system";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  maxSize: {
    width: "100%",
    height: "100%",
  },
  centeredContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  challengeModalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  challengeBox: {
    overflow: 'hidden',
    margin: 5,
    borderRadius: 20,
    shadowColor: '#000',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 4,
    minHeight:80,
  },
  activeChallengeBox:{
    overflow: 'hidden',
    margin: 5,
    borderRadius: 20,
    shadowColor: '#000',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: 'red',
    borderWidth: 4,
    minHeight:80,
  },
  challengeList: {
    width: '100%',
    
  },
  challengeText: {
    fontSize: 25,
  },
  onGoingText: {
    color: 'red'
  },
  challengeTitle: {
    fontSize: 30,
  },
  challengeImage: {
    height: 80,
    width: 80,
    marginRight: 0,
    marginLeft: 'auto',
  }
});

export default styles;
