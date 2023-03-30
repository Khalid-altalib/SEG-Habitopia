import { ChallengesState } from "./challengesSlice";

// Mocks the challenge state for testing purposes
const challengesMockState: ChallengesState = {
    challenges: [
        {
            id: '1',
            name: 'Fitness',
            description: 'Be active',
            active: true

        },
        {
            id: '1',
            name: 'Study',
            description: 'Study hard',
            active: false
        }
    ],
    fetchChallenges: {
        loading: false,
        error: ""
    },
    joinChallenge: {
        loading: false,
        error: ""
    }
};

export default challengesMockState;