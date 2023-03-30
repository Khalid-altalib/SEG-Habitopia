import { getUserFromDatabase, getUserFromDatabasebyID } from "@app/util";
import { DataStore } from "aws-amplify";
import { Follow, User } from "src/models";

export const isFollowingQuery = async (profileID: string, thunkAPI: any) => {
  const user = await getUserFromDatabase(thunkAPI);
  // check if this user is following the profile
  const checkIfFollowing = await DataStore.query(Follow, (follow) =>
    follow.and((follow) => [
      follow.followFollowedById.eq(user.id),
      follow.followFollowingUserId.eq(profileID),
    ])
  );
  if (checkIfFollowing.length > 0) {
    return true;
  } else {
    return false;
  }
};

export const followUserQuery = async (
  followingUserID: string,
  thunkAPI: any
) => {
  // create a follow object with the user and the profile being followed
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
  // get all the follow objects where the followedBy id is the profile id
  const following = await DataStore.query(Follow, (follow) =>
    follow.followedBy.id.eq(profileID)
  );
  // for each follow object, get the user object that is being followed
  for await (const follow of following) {
    const followingUser = (
      await DataStore.query(User, (user) =>
        user.id.eq(follow.followFollowingUserId || "")
      )
    )[0];
    // add the user object to the followList
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
  // get all the follow objects where the followingUser id is the profile id
  const followers = await DataStore.query(Follow, (follow) =>
    follow.followingUser.id.eq(profileID)
  );
  // for each follow object, get the user object that is following
  for await (const follow of followers) {
    const follower = (
      await DataStore.query(User, (user) =>
        user.id.eq(follow.followFollowedById || "")
      )
    )[0];
    // add the user object to the followList
    followList.push({
      name: follower.name || "User not found",
      userId: follower.id,
    });
  }
  return followList;
};

export const getCount = async (userId: string) => {
  // get all the objects where the profile if following
  const followingCount = await DataStore.query(Follow, (follow) =>
    follow.followFollowedById.eq(userId)
  );
  // get all the objects where the profile is being followed
  const followerCount = await DataStore.query(Follow, (follow) =>
    follow.followFollowingUserId.eq(userId)
  );

  return {
    followerCount: followerCount.length,
    followingCount: followingCount.length,
  };
};
