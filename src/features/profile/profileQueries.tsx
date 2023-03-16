import { getUserFromDatabase, getUserFromDatabasebyID } from "@app/util";
import { DataStore } from "aws-amplify";
import { Follow, User } from "src/models";

export const followUserQuery = async (
  followingUserID: string,
  thunkAPI: any
) => {
  const user = await getUserFromDatabase(thunkAPI);
  const followingUser = await getUserFromDatabasebyID(followingUserID);
  const follow = await DataStore.save(
    new Follow({
      followingUser: followingUser,
      followedBy: user,
    })
  );
};

export const getFollowing = async (
  profileID: string,
  followList: { name: string; userId: string }[]
) => {
  const following = await DataStore.query(Follow, (follow) =>
    follow.followedBy.id.eq(profileID)
  );
  for await (const follow of following) {
    const followingUser = (
      await DataStore.query(User, (user) =>
        user.id.eq(follow.followFollowingUserId || "")
      )
    )[0];
    followList.push({
      name: followingUser.name || "User not found",
      userId: followingUser.id,
    });
  }
  return followList;
};

export const getFollowers = async (
  profileID: string,
  followList: { name: string; userId: string }[]
) => {
  const followers = await DataStore.query(Follow, (follow) =>
    follow.followingUser.id.eq(profileID)
  );
  for await (const follow of followers) {
    const follower = (
      await DataStore.query(User, (user) =>
        user.id.eq(follow.followFollowedById || "")
      )
    )[0];
    followList.push({
      name: follower.name || "User not found",
      userId: follower.id,
    });
  }
  return followList;
};

export const getCount = async (userId: string) => {
  const followingCount = await DataStore.query(Follow, (follow) =>
    follow.followFollowedById.eq(userId)
  );

  const followerCount = await DataStore.query(Follow, (follow) =>
    follow.followFollowingUserId.eq(userId)
  );

  return { followerCount: followerCount, followingCount: followingCount };
};
