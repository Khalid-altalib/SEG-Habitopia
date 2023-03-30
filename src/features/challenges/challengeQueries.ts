// Import required modules and models
import { DataStore } from "@aws-amplify/datastore";
import { getUserFromDatabase } from "../../app/util";
import {
  ChallengeType as ChallengeTypeModel,
  Challenge as ChallengeModel,
  ChatRoom,
  UserChatRoom,
  ChallengeUser,
  User,
  ChallengeStatusEnum,
} from "../../models";
import {
  ALREADY_PART_OF_CHALLENGE,
  CANNOT_JOIN_CHAT,
  CHALLENGE_NOT_FOUND,
  GROUP_CHAT_PARTICIPANTS,
} from "@features/constants";
import moment from "moment";

// A function to join a challenge
export const joinChallengeQuery = async (
  challengeTypeInstance: ChallengeTypeModel,
  thunkAPI: any
) => {
  // Get the user from the database
  const user = await getUserFromDatabase(thunkAPI);

  // Check if the user is already part of the challenge
  await isUserPartOfChallenge(challengeTypeInstance, user);

  // Find a challenge to join
  const challengeToJoin = await findChallengeToJoin(challengeTypeInstance);

  // Save the challenge user
  await DataStore.save(
    new ChallengeUser({
      user: user,
      userId: user.id,
      challengeId: challengeToJoin.id,
      challenge: challengeToJoin,
    })
  );

  // Add user to the chat room of the challenge
  await addUserToChatRoom(challengeToJoin, user);

  // Update the user count of the challenge
  await DataStore.save(
    ChallengeModel.copyOf(challengeToJoin, (updated) => {
      updated.userCount += 1;
    })
  );
};

// A function to check if the user is already part of the challenge
const isUserPartOfChallenge = async (
  challengeTypeInstance: ChallengeTypeModel,
  user: User
) => {
  // Get the challenge users from the database
  const challengeUsers = await DataStore.query(ChallengeUser, (challengeUser) =>
    challengeUser.user.id.eq(user.id)
  );

  // Get the challenges from the challenge users
  const challenges = challengeUsers.map(
    (challengeUser) => challengeUser.challenge
  );

  // Loop through the challenges and throw an error if the user is already part of the challenge
  for await (const challenge of challenges) {
    if (
      challenge.challengeChallengeTypeId === challengeTypeInstance.id &&
      challenge.status !== ChallengeStatusEnum.COMPLETED
    ) {
      throw new Error(ALREADY_PART_OF_CHALLENGE);
    }
  }
};

// A function to find a challenge to join
const findChallengeToJoin = async (
  challengeTypeInstance: ChallengeTypeModel
) => {
  try {
    // Query the database for available challenges
    const availableChallenges = await DataStore.query(
      ChallengeModel,
      (allChallenges) =>
        allChallenges.and((toJoinChallenge) => [
          toJoinChallenge.ChallengeType.id.eq(challengeTypeInstance.id),
          toJoinChallenge.userCount.lt(GROUP_CHAT_PARTICIPANTS),
          toJoinChallenge.status.eq(ChallengeStatusEnum.INACTIVE),
        ])
    );

    // If there are no available challenges, create a new challenge and chat room
    if (availableChallenges.length == 0) {
      const chatName =
        challengeTypeInstance.name + " - " + moment().format("DD/MM/YYYY");
      const newChatRoom = await DataStore.save(
        new ChatRoom({ name: chatName })
      );
      const toJoin = await DataStore.save(
        new ChallengeModel({
          ChatRoom: newChatRoom,
          ChallengeType: challengeTypeInstance,
          challengeChallengeTypeId: challengeTypeInstance.id,
          userCount: 0,
          status: ChallengeStatusEnum.INACTIVE,
        })
      );
      return toJoin;
    }

    return availableChallenges[0];
  } catch (error) {
    throw new Error(CHALLENGE_NOT_FOUND);
  }
};

// A function that adds the user to the chat room
const addUserToChatRoom = async (
  challengeToJoin: ChallengeModel,
  user: User
) => {
  try {
    const chatRoomToJoin = (
      await DataStore.query(ChatRoom, (chatRoom) =>
        chatRoom.id.eq(challengeToJoin.challengeChatRoomId || "")
      )
    )[0];
    await DataStore.save(
      new UserChatRoom({
        chatRoomId: chatRoomToJoin.id,
        chatRoom: chatRoomToJoin,
        user: user,
        userId: user.id,
      })
    );
  } catch (error) {
    throw new Error(CANNOT_JOIN_CHAT);
  }
};
