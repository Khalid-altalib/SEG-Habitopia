import moment from "moment";

export const ALREADY_PART_OF_CHAT = "You are already part of the chat";
export const CHALLENGE_NOT_FOUND = "Challenge not found!";
export const GROUP_CHAT_PARTICIPANTS = 3;
export const CANNOT_JOIN_CHAT = "Unable to join chat!";
export const VALIDATION_COUNT = 1;
export const CHECK_IN_MESSAGE = "This is a check in!";
export const ALREADY_VALIDATED_ERROR = "You have already validated!";
export const VALIDATION_MESSAGE_TEXT = async (...args: string[]) => {
  return `${args[0]} has been validated for the check-in on ${moment(
    args[1]
  ).format("ddd Do, hA")}`;
};
export const COULD_NOT_VALIDATE = "Could not validate!";
export const MESSAGE_PAGINATION_LIMIT = 100;
