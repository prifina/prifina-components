export const getInfo = () => {
  return [
    "queryUserAddressBook",
    "mutationCreateMessage",
    "subscribeMessagingStatus",
    "subscribeMessagingData",
    "mutationCreateTestMessage",
    "queryGetUnreadMessages",
    "queryGetMessages",
    "mutationUpdateMessageStatus",
  ];
};
export const getFields = (query) => {
  let fields = [];

  return fields;
};

export const getModuleName = () => {
  return "Messaging";
};

const addressBook = [
  { name: "Name 1", uuid: "13625638c207ed2fcd5a7b7cfb2364a04661" },
  { name: "Name 2", uuid: "tero" },
  { name: "Name 3", uuid: "0cc3bc47d8a60c8a0f6f35a9134c689e0a8c" },
];

const createMessageMutation = `mutation newMessage($input:MessageInput!) {
    createMessage(input: $input) {
      messageId
      receiver
      sender
      role
      createdAt
      body
    }
  }`;

const updateMessageStatusMutation = `mutation updateMessage($input:MessageInput!) {
    createMessage(input: $input) {
      messageId
      status
    }
  }`;
function randomID() {
  let chars = "qwertyuiopasdfghjklzxcvbnm";
  let randomstring = "";
  for (let i = 0; i < 3; i++) {
    let rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  chars = "1234567890";

  for (let i = 0; i < 3; i++) {
    let rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }

  return randomstring;
}

export const mutationUpdateMessageStatus = ({
  stage,
  appID,
  createMutation,
  callbacks,
  uuid,
  variables,
}) => {
  console.log("UPD MSG STATUS ", stage);
  console.log("UPD MSG STATUS ", appID);
  console.log("UPD MSG STATUS ", uuid);
  console.log("UPD MSG STATUS ", callbacks);
  console.log("UPD MSG STATUS ", variables);
  if (stage === "dev") {
    const msgs = localStorage.getItem("prifinaMessagingStatuses");
    let msg = {
      uuid: uuid,
      messageId: variables.messageId,
      status: variables.status,
    };
    if (msgs !== null) {
      //console.log("MSG STORAGE ", msgs);
      let msgQueue = JSON.parse(msgs);
      const msgIdx = msgQueue.findIndex((m) => {
        return m.messageId === variables.messageId;
      });
      msgQueue[msgIdx].status = variables.status;
      localStorage.setItem(
        "prifinaMessagingStatuses",
        JSON.stringify(msgQueue)
      );
    }

    return Promise.resolve({
      data: {
        updateMessage: msg,
      },
    });
  } else {
    return createMutation({
      name: "updateMessage",
      mutation: updateMessageStatusMutation,
      variables: {
        input: {
          uuid: uuid,
          messageId: variables.messageId,
          status: variables.status,
        },
      },
      appId: appID,
    });
  }
};

export const queryGetUnreadMessages = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
  uuid,
}) => {
  if (stage === "dev") {
    const msgStatuses = localStorage.getItem("prifinaMessagingStatuses");
    let unreadMsgQueue = [];
    if (msgStatuses !== null) {
      //console.log("MSG STORAGE ", msgs);
      let msgQueue = JSON.parse(msgStatuses);
      unreadMsgQueue = msgQueue.filter((m) => {
        return m.uuid === uuid && m.status === 0;
      });
    }
    let unreadMsgs = [];
    if (unreadMsgQueue.length > 0) {
      const msgs = localStorage.getItem("prifinaMessaging");

      if (msgs !== null) {
        const msgList = JSON.parse(msgs);
        for (let i = 0; i < unreadMsgQueue.length; i++) {
          const msgIdx = msgList.findIndex((m) => {
            return m.messageId === unreadMsgQueue[i].messageId;
          });
          unreadMsgs.push(msgList[msgIdx]);
        }
      }
    }
    let filteredMsgs = [];
    if (typeof filter !== "undefined" && Object.keys(filter).length > 0) {
      filteredMsgs = unreadMsgs.filter((m) => {
        let filterMatch = false;
        Object.keys(filter).forEach((f) => {
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
    return Promise.resolve({
      data: {
        queryGetUnreadMessages: filteredMsgs,
      },
    });
  } else {
    console.log("GET UNREAD MSG QUERY");
  }
};

export const queryGetMessages = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
  uuid,
}) => {
  if (stage === "dev") {
    const msgs = localStorage.getItem("prifinaMessaging");
    let receiverMsgs = [];
    if (msgs !== null) {
      receiverMsgs = JSON.parse(msgs).filter((m) => {
        //console.log(uuid, m);
        if (typeof filter !== "undefined" && Object.keys(filter).length > 0) {
          //console.log("MSG FILTER ", filter);

          let filterMatch = false;
          Object.keys(filter).forEach((f) => {
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
    }
    // sort reverse order
    return Promise.resolve({
      data: {
        queryGetMessages: receiverMsgs.reverse(),
      },
    });
  } else {
    console.log("GET MSG QUERY");
  }
};
export const queryUserAddressBook = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        queryUserAddressBook: addressBook,
      },
    });
  } else {
    console.log("GET ADDRESS BOOK QUERY");
  }
};

export const mutationCreateMessage = ({
  stage,
  appID,
  createMutation,
  callbacks,
  uuid,
  variables,
}) => {
  console.log("CREATE MSG ", stage);
  console.log("CREATE MSG ", appID);
  console.log("CREATE MSG ", uuid);
  console.log("CREATE MSG ", callbacks);
  console.log("CREATE MSG ", variables);
  if (stage === "dev") {
    const msg = {
      messageId: randomID(),
      body: variables.body,
      chatId: variables.chatId,
      sender: uuid,
      receiver: variables.receiver,
      createdAt: new Date().getTime(),
    };
    let msgQueue = [msg];
    const msgs = localStorage.getItem("prifinaMessaging");
    if (msgs !== null) {
      console.log("MSG STORAGE ", msgs);
      msgQueue = msgQueue.concat(JSON.parse(msgs));
    }
    localStorage.setItem("prifinaMessaging", JSON.stringify(msgQueue));

    const msgStatuses = localStorage.getItem("prifinaMessagingStatuses");
    // should use chatId "members" instead of receiver...
    let msgStatusQueue = [
      { uuid: variables.receiver, messageId: msg.messageId, status: 0 },
    ];
    if (msgStatuses !== null) {
      console.log("MSG STORAGE ", msgs);
      msgStatusQueue = msgStatusQueue.concat(JSON.parse(msgStatuses));
    }
    localStorage.setItem(
      "prifinaMessagingStatuses",
      JSON.stringify(msgStatusQueue)
    );
    return Promise.resolve({
      data: {
        createMessage: msg,
      },
    });
  } else {
    return createMutation({
      name: "createMessage",
      mutation: createMessageMutation,
      variables: { input: variables },
      appId: appID,
    });
  }
};

export const mutationCreateTestMessage = ({
  stage,
  appID,
  createMutation,
  callbacks,
  uuid,
  variables,
}) => {
  console.log("CREATE MSG ", stage);
  console.log("CREATE MSG ", appID);
  console.log("CREATE MSG ", uuid);
  console.log("CREATE MSG ", callbacks);
  console.log("CREATE MSG ", variables);
  if (stage === "dev") {
    const currentCallbacks = callbacks();
    //console.log("CALLBACKS ", currentCallbacks[appID][0]("OK"));

    // const remoteAppUrl = localStorage.getItem("remoteWidget");
    //localStorage.setItem(key, tokens[key]);
    const msgs = localStorage.getItem("prifinaMessaging");
    const msg = {
      messageId: randomID(),
      body: variables.body,
      chatId: variables.chatId,
      sender: variables.sender,
      receiver: uuid,
      createdAt: new Date().getTime(),
    };
    let msgQueue = [msg];
    if (msgs !== null) {
      console.log("MSG STORAGE ", msgs);
      msgQueue = msgQueue.concat(JSON.parse(msgs));
    }
    localStorage.setItem("prifinaMessaging", JSON.stringify(msgQueue));

    const msgStatuses = localStorage.getItem("prifinaMessagingStatuses");
    let msgStatusQueue = [{ uuid: uuid, messageId: msg.messageId, status: 0 }];
    if (msgStatuses !== null) {
      console.log("MSG STORAGE ", msgs);
      msgStatusQueue = msgStatusQueue.concat(JSON.parse(msgStatuses));
    }
    localStorage.setItem(
      "prifinaMessagingStatuses",
      JSON.stringify(msgStatusQueue)
    );

    const msgStatus = localStorage.getItem("prifinaMessagingStatus");
    if (msgStatus !== null) {
      const msgSubs = JSON.parse(msgStatus);
      // uuid has subscribed notifications....
      if (msgSubs.hasOwnProperty(uuid) && msgSubs[uuid]) {
        //console.log("CALLBACKS ", currentCallbacks[appID][0]("OK"));
        // scan msgStatusQueue instead... where status===0
        const unreadMsgs = msgStatusQueue.filter((m) => {
          return m.uuid === uuid;
        });
        currentCallbacks[appID][0]({
          messagingStatus: {
            cnt: unreadMsgs.length,
            lastMessage: new Date(msg.createdAt).toISOString(),
          },
        });
      }
    }

    return Promise.resolve({
      data: {
        createMessage: msg,
      },
    });
  } else {
    return createMutation({
      name: "createMessage",
      mutation: createMessageMutation,
      variables: { input: variables },
      appId: appID,
    });
  }
};

export const subscribeMessagingStatus = ({
  stage,
  appID,
  name,
  createSubscription,
  variables,
  uuid,
}) => {
  if (stage === "dev") {
    const msgStatus = localStorage.getItem("prifinaMessagingStatus");
    let msgSubs = {};
    if (msgStatus !== null) {
      msgSubs = JSON.parse(msgStatus);
    }
    msgSubs[variables.receiver] = true;
    localStorage.setItem("prifinaMessagingStatus", JSON.stringify(msgSubs));
    return Promise.resolve(true);
  } else {
    console.log("SUBS ");
  }
};

export const subscribeMessagingData = ({
  stage,
  appID,
  name,
  createSubscription,
  variables,
  uuid,
}) => {
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
