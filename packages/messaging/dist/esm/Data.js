import { typeof as _typeof } from './_virtual/_rollupPluginBabelHelpers.js';

var getInfo = function getInfo() {
  return ["queryUserAddressBook", "mutationCreateMessage", "mutationCreateDataMessage", "subscribeMessagingStatus", "subscribeMessagingData", "mutationCreateTestMessage", "mutationCreateTestDataMessage", "queryGetUnreadMessages", "queryGetMessages", "mutationUpdateMessageStatus"];
};
var getFields = function getFields(query) {
  var fields = [];
  return fields;
};
var getModuleName = function getModuleName() {
  return "Messaging";
};
var addressBook = [{
  name: "Name 1",
  uuid: "13625638c207ed2fcd5a7b7cfb2364a04661"
}, {
  name: "Name 2",
  uuid: "tero"
}, {
  name: "Name 3",
  uuid: "0cc3bc47d8a60c8a0f6f35a9134c689e0a8c"
}];
var unreadMsgsQuery = "query unreadMsgs($input:DataObjectInput!) {\n  getUnreadMsgs(input:$input) {\n    result\n  }\n}";
var getMsgsQuery = "query getMsgs($input:DataObjectInput!) {\n  getMsgs(input:$input) {\n    result\n  }\n}";
var getAddressBookQuery = "query getAddressBook($input:DataObjectInput!) {\n  getAddressBook(input:$input) {\n    result\n  }\n}";
var createMessageMutation = "mutation newMessage($input:MessageInput!) {\n    createMessage(input: $input) {\n     messageId\n     chatId\n     createdAt \n     result\n     receiver\n    }\n  }";
var createDataMessageMutation = "mutation newMessage($input:MessageInput!) {\n  createDataMessage(input: $input) {\n   messageId\n   chatId\n   createdAt \n   result\n   receiver\n  }\n}";
var updateMessageStatusMutation = "mutation updateMessage($input:DataObjectInput!) {\n  updateMessageStatus(input: $input) \n  }";
var subscribeCreateMessage = "subscription msgSubscription($receiver: String!) {\n    addMessage(receiver: $receiver) {\n      messageId\n      chatId\n      receiver\n      result\n    }\n  }";
var subscribeCreateDataMessage = "subscription msgSubscription($receiver: String!) {\n    addDataMessage(receiver: $receiver) {\n      messageId\n      chatId\n      receiver\n      result\n    }\n  }";

function randomID() {
  var chars = "qwertyuiopasdfghjklzxcvbnm";
  var randomstring = "";

  for (var i = 0; i < 3; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }

  chars = "1234567890";

  for (var _i = 0; _i < 3; _i++) {
    var _rnum = Math.floor(Math.random() * chars.length);

    randomstring += chars.substring(_rnum, _rnum + 1);
  }

  return randomstring;
}

var queryGetUnreadMessages = function queryGetUnreadMessages(_ref) {
  var stage = _ref.stage,
      appID = _ref.appID,
      name = _ref.name,
      createQuery = _ref.createQuery,
      fields = _ref.fields,
      filter = _ref.filter,
      next = _ref.next,
      fieldsList = _ref.fieldsList,
      uuid = _ref.uuid;

  if (stage === "dev") {
    var _ret = function () {
      var msgStatuses = localStorage.getItem("prifinaMessagingStatuses");
      var unreadMsgQueue = [];

      if (msgStatuses !== null) {
        //console.log("MSG STORAGE ", msgs);
        var msgQueue = JSON.parse(msgStatuses);
        unreadMsgQueue = msgQueue.filter(function (m) {
          return m.uuid === uuid && m.status === 0;
        });
      }

      var unreadMsgs = [];

      if (unreadMsgQueue.length > 0) {
        var msgs = localStorage.getItem("prifinaMessaging");

        if (msgs !== null) {
          var msgList = JSON.parse(msgs);

          var _loop = function _loop(i) {
            var msgIdx = msgList.findIndex(function (m) {
              return m.messageId === unreadMsgQueue[i].messageId;
            });
            unreadMsgs.push(msgList[msgIdx]);
          };

          for (var i = 0; i < unreadMsgQueue.length; i++) {
            _loop(i);
          }
        }
      }

      var filteredMsgs = [];

      if (typeof filter !== "undefined" && Object.keys(filter).length > 0) {
        filteredMsgs = unreadMsgs.filter(function (m) {
          var filterMatch = false;
          Object.keys(filter).forEach(function (f) {
            console.log("UNREAD FILTER MATCH ", f);
            console.log("UNREAD FILTER MATCH ", m.hasOwnProperty(f));

            if (m.hasOwnProperty(f) && m[f] === filter[f]) {
              filterMatch = true;
            } else {
              filterMatch = false;
            }
          });
          return filterMatch;
        });
      } else {
        filteredMsgs = unreadMsgs;
      }

      return {
        v: Promise.resolve({
          data: {
            getUnreadMsgs: filteredMsgs
          }
        })
      };
    }();

    if (_typeof(_ret) === "object") return _ret.v;
  } else {
    return createQuery({
      query: unreadMsgsQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetMessages = function queryGetMessages(_ref2) {
  var stage = _ref2.stage,
      appID = _ref2.appID,
      name = _ref2.name,
      createQuery = _ref2.createQuery,
      fields = _ref2.fields,
      filter = _ref2.filter,
      next = _ref2.next,
      fieldsList = _ref2.fieldsList,
      uuid = _ref2.uuid;

  if (stage === "dev") {
    var msgs = localStorage.getItem("prifinaMessaging");
    var receiverMsgs = [];

    if (msgs !== null) {
      receiverMsgs = JSON.parse(msgs).filter(function (m) {
        //console.log(uuid, m);
        if (typeof filter !== "undefined" && Object.keys(filter).length > 0) {
          //console.log("MSG FILTER ", filter);
          var filterMatch = false;
          Object.keys(filter).forEach(function (f) {
            console.log("UNREAD FILTER MATCH ", f);
            console.log("UNREAD FILTER MATCH ", m.hasOwnProperty(f));

            if (m.hasOwnProperty(f) && m[f] === filter[f]) {
              filterMatch = true;
            } else {
              filterMatch = false;
            }
          });
          return filterMatch;
        } else {
          //console.log(m?.status === undefined);
          return m.receiver === uuid;
        }
      });
    } // sort reverse order


    return Promise.resolve({
      data: {
        getMsgs: receiverMsgs.reverse()
      }
    });
  } else {
    return createQuery({
      query: getMsgsQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryUserAddressBook = function queryUserAddressBook(_ref3) {
  var stage = _ref3.stage,
      appID = _ref3.appID,
      name = _ref3.name,
      createQuery = _ref3.createQuery,
      fields = _ref3.fields,
      filter = _ref3.filter,
      next = _ref3.next,
      fieldsList = _ref3.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getAddressBook: addressBook
      }
    });
  } else {
    return createQuery({
      query: getAddressBookQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var mutationUpdateMessageStatus = function mutationUpdateMessageStatus(_ref4) {
  var stage = _ref4.stage,
      appID = _ref4.appID,
      name = _ref4.name,
      createMutation = _ref4.createMutation,
      callbacks = _ref4.callbacks,
      uuid = _ref4.uuid,
      variables = _ref4.variables;
  console.log("UPD MSG STATUS ", stage);
  console.log("UPD MSG STATUS ", appID);
  console.log("UPD MSG STATUS ", uuid);
  console.log("UPD MSG STATUS ", callbacks);
  console.log("UPD MSG STATUS ", variables);

  if (stage === "dev") {
    var msgs = localStorage.getItem("prifinaMessagingStatuses");
    ({
      uuid: uuid,
      messageId: variables.messageId,
      status: variables.status
    });

    if (msgs !== null) {
      //console.log("MSG STORAGE ", msgs);
      var msgQueue = JSON.parse(msgs);
      var msgIdx = msgQueue.findIndex(function (m) {
        return m.messageId === variables.messageId;
      });
      msgQueue[msgIdx].status = variables.status;
      localStorage.setItem("prifinaMessagingStatuses", JSON.stringify(msgQueue));
    }

    return Promise.resolve({
      data: {
        updateMessage: true
      }
    });
  } else {
    return createMutation({
      name: name,
      mutation: updateMessageStatusMutation,
      variables: {
        options: {
          input: JSON.stringify({
            uuid: uuid,
            messageId: variables.messageId
          })
        }
      },
      appId: appID
    });
  }
};
var mutationCreateMessage = function mutationCreateMessage(_ref5) {
  var stage = _ref5.stage,
      appID = _ref5.appID,
      name = _ref5.name,
      createMutation = _ref5.createMutation,
      callbacks = _ref5.callbacks,
      uuid = _ref5.uuid,
      variables = _ref5.variables;
  console.log("CREATE MSG ", stage);
  console.log("CREATE MSG ", appID);
  console.log("CREATE MSG ", uuid);
  console.log("CREATE MSG ", callbacks);
  console.log("CREATE MSG ", variables);

  if (stage === "dev") {
    var msg = {
      messageId: randomID(),
      body: variables.body,
      chatId: variables.chatId,
      sender: uuid,
      receiver: variables.receiver,
      createdAt: new Date().getTime()
    };
    var msgQueue = [msg];
    var msgs = localStorage.getItem("prifinaMessaging");

    if (msgs !== null) {
      console.log("MSG STORAGE ", msgs);
      msgQueue = msgQueue.concat(JSON.parse(msgs));
    }

    localStorage.setItem("prifinaMessaging", JSON.stringify(msgQueue));
    var msgStatuses = localStorage.getItem("prifinaMessagingStatuses"); // should use chatId "members" instead of receiver...

    var msgStatusQueue = [{
      uuid: variables.receiver,
      messageId: msg.messageId,
      status: 0
    }];

    if (msgStatuses !== null) {
      console.log("MSG STORAGE ", msgs);
      msgStatusQueue = msgStatusQueue.concat(JSON.parse(msgStatuses));
    }

    localStorage.setItem("prifinaMessagingStatuses", JSON.stringify(msgStatusQueue));
    return Promise.resolve({
      data: {
        createMessage: msg
      }
    });
  } else {
    variables.sender = uuid;
    return createMutation({
      name: name,
      mutation: createMessageMutation,
      variables: {
        content: variables
      },
      appId: appID
    });
  }
};
var mutationCreateTestMessage = function mutationCreateTestMessage(_ref6) {
  var stage = _ref6.stage,
      appID = _ref6.appID,
      name = _ref6.name,
      createMutation = _ref6.createMutation,
      callbacks = _ref6.callbacks,
      uuid = _ref6.uuid,
      variables = _ref6.variables;
  console.log("CREATE MSG ", stage);
  console.log("CREATE MSG ", appID);
  console.log("CREATE MSG ", uuid);
  console.log("CREATE MSG ", callbacks);
  console.log("CREATE MSG ", variables);

  if (stage === "dev") {
    var currentCallbacks = callbacks(); //console.log("CALLBACKS ", currentCallbacks[appID][0]("OK"));
    // const remoteAppUrl = localStorage.getItem("remoteWidget");
    //localStorage.setItem(key, tokens[key]);

    var msgs = localStorage.getItem("prifinaMessaging");
    var msg = {
      messageId: randomID(),
      body: variables.body,
      chatId: variables.chatId,
      sender: variables.sender,
      receiver: uuid,
      createdAt: new Date().getTime()
    };
    var msgQueue = [msg];

    if (msgs !== null) {
      console.log("MSG STORAGE ", msgs);
      msgQueue = msgQueue.concat(JSON.parse(msgs));
    }

    localStorage.setItem("prifinaMessaging", JSON.stringify(msgQueue));
    var msgStatuses = localStorage.getItem("prifinaMessagingStatuses");
    var msgStatusQueue = [{
      uuid: uuid,
      messageId: msg.messageId,
      status: 0
    }];

    if (msgStatuses !== null) {
      console.log("MSG STORAGE ", msgs);
      msgStatusQueue = msgStatusQueue.concat(JSON.parse(msgStatuses));
    }

    localStorage.setItem("prifinaMessagingStatuses", JSON.stringify(msgStatusQueue));
    var msgStatus = localStorage.getItem("prifinaMessagingStatus");

    if (msgStatus !== null) {
      var msgSubs = JSON.parse(msgStatus); // uuid has subscribed notifications....

      if (msgSubs.hasOwnProperty(uuid) && msgSubs[uuid]) {
        //console.log("CALLBACKS ", currentCallbacks[appID][0]("OK"));
        // scan msgStatusQueue instead... where status===0
        var unreadMsgs = msgStatusQueue.filter(function (m) {
          return m.uuid === uuid;
        });
        currentCallbacks[appID][0]({
          addMessage: {
            result: {
              cnt: unreadMsgs.length,
              lastMessage: new Date(msg.createdAt).toISOString()
            }
          }
        });
      }
    }

    return Promise.resolve({
      data: {
        createMessage: msg
      }
    });
  } else {
    variables.receiver = uuid;
    return createMutation({
      name: name,
      mutation: createMessageMutation,
      variables: {
        content: variables
      },
      appId: appID
    });
  }
};
var mutationCreateDataMessage = function mutationCreateDataMessage(_ref7) {
  var stage = _ref7.stage,
      appID = _ref7.appID,
      name = _ref7.name,
      createMutation = _ref7.createMutation;
      _ref7.callbacks;
      var uuid = _ref7.uuid,
      variables = _ref7.variables;

  if (stage === "dev") {
    var msg = {
      messageId: randomID(),
      body: variables.body,
      chatId: variables.chatId,
      sender: uuid,
      receiver: variables.receiver,
      createdAt: new Date().getTime()
    };
    return Promise.resolve({
      data: {
        createDataMessage: msg
      }
    });
  } else {
    variables.sender = uuid;
    return createMutation({
      name: name,
      mutation: createDataMessageMutation,
      variables: {
        content: variables
      },
      appId: appID
    });
  }
};
var mutationCreateTestDataMessage = function mutationCreateTestDataMessage(_ref8) {
  var stage = _ref8.stage,
      appID = _ref8.appID,
      name = _ref8.name,
      createMutation = _ref8.createMutation,
      callbacks = _ref8.callbacks,
      uuid = _ref8.uuid,
      variables = _ref8.variables;

  if (stage === "dev") {
    var currentCallbacks = callbacks();
    var msg = {
      messageId: randomID(),
      body: variables.body,
      chatId: variables.chatId,
      sender: variables.sender,
      receiver: uuid,
      createdAt: new Date().getTime()
    };
    currentCallbacks[appID][0]({
      addDataMessage: {
        result: msg
      }
    });
    return Promise.resolve({
      data: {
        createDataMessage: msg
      }
    });
  } else {
    variables.receiver = uuid;
    return createMutation({
      name: name,
      mutation: createDataMessageMutation,
      variables: {
        content: variables
      },
      appId: appID
    });
  }
};
var subscribeMessagingStatus = function subscribeMessagingStatus(_ref9) {
  var stage = _ref9.stage,
      appID = _ref9.appID,
      name = _ref9.name,
      createSubscription = _ref9.createSubscription,
      variables = _ref9.variables,
      uuid = _ref9.uuid;

  if (stage === "dev") {
    var msgStatus = localStorage.getItem("prifinaMessagingStatus");
    var msgSubs = {};

    if (msgStatus !== null) {
      msgSubs = JSON.parse(msgStatus);
    }

    msgSubs[variables.receiver] = true;
    localStorage.setItem("prifinaMessagingStatus", JSON.stringify(msgSubs));
    return Promise.resolve(true);
  } else {
    console.log("SUBS ");
    return createSubscription({
      name: name,
      mutation: subscribeCreateMessage,
      variables: {
        receiver: uuid
      },
      appId: appID
    });
  }
};
var subscribeMessagingData = function subscribeMessagingData(_ref10) {
  var stage = _ref10.stage,
      appID = _ref10.appID,
      name = _ref10.name,
      createSubscription = _ref10.createSubscription;
      _ref10.variables;
      var uuid = _ref10.uuid;

  if (stage === "dev") {
    return Promise.resolve(true);
  } else {
    console.log("SUBS ");
    return createSubscription({
      name: name,
      mutation: subscribeCreateDataMessage,
      variables: {
        receiver: uuid
      },
      appId: appID
    });
  }
};

export { getFields, getInfo, getModuleName, mutationCreateDataMessage, mutationCreateMessage, mutationCreateTestDataMessage, mutationCreateTestMessage, mutationUpdateMessageStatus, queryGetMessages, queryGetUnreadMessages, queryUserAddressBook, subscribeMessagingData, subscribeMessagingStatus };
