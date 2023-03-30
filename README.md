# Habitopia

<p align="center"><img src="https://user-images.githubusercontent.com/61121030/228520957-7a881387-73bf-47b4-8d36-6abd627c1b00.png"/></p>

<p align="center"><i>A social media app that turns habit-building into a multiplayer game supercharged with social accountability.</i></p>

Habit-forming is not an easy task, and maintaining good habits consistently can be a challenging
feat. However, in today’s socially charged world, there is no reason why building healthy habits
shouldn’t be fun and interactive. Enter Habitopia, the gamified app designed to make habit-
forming fun, social, and engaging. Habitopia is an app that allows users to register, log in,
and participate in challenges where they can build good habits with a group of like-minded
individuals. Users can check in to show participation in the challenge and follow people, view
the leaderboard, and chat with others in a group chat. Habitopia aims to gamify the habit-
forming process, making it more fun and engaging for users. We aimed to create an app that
users can easily navigate and use to build sustainable habits, track their progress, and connect
with other users in a social environment.

## An overview of the technologies used

- React Native
- Jest
- React Native Testing Library (RNTL)
- TypeScript
- Expo
- NativeBase
- AWS Amplify

## Accessing the deployed version

To access the Habitopia App, follow these steps:

- Open a web browser and go to the website https://appetize.io/.

- On the top right corner of the page, click on the "Sign In" button.

- Enter the following login credentials:
    Email: habitopia1@gmail.com
    Password: Password.123

- Once logged in, select the appropriate operating system option for your device (IOS or Android).

- You can log in to the application using the generated mock user with the details:
    Email: john.doe@example.org, bob.smith@example.org, petra.pickles@example.org
    Password: Password.123

The bundle for both operating systems was built using [EAS Build Tool](https://docs.expo.dev/build/introduction/),
for Android APK using https://docs.expo.dev/build-reference/apk/ and for iOS .app using https://docs.expo.dev/build-reference/apk/.

## Contributors

- [Abdulrahman Gallul](https://github.com/A-Gully)
- [Burhan Tekcan](https://github.com/BurhanT)
- [Khalid Altalib](https://github.com/Khalid-altalib)
- [Kunal Charn](https://github.com/kunal-charn)
- [Mohammed Chowdhury](https://github.com/ihtasham42)
- [Nickan Tousi](https://github.com/nickan2c)
- [Tareita Nawaz](https://github.com/tareita)
- [Tony Smith](https://github.com/toggysmith)
- [Vikash Senthil Kumar](https://github.com/Vikash-Vikash)

## Known Bugs
1. On joining a challenge chat with no messages, after sending a message the page has to be
reloaded to see current and new messages.
2. Fonts do not load in the deployed build; an issue with Expo itself: [click for expo issue](https://github.com/expo/expo/issues/21888)