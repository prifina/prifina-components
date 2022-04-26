import { typeof as _typeof } from './_virtual/_rollupPluginBabelHelpers.js';

var getInfo = function getInfo() {
  return ["queryUserAddressBook", "mutationCreateMessage", "subscribeMessagingStatus", "subscribeMessagingData", "mutationCreateTestMessage", "queryGetUnreadMessages", "queryGetMessages", "mutationUpdateMessageStatus"];
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
var createMessageMutation = "mutation newMessage($input:MessageInput!) {\n    createMessage(input: $input) {\n      messageId\n      receiver\n      sender\n      role\n      createdAt\n      body\n    }\n  }";
var updateMessageStatusMutation = "mutation updateMessage($input:MessageInput!) {\n    createMessage(input: $input) {\n      messageId\n      status\n    }\n  }";

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

var mutationUpdateMessageStatus = function mutationUpdateMessageStatus(_ref) {
  var stage = _ref.stage,
      appID = _ref.appID,
      createMutation = _ref.createMutation,
      callbacks = _ref.callbacks,
      uuid = _ref.uuid,
      variables = _ref.variables;
  console.log("UPD MSG STATUS ", stage);
  console.log("UPD MSG STATUS ", appID);
  console.log("UPD MSG STATUS ", uuid);
  console.log("UPD MSG STATUS ", callbacks);
  console.log("UPD MSG STATUS ", variables);

  if (stage === "dev") {
    var msgs = localStorage.getItem("prifinaMessagingStatuses");
    var msg = {
      uuid: uuid,
      messageId: variables.messageId,
      status: variables.status
    };

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
        updateMessage: msg
      }
    });
  } else {
    return createMutation({
      name: "updateMessage",
      mutation: updateMessageStatusMutation,
      variables: {
        input: {
          uuid: uuid,
          messageId: variables.messageId,
          status: variables.status
        }
      },
      appId: appID
    });
  }
};
var queryGetUnreadMessages = function queryGetUnreadMessages(_ref2) {
  var stage = _ref2.stage;
      _ref2.appID;
      _ref2.name;
      _ref2.createQuery;
      _ref2.fields;
      _ref2.filter;
      _ref2.next;
      _ref2.fieldsList;
      var uuid = _ref2.uuid;

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

      return {
        v: Promise.resolve({
          data: {
            queryGetUnreadMessages: ureadMsgs
          }
        })
      };
    }();

    if (_typeof(_ret) === "object") return _ret.v;
  } else {
    console.log("GET UNREAD MSG QUERY");
  }
};
var queryGetMessages = function queryGetMessages(_ref3) {
  var stage = _ref3.stage;
      _ref3.appID;
      _ref3.name;
      _ref3.createQuery;
      _ref3.fields;
      var filter = _ref3.filter;
      _ref3.next;
      _ref3.fieldsList;
      var uuid = _ref3.uuid;

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
        queryGetMessages: receiverMsgs.reverse()
      }
    });
  } else {
    console.log("GET MSG QUERY");
  }
};
var queryUserAddressBook = function queryUserAddressBook(_ref4) {
  var stage = _ref4.stage;
      _ref4.appID;
      _ref4.name;
      _ref4.createQuery;
      _ref4.fields;
      _ref4.filter;
      _ref4.next;
      _ref4.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        queryUserAddressBook: addressBook
      }
    });
  } else {
    console.log("GET ADDRESS BOOK QUERY");
  }
};
var mutationCreateMessage = function mutationCreateMessage(_ref5) {
  var stage = _ref5.stage,
      appID = _ref5.appID,
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
    return createMutation({
      name: "createMessage",
      mutation: createMessageMutation,
      variables: {
        input: variables
      },
      appId: appID
    });
  }
};
var mutationCreateTestMessage = function mutationCreateTestMessage(_ref6) {
  var stage = _ref6.stage,
      appID = _ref6.appID,
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

    if (msgStatus !== null && JSON.parse(msgStatus)) {
      //console.log("CALLBACKS ", currentCallbacks[appID][0]("OK"));
      // scan msgStatusQueue instead... where status===0
      var unreadMsgs = msgStatusQueue.filter(function (m) {
        return m.uuid === uuid;
      });
      currentCallbacks[appID][0]({
        messagingStatus: {
          cnt: unreadMsgs.length,
          lastMessage: new Date(msg.createdAt).toISOString()
        }
      });
    }

    return Promise.resolve({
      data: {
        createMessage: msg
      }
    });
  } else {
    return createMutation({
      name: "createMessage",
      mutation: createMessageMutation,
      variables: {
        input: variables
      },
      appId: appID
    });
  }
};
var subscribeMessagingStatus = function subscribeMessagingStatus(_ref7) {
  var stage = _ref7.stage;
      _ref7.appID;
      _ref7.name;
      _ref7.createSubscription;
      _ref7.variables;
      _ref7.uuid;

  if (stage === "dev") {
    localStorage.setItem("prifinaMessagingStatus", true);
    return Promise.resolve(true);
  } else {
    console.log("SUBS ");
  }
};
var subscribeMessagingData = function subscribeMessagingData(_ref8) {
  var stage = _ref8.stage;
      _ref8.appID;
      _ref8.name;
      _ref8.createSubscription;
      _ref8.variables;
      _ref8.uuid;

  if (stage === "dev") {
    localStorage.setItem("prifinaMessagingStatus", false);
    return Promise.resolve(true);
  } else {
    console.log("SUBS ");
  }
};
/*


    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });

const dataQuery = `query dataObject($input:DataObjectInput!) {
    getDataObject(input:$input) {
      result
    }
  }`;
  */

export { getFields, getInfo, getModuleName, mutationCreateMessage, mutationCreateTestMessage, mutationUpdateMessageStatus, queryGetMessages, queryGetUnreadMessages, queryUserAddressBook, subscribeMessagingData, subscribeMessagingStatus };
