import { DataStore } from "@aws-amplify/datastore";
import { getUserFromDatabase } from "../../app/util";
import { User } from "../../models";


export const getCheckIns = async (
  thunkAPI: any
) => {
  try {
    const user = (await DataStore.query(User, (userProfile) => userProfile.id.eq("b5c0baaf-9cfc-4f75-8f4c-61a39eea57d2")))[0]; // PLACEHOLDER PROFILE
    // const user = await getUserFromDatabase(thunkAPI);
    var checkinCount = 0;
    // get number of items in the array of user Checkins
    for await (const checkin of user.Checkins) {
      checkinCount++;
    }
    
    return checkinCount; 
  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
   
};