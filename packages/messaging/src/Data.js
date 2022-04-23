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
  { name: "Name 2", uuid: "zzzzz" },
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

const updateMessageMutation = `mutation updateMessage($input:MessageInput!) {
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
  console.log("CREATE MSG ", stage);
  console.log("CREATE MSG ", appID);
  console.log("CREATE MSG ", uuid);
  console.log("CREATE MSG ", callbacks);
  console.log("CREATE MSG ", variables);
  if (stage === "dev") {
    const msgs = localStorage.getItem("prifinaMessaging");
    let msg = { messageId: variables.messageId, status: variables.status };
    if (msgs !== null) {
      //console.log("MSG STORAGE ", msgs);
      let msgQueue = JSON.parse(msgs);
      const msgIdx = msgQueue.findIndex((m) => {
        return m.messageId === variables.messageId;
      });
      msgQueue[msgIdx].status = variables.status;
      localStorage.setItem("prifinaMessaging", JSON.stringify(msgQueue));
    }

    return Promise.resolve({
      data: {
        updateMessage: msg,
      },
    });
  } else {
    return createMutation({
      name: "updateMessage",
      mutation: updateMessageMutation,
      variables: {
        input: { messageId: variables.messageId, status: variables.status },
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
    const msgs = localStorage.getItem("prifinaMessaging");
    let receiverMsgs = [];
    if (msgs !== null) {
      receiverMsgs = JSON.parse(msgs).filter((m) => {
        console.log(uuid, m);
        //console.log(m?.status === undefined);
        return (
          m.receiver === uuid && (m?.status === undefined || m.status === 0)
        );
      });
    }
    return Promise.resolve({
      data: {
        queryGetUnreadMessages: receiverMsgs,
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
        console.log(uuid, m);
        //console.log(m?.status === undefined);
        return m.receiver === uuid;
      });
    }
    return Promise.resolve({
      data: {
        queryGetMessages: receiverMsgs,
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
      sender: uuid,
      receiver: variables.receiver,
      createdAt: new Date().getTime(),
    };

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
    const msgStatus = localStorage.getItem("prifinaMessagingStatus");
    if (msgStatus !== null && JSON.parse(msgStatus)) {
      //console.log("CALLBACKS ", currentCallbacks[appID][0]("OK"));
      const receiverMsgs = msgQueue.filter((m) => {
        return m.receiver === uuid;
      });
      currentCallbacks[appID][0]({
        messagingStatus: {
          cnt: receiverMsgs.length,
          lastMessage: new Date(msg.createdAt).toISOString(),
        },
      });
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
    localStorage.setItem("prifinaMessagingStatus", true);
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
