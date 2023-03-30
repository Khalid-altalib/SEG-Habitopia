import { MessageEnum } from "src/models";
import { ChatState } from "./chatSlice";

// Mocks the chat state for testing purposes
const mockState: ChatState = {
    chats: [
      {
        id: 'chat-1',
        name: 'Fitness Chat',
        image: 'https://example.com/chat1.png',
        text: 'This is Chat 1',
        time: '2022-01-01T00:00:00.000Z',
        messages: [
          {
            id: 'msg-1',
            chatRoomId: 'chat-1',
            createdAt: '2022-01-01T00:00:01.000Z',
            userID: 'user-1',
            userName: 'User 1',
            text: 'Hello',
            validationCount: 0,
            messageType: MessageEnum.TEXT,
          },
          {
            id: 'msg-2',
            chatRoomId: 'chat-1',
            createdAt: '2022-01-01T00:00:02.000Z',
            userID: 'user-2',
            userName: 'User 2',
            text: 'Hi',
            validationCount: 1,
            isValidated: true,
            messageType: MessageEnum.TEXT,
          },
        ],
        unreadMessages: 1,
      },
      {
        id: 'chat-2',
        name: 'Chat 2',
        image: 'https://example.com/chat2.png',
        text: 'This is Chat 2',
        time: '2022-02-01T00:00:00.000Z',
        messages: [
          {
            id: 'msg-3',
            chatRoomId: 'chat-2',
            createdAt: '2022-02-01T00:00:01.000Z',
            userID: 'user-3',
            userName: 'User 3',
            text: 'Hey',
            validationCount: 0,
            isValidated: false,
            messageType: MessageEnum.TEXT,
          },
          {
            id: 'msg-4',
            chatRoomId: 'chat-2',
            createdAt: '2022-02-01T00:00:02.000Z',
            userID: 'user-2',
            userName: 'User 2',
            text: 'Hello again',
            validationCount: 0,
            isValidated: false,
            messageType: MessageEnum.TEXT,
          },
        ],
        unreadMessages: 0,
      },
    ],
    fetchChats: {
      loading: false,
      error: '',
    },
    fetchMessages: {
      loading: false,
      error: '',
    },
    sendMessage: {
      loading: false,
      error: '',
    },
    fetchDetails: {
      loading: false,
      error: '',
    },
    sendCheckIn: {
      loading: false,
      error: '',
    },
    fetchCheckInSnippet: {
      loading: false,
      error: '',
    },
    details: undefined,
    currentChatId: 'chat-1',
    pageNumber: 0,
    checkInSnippet: [{
        challenge: {
          id: '1',
          name: 'Fitness',
          description: 'Be active',
          active: true
        },
        endDate: '2023-04-01T00:00:00.000Z',
        chatId: 'chat-1'
      },
      {
        challenge: {
          id: '2',
          name: 'Study',
          description: 'Study hard',
          active: false
        },
        endDate: '2023-04-02T00:00:00.000Z',
        chatId: 'chat-2'
      }
    ],
};

export default mockState;