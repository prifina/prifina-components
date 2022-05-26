import { getModuleName, getInfo, getFields, queryUserAddressBook, mutationCreateMessage, mutationCreateDataMessage, subscribeMessagingStatus, subscribeMessagingData, mutationCreateTestMessage, mutationCreateTestDataMessage, queryGetUnreadMessages, queryGetMessages, mutationUpdateMessageStatus } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryUserAddressBook: queryUserAddressBook,
  mutationCreateMessage: mutationCreateMessage,
  mutationCreateDataMessage: mutationCreateDataMessage,
  subscribeMessagingStatus: subscribeMessagingStatus,
  subscribeMessagingData: subscribeMessagingData,
  mutationCreateTestMessage: mutationCreateTestMessage,
  mutationCreateTestDataMessage: mutationCreateTestDataMessage,
  queryGetUnreadMessages: queryGetUnreadMessages,
  queryGetMessages: queryGetMessages,
  mutationUpdateMessageStatus: mutationUpdateMessageStatus
};

export { Data as default };
