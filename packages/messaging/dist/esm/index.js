import { getModuleName, getInfo, getFields, queryUserAddressBook, mutationCreateMessage, subscribeMessagingStatus, subscribeMessagingData, mutationCreateTestMessage, queryGetUnreadMessages, queryGetMessages, mutationUpdateMessageStatus } from './Data.js';

var Data = {
  getModuleName: getModuleName,
  getInfo: getInfo,
  getFields: getFields,
  queryUserAddressBook: queryUserAddressBook,
  mutationCreateMessage: mutationCreateMessage,
  subscribeMessagingStatus: subscribeMessagingStatus,
  subscribeMessagingData: subscribeMessagingData,
  mutationCreateTestMessage: mutationCreateTestMessage,
  queryGetUnreadMessages: queryGetUnreadMessages,
  queryGetMessages: queryGetMessages,
  mutationUpdateMessageStatus: mutationUpdateMessageStatus
};

export { Data as default };
