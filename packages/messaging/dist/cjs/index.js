'use strict';

var Data$1 = require('./Data.js');

var Data = {
  getModuleName: Data$1.getModuleName,
  getInfo: Data$1.getInfo,
  getFields: Data$1.getFields,
  queryUserAddressBook: Data$1.queryUserAddressBook,
  mutationCreateMessage: Data$1.mutationCreateMessage,
  subscribeMessagingStatus: Data$1.subscribeMessagingStatus,
  subscribeMessagingData: Data$1.subscribeMessagingData,
  mutationCreateTestMessage: Data$1.mutationCreateTestMessage,
  queryGetUnreadMessages: Data$1.queryGetUnreadMessages,
  queryGetMessages: Data$1.queryGetMessages,
  mutationUpdateMessageStatus: Data$1.mutationUpdateMessageStatus
};

module.exports = Data;
