import { GraphQLQuery } from "@aws-amplify/api";
import { API, Auth, DataStore } from "aws-amplify";
import { User } from "../../models";
import { CreateUserInput, CreateUserMutation } from "../../API";
import { createUser } from "../../graphql/mutations";

export const createUserInDatabase = async (
  userId: string,
  email?: string,
  name?: string
) => {
  const userQuery = await DataStore.query(User, (user) => user.id.eq(userId));
  if (userQuery.length == 0) {
    try {
      const user: CreateUserInput = { id: userId, name: name, email: email };
      await API.graphql<GraphQLQuery<CreateUserMutation>>({
        query: createUser,
        variables: { input: user },
      });
    } catch (error) {
      console.log(error);
    }
  }
};
