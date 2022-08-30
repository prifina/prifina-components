export const getInfo = () => {
  return [
    "queryUserAddressBook",
    "mutationCreateMessage",
    "mutationCreateDataMessage",
    "subscribeMessagingStatus",
    "subscribeMessagingData",
    "mutationCreateTestMessage",
    "mutationCreateTestDataMessage",
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

const unreadMsgsQuery = `query unreadMsgs($input:DataObjectInput!) {
  getUnreadMsgs(input:$input) {
    result
  }
}`;

const getMsgsQuery = `query getMsgs($input:DataObjectInput!) {
  getMsgs(input:$input) {
    result
  }
}`;

const getAddressBookQuery = `query getAddressBook($input:DataObjectInput!) {
  getAddressBook(input:$input) {
    result
  }
}`;

const createMessageMutation = `mutation newMessage($input:MessageInput!) {
    createMessage(input: $input) {
     messageId
     chatId
     createdAt 
     result
     receiver
    }
  }`;

const createDataMessageMutation = `mutation newMessage($input:MessageInput!) {
  createDataMessage(input: $input) {
   messageId
   chatId
   createdAt 
   result
   receiver
  }
}`;

const updateMessageStatusMutation = `mutation updateMessage($input:DataObjectInput!) {
  updateMessageStatus(input: $input) 
  }`;

const subscribeCreateMessage = `subscription msgSubscription($receiver: String!) {
    addMessage(receiver: $receiver) {
      messageId
      chatId
      receiver
      result
    }
  }`;

const subscribeCreateDataMessage = `subscription msgSubscription($receiver: String!) {
    addDataMessage(receiver: $receiver) {
      messageId
      chatId
      receiver
      result
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
        getUnreadMsgs: filteredMsgs,
      },
    });
  } else {
    return createQuery({
      query: unreadMsgsQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
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
    console.log("GET MSGS ",msgs,filter);
    let receiverMsgs = [];
    if (msgs !== null) {
      receiverMsgs = JSON.parse(msgs).filter((m) => {
        console.log("FILTER ",m)
        //console.log(uuid, m);
        const logicalOperators = Object.getOwnPropertySymbols(filter);
        console.log("MSG FILTER ", Object.keys(filter),logicalOperators);
        if (typeof filter!=="undefined" && logicalOperators.length===0 && Object.keys(filter).length>0) {
          // console.log("SIMPLE FILTER ");
          let filterMatch = false;
          Object.keys(filter).forEach((f) => {
          
            // console.log("FILTER KEY ",f);
            // console.log("FILTER OBJ ",m);
            // console.log("FILTER KEY VAL ",filter[f]);
            // console.log("FILTER OBJ VAL ",m[f]);
            
            Object.getOwnPropertySymbols(filter[f]).forEach((e, i) => {
            
              //filter[logicalOP][k][e]
              // only eq is accepted...
              if (m.hasOwnProperty(f) && m[f] === filter[f][e]) {
                filterMatch = true;
              } else {
                filterMatch = false;
              }
            });

            
        
          });
          return filterMatch;

        } else if (typeof filter !== "undefined" && logicalOperators.length > 0) {
         
         let logicalOP = logicalOperators[0];
          //  Object.keys(filter[logicalOP]).forEach((k, ii) => {
          //console.log("OP ",logicalOP);
          let filterMatch = false;
          Object.keys(filter[logicalOP]).forEach((f) => {
            Object.getOwnPropertySymbols(filter[logicalOP][f]).forEach((e, i) => {
            
            //filter[logicalOP][k][e]
            // only eq is accepted...
            if (m.hasOwnProperty(f) && m[f] === filter[logicalOP][f][e]) {
              filterMatch = true;
            } else {
              filterMatch = false;
            }
          });
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
        getMsgs: receiverMsgs.reverse(),
      },
    });
  } else {
    return createQuery({
      query: getMsgsQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
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
        getAddressBook: addressBook,
      },
    });
  } else {
    return createQuery({
      query: getAddressBookQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const mutationUpdateMessageStatus = ({
  stage,
  appID,
  name,
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
        updateMessage: true,
      },
    });
  } else {
    return createMutation({
      name: name,
      mutation: updateMessageStatusMutation,
      variables: {
        options: {
          input: JSON.stringify({
            uuid: uuid,
            messageId: variables.messageId,
          }),
        },
      },
      appId: appID,
    });
  }
};

export const mutationCreateMessage = ({
  stage,
  appID,
  name,
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
      owner:uuid,
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
    variables.sender = uuid;
    return createMutation({
      name: name,
      mutation: createMessageMutation,
      variables: { content: variables },
      appId: appID,
    });
  }
};

export const mutationCreateTestMessage = ({
  stage,
  appID,
  name,
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
      owner:uuid,
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
          addMessage: {
            result: JSON.stringify({
              cnt: unreadMsgs.length,
              lastMessage: new Date(msg.createdAt).toISOString(),
            }),
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
    variables.receiver = uuid;
    return createMutation({
      name: name,
      mutation: createMessageMutation,
      variables: { content: variables },
      appId: appID,
    });
  }
};

export const mutationCreateDataMessage = ({
  stage,
  appID,
  name,
  createMutation,
  callbacks,
  uuid,
  variables,
}) => {
  if (stage === "dev") {
    const msg = {
      messageId: randomID(),
      body: variables.body,
      chatId: variables.chatId,
      sender: uuid,
      owner:uuid,
      receiver: variables.receiver,
      createdAt: new Date().getTime(),
    };

    return Promise.resolve({
      data: {
        createDataMessage: msg,
      },
    });
  } else {
    variables.sender = uuid;
    return createMutation({
      name: name,
      mutation: createDataMessageMutation,
      variables: { content: variables },
      appId: appID,
    });
  }
};

export const mutationCreateTestDataMessage = ({
  stage,
  appID,
  name,
  createMutation,
  callbacks,
  uuid,
  variables,
}) => {
  if (stage === "dev") {
    const currentCallbacks = callbacks();
    const msg = {
      messageId: randomID(),
      body: variables.body,
      chatId: variables.chatId,
      sender: variables.sender,
      receiver: uuid,
      owner:uuid,
      createdAt: new Date().getTime(),
    };

    currentCallbacks[appID][0]({
      addDataMessage: { result: msg },
    });

    return Promise.resolve({
      data: {
        createDataMessage: msg,
      },
    });
  } else {
    variables.receiver = uuid;
    return createMutation({
      name: name,
      mutation: createDataMessageMutation,
      variables: { content: variables },
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
    return createSubscription({
      name: name,
      mutation: subscribeCreateMessage,
      variables: { receiver: uuid },
      appId: appID,
    });
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
    return Promise.resolve(true);
  } else {
    console.log("SUBS ");
    return createSubscription({
      name: name,
      mutation: subscribeCreateDataMessage,
      variables: { receiver: uuid },
      appId: appID,
    });
  }
};
