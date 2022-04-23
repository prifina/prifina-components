'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
  uuid: "zzzzz"
}, {
  name: "Name 3",
  uuid: "0cc3bc47d8a60c8a0f6f35a9134c689e0a8c"
}];
var createMessageMutation = "mutation newMessage($input:MessageInput!) {\n    createMessage(input: $input) {\n      messageId\n      receiver\n      sender\n      role\n      createdAt\n      body\n    }\n  }";
var updateMessageMutation = "mutation updateMessage($input:MessageInput!) {\n    createMessage(input: $input) {\n      messageId\n      status\n    }\n  }";

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
  console.log("CREATE MSG ", stage);
  console.log("CREATE MSG ", appID);
  console.log("CREATE MSG ", uuid);
  console.log("CREATE MSG ", callbacks);
  console.log("CREATE MSG ", variables);

  if (stage === "dev") {
    var msgs = localStorage.getItem("prifinaMessaging");
    var msg = {
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
      localStorage.setItem("prifinaMessaging", JSON.stringify(msgQueue));
    }

    return Promise.resolve({
      data: {
        updateMessage: msg
      }
    });
  } else {
    return createMutation({
      name: "updateMessage",
      mutation: updateMessageMutation,
      variables: {
        input: {
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
    var msgs = localStorage.getItem("prifinaMessaging");
    var receiverMsgs = [];

    if (msgs !== null) {
      receiverMsgs = JSON.parse(msgs).filter(function (m) {
        console.log(uuid, m); //console.log(m?.status === undefined);

        return m.receiver === uuid && ((m === null || m === void 0 ? void 0 : m.status) === undefined || m.status === 0);
      });
    }

    return Promise.resolve({
      data: {
        queryGetUnreadMessages: receiverMsgs
      }
    });
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
      _ref3.filter;
      _ref3.next;
      _ref3.fieldsList;
      var uuid = _ref3.uuid;

  if (stage === "dev") {
    var msgs = localStorage.getItem("prifinaMessaging");
    var receiverMsgs = [];

    if (msgs !== null) {
      receiverMsgs = JSON.parse(msgs).filter(function (m) {
        console.log(uuid, m); //console.log(m?.status === undefined);

        return m.receiver === uuid;
      });
    }

    return Promise.resolve({
      data: {
        queryGetMessages: receiverMsgs
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
    var msgStatus = localStorage.getItem("prifinaMessagingStatus");

    if (msgStatus !== null && JSON.parse(msgStatus)) {
      //console.log("CALLBACKS ", currentCallbacks[appID][0]("OK"));
      var receiverMsgs = msgQueue.filter(function (m) {
        return m.receiver === uuid;
      });
      currentCallbacks[appID][0]({
        messagingStatus: {
          cnt: receiverMsgs.length,
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

exports.getFields = getFields;
exports.getInfo = getInfo;
exports.getModuleName = getModuleName;
exports.mutationCreateMessage = mutationCreateMessage;
exports.mutationCreateTestMessage = mutationCreateTestMessage;
exports.mutationUpdateMessageStatus = mutationUpdateMessageStatus;
exports.queryGetMessages = queryGetMessages;
exports.queryGetUnreadMessages = queryGetUnreadMessages;
exports.queryUserAddressBook = queryUserAddressBook;
exports.subscribeMessagingData = subscribeMessagingData;
exports.subscribeMessagingStatus = subscribeMessagingStatus;
