"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddressBook = exports.getTest = exports.getInfo = void 0;
var addressBook = [{
  name: "Name 1",
  uuid: "xxxxx"
}, {
  name: "Name 2",
  uuid: "zzzzz"
}, {
  name: "Name 3",
  uuid: "wwwww"
}];

var getInfo = function getInfo() {
  return ["getTest", getAddressBook];
};

exports.getInfo = getInfo;

var getTest = function getTest(stage, appID, uuid, filter) {
  console.log("GET TEST ", stage);
  console.log("GET TEST ", appID);
  console.log("GET TEST ", uuid);
  console.log("GET TEST ", filter);

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getTest: "OK"
      }
    });
  }
};

exports.getTest = getTest;

var getAddressBook = function getAddressBook(stage, appID, uuid, filter) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getAddressBook: addressBook
      }
    });
  }
};
/*

 const sendMessage = async (msg, username) => {
    return await API.graphql({
      query: mutations.createMessage,
      variables: { body: msg, username: username },
    });
  };

export const getMessages =  `
  query GetMessages($filter: String) {
    getMessages(filter: $filter) {
      messageId
      body
      createdAt
      username
    }
  }
`;

*/


exports.getAddressBook = getAddressBook;