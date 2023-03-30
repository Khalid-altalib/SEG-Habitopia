import { DataStore, SortDirection } from "aws-amplify";
import { Leaderboard, User, Checkin } from "../../models";

/**
 * updates the leaderboard to increment the checkin count
 * for a given user and challenge type. If the user does not have an entry
 * in the leaderboard, a new entry is created
 * @param checkinChallengeTypeId The challenge type id for the checkin
 * @param user user for the validated checkin
 */
export const updateLeaderboardWithNewValidatedCheckin = async (
  checkinChallengeTypeId: string,
  user: User
) => {
  if (!checkinChallengeTypeId || !user) return;
  try {
    const leaderboardEntry = await fetchLeaderboardByUserIDAndChallengeType(
      user.id,
      checkinChallengeTypeId as string
    );
    const currentCheckins = (await leaderboardEntry?.numberOfCheckins) ?? 0;
    const newCheckins = currentCheckins + 1;
    if (currentCheckins === 0) {
      await createNewLeaderboardEntry(
        user.id,
        user,
        checkinChallengeTypeId as string
      );
    } else {
      await updateLeaderboardWithCheckinCount(leaderboardEntry, newCheckins);
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * returns the leaderboard values for a given challenge type and page as a key value pair of name and number of checkins
 * @param challengeType a string representing the challenge type
 * @param page a number representing the page of the leaderboard
 * @returns key value pair of name and number of checkins
 */
export const fetchLeaderboardData = async (
  challengeType: string,
  page: number
) => {
  const data = await DataStore.query(
    Leaderboard,
    (entry) => entry.ChallengeType.name.eq(challengeType),
    {
      page: page as number,
      limit: 10,
      sort: (entry) => entry.numberOfCheckins(SortDirection.DESCENDING),
    }
  );
  const leaderboard = data.map((entry) => {
    return {
      id: entry.leaderboardUserId,
      checkins: entry.numberOfCheckins,
    };
  });
  const result = await Promise.all(
    leaderboard.map(async (entry) => {
      const user = await DataStore.query(User, entry.id);
      return {
        userId: entry.id,
        name: user?.name,
        checkins: entry.checkins,
      };
    })
  );
  const serializableResult = [
    ...result.map((item) => {
      return { checkins: item.checkins, name: item.name, userId: item.userId };
    }),
  ];
  return serializableResult;
};

/**
 * fetches the leaderboard entry for a given user and challenge type
 * @param userID id of the user
 * @param challengeType name of the challenge type
 * @returns leaderboard entry
 */
export const fetchLeaderboardByUserIDAndChallengeType = async (
  userID: string,
  challengeType: string
) => {
  const [leaderboardEntry] = await DataStore.query(Leaderboard, (entry) =>
    entry.and((entry) => [
      entry.leaderboardUserId.eq(userID),
      entry.ChallengeType.name.eq(challengeType),
    ])
  );
  return leaderboardEntry;
};

/**
 * Creates a new leaderboard entry for a given user and challenge type with
 * a checkin count of 1
 * @param userID the user id for the new leaderboard entry
 * @param user user object for the new leaderboard entry
 * @param challengeType type of challenge for the new leaderboard entry
 * Cannot be tested by jest because it uses DataStore
 */
const createNewLeaderboardEntry = async (
  userID: string,
  user: User,
  challengeType: string
) => {
  await DataStore.save(
    new Leaderboard({
      leaderboardUserId: userID,
      numberOfCheckins: 1,
      leaderboardChallengeTypeId: challengeType,
      User: user,
    })
  );
};

/**
 * Updates an existing leaderboard entry with a new checkin count
 * @param leaderboardEntry entry to be updated
 * @param checkinCount updated count value
 * Cannot be tested by jest because it uses DataStore
 */
const updateLeaderboardWithCheckinCount = async (
  leaderboardEntry: Leaderboard,
  checkinCount: number
) => {
  await DataStore.save(
    Leaderboard.copyOf(leaderboardEntry, (updated) => {
      updated.numberOfCheckins = checkinCount;
    })
  );
};
