import { background, border } from "native-base/lib/typescript/theme/styled-system";
import { StyleSheet } from "react-native";

const challengeBoxStyles = StyleSheet.create({
unactiveChallengeBox: {
    flex: 1,
    width: '100%',
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
    flex: 1,
    width: '100%',
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
challengeText: {
    fontSize: 25,
},
onGoingText: {
    color: 'red'
},
challengeImage: {
    height: 80,
    width: 80,
    marginRight: 0,
    marginLeft: 'auto',
}
});

export default challengeBoxStyles;