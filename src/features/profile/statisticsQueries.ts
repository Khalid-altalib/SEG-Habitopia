import { DataStore } from "@aws-amplify/datastore";
import { getUserFromDatabase } from "../../app/util";


export const getCheckIns = async (
  thunkAPI: any
) => {
  try {
    const user = await getUserFromDatabase(thunkAPI);
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