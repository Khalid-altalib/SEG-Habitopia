import { DataStore } from "@aws-amplify/datastore";
import { getUserFromDatabase } from "../../app/util";
import {
  ChallengeType as ChallengeTypeModel,
  Challenge as ChallengeModel,
  ChatRoom,
  UserChatRoom,
  ChallengeUser,
  User,
} from "../../models";
import {
  ALREADY_PART_OF_CHAT,
  CANNOT_JOIN_CHAT,
  CHALLENGE_NOT_FOUND,
  GROUP_CHAT_PARTICIPANTS,
} from "@features/constants";

export const joinChallengeQuery = async (
  challengeTypeInstance: ChallengeTypeModel,
  thunkAPI: any
) => {
  const user = await getUserFromDatabase(thunkAPI);
  await isUserPartOfChallenge(challengeTypeInstance, user);
  const challengeToJoin = await findChallengeToJoin(challengeTypeInstance);

  await DataStore.save(
    new ChallengeUser({
      user: user,
      challenge: challengeToJoin,
    })
  );

  await addUserToChatRoom(challengeToJoin, user);

  await DataStore.save(
    ChallengeModel.copyOf(challengeToJoin, (updated) => {
      if (updated.userCount) updated.userCount += 1;
    })
  );
};

const isUserPartOfChallenge = async (
  challengeTypeInstance: ChallengeTypeModel,
  user: User
) => {
  const challengeUsers = await DataStore.query(ChallengeUser, (challengeUser) =>
    challengeUser.user.id.eq(user.id)
  );

  const challenges = challengeUsers.map(
    (challengeUser) => challengeUser.challenge
  );

  for await (const challenge of challenges) {
    if (challenge.challengeChallengeTypeId === challengeTypeInstance.id) {
      throw new Error(ALREADY_PART_OF_CHAT);
    }
  }
};

const findChallengeToJoin = async (
  challengeTypeInstance: ChallengeTypeModel
) => {
  try {
    const availableChallenges = await DataStore.query(
      ChallengeModel,
      (allChallenges) =>
        allChallenges.and((toJoinChallenge) => [
          toJoinChallenge.ChallengeType.id.eq(challengeTypeInstance.id),
          toJoinChallenge.userCount.lt(GROUP_CHAT_PARTICIPANTS),
        ])
    );

    if (availableChallenges.length == 0) {
      const newChatRoom = await DataStore.save(new ChatRoom({}));
      const toJoin = await DataStore.save(
        new ChallengeModel({
          ChatRoom: newChatRoom,
          ChallengeType: challengeTypeInstance,
          challengeChallengeTypeId: challengeTypeInstance.id,
          userCount: 0,
        })
      );
      return toJoin;
    }

    return availableChallenges[0];
  } catch (error) {
    throw new Error(CHALLENGE_NOT_FOUND);
  }
};

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
      })
    );
  } catch (error) {
    throw new Error(CANNOT_JOIN_CHAT);
  }
};
