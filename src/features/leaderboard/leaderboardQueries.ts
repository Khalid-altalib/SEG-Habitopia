import {
  DataStore,
  SortDirection,
  API,
  graphqlOperation,
} from "aws-amplify";
import { Leaderboard, User, Checkin } from "../../models";
import { getUserFromDatabasebyID } from "@app/util";
import {
  OnCreateCheckinSubscription,
  OnCreateCheckinSubscriptionVariables,
} from "../../API";
import { GraphQLSubscription } from "@aws-amplify/api";
import { onCreateCheckin } from "../../graphql/subscriptions";

/**
 * Subscribes to the checkin model
 * updates the leaderboard model when the user checks in
 * @param currentUserId id of the current user
 * @returns subscription to the checkin model
 */
export const addCheckinSubscriptionForLeaderboard = (currentUserId: string) => {
  const filter: OnCreateCheckinSubscriptionVariables = {
    filter: {
      userID: {
        eq: currentUserId,
      },
    },
  };
  const checkinSubscription = API.graphql<
    GraphQLSubscription<OnCreateCheckinSubscription>
  >(graphqlOperation(onCreateCheckin, filter)).subscribe({
    next: async ({ value }) => {
      const checkin = { ...value.data?.onCreateCheckin };
      const { checkinChallengeTypeId } = checkin;
      const user = await getUserFromDatabasebyID(currentUserId);
      const leaderboardEntry = await fetchLeaderboardByUserIDAndChallengeType(
        currentUserId,
        checkinChallengeTypeId as string
      );
      const currentCheckins = (await leaderboardEntry?.numberOfCheckins) ?? 0;
      const newCheckins = currentCheckins + 1;
      if (currentCheckins === 0) {
        await createNewLeaderboardEntry(
          currentUserId,
          user,
          checkinChallengeTypeId as string
        );
      } else {
        await updateLeaderboardWithNewCheckin(leaderboardEntry, newCheckins);
      }
    },
    error: (err) => console.error(err),
  });
  return checkinSubscription;
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
 */
const updateLeaderboardWithNewCheckin = async (
  leaderboardEntry: Leaderboard,
  checkinCount: number
) => {
  await DataStore.save(
    Leaderboard.copyOf(leaderboardEntry, (updated) => {
      updated.numberOfCheckins = checkinCount;
    })
  );
};
