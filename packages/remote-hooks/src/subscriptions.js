export const getInfo = () => {
  return ["addTest", "addMessage", "addWaiting", "addMessaging"];
};

export const addTest = (stage, appID, uuid, variables) => {
  console.log("GET TEST ", stage);
  console.log("GET TEST ", appID);
  console.log("GET TEST ", uuid);
  console.log("GET TEST ", variables);

  if (stage === "dev") {
    return Promise.resolve({ data: { getTest: "OK" } });
  }
};

const getAthenaResultsSubscription = `subscription AthenaResults($id: String!) {
  athenaResults(id: $id) {
    data
    id
  }
}`;

export const getAthenaResults = (
  stage,
  appID,
  uuid,
  addSubscription,
  onUpdateID,
  variables
) => {
  console.log("ATHENA RESULTS SUB", stage);
  console.log("ATHENA RESULTS SUB ", appID);
  console.log("ATHENA RESULTS SUB ", uuid);
  console.log("ATHENA RESULTS SUB ", variables);

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        addMessage: {
          messageId: "messageID",
          body: "Test message",
          sender: "Sender id",
          created_at: new Date().getTime(),
        },
      },
    });
  } else {
    let subscriptionFilter = { id: uuid, ...variables };
    console.log("SUB FILTER ", subscriptionFilter);

    return addSubscription(
      appID,
      "getAthenaResults",
      getAthenaResultsSubscription,
      onUpdateID,
      subscriptionFilter
    );
  }
};

export const addMessage = (
  stage,
  appID,
  uuid,
  addSubscription,
  onUpdateID,
  variables
) => {
  console.log("ADD MESSAGE SUB", stage);
  console.log("ADD MESSAGE SUB ", appID);
  console.log("ADD MESSAGE SUB ", uuid);
  console.log("ADD MESSAGE SUB ", variables);

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        addMessage: {
          messageId: "messageID",
          body: "Test message",
          sender: "Sender id",
          created_at: new Date().getTime(),
        },
      },
    });
  } else {
    let subscriptionFilter = { receiver: uuid, ...variables };
    console.log("SUB FILTER ", subscriptionFilter);

    return addSubscription(
      appID,
      "addMessage",
      addMessageSubscription,
      onUpdateID,
      subscriptionFilter
    );
  }
};

export const addWaiting = (
  stage,
  appID,
  uuid,
  addSubscription,
  onUpdateID,
  variables
) => {
  console.log("ADD WAITING SUB ", stage);
  console.log("ADD WAITING SUB ", appID);
  console.log("ADD WAITING SUB ", uuid);
  console.log("ADD WAITING SUB ", variables);

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        Waiting: {
          createdAt: new Date().getTime(),
          endpoint: "https://endpoint.xxx",
          region: "us-east-1",
          name: "Unknown",
        },
      },
    });
  } else {
    //let subscriptionFilter = { receiver: uuid, ...variables };
    let subscriptionFilter = { ...variables };
    console.log("SUB FILTER ", subscriptionFilter);

    return addSubscription(
      appID,
      "addWaiting",
      addWaitingSubscription,
      onUpdateID,
      subscriptionFilter
    );
  }
};

export const addMessaging = (
  stage,
  appID,
  uuid,
  addSubscription,
  onUpdateID,
  variables
) => {
  console.log("ADD MESSAGING SUB ", stage);
  console.log("ADD MESSAGING SUB ", appID);
  console.log("ADD MESSAGING SUB ", uuid);
  console.log("ADD MESSAGING SUB ", variables);

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        Messaging: {
          createdAt: new Date().getTime(),
          body: JSON.stringify(JSON.stringify({ test: "OK" })),
        },
      },
    });
  } else {
    let subscriptionFilter = { receiver: uuid, ...variables };
    console.log("SUB FILTER ", subscriptionFilter);

    return addSubscription(
      appID,
      "addMessaging",
      addMessagingSubscription,
      onUpdateID,
      subscriptionFilter
    );
  }
};

const addMessageSubscription = `subscription newMessage($receiver: String!) {
  addMessage(receiver: $receiver) {
    messageId
    body
    sender
    created_at
  }
}`;

const addWaitingSubscription = `subscription addWaiting($key:String!) {
  Waiting(key: $key) {
    createdAt
    endpoint
    region
    name
  }
}`;

const addMessagingSubscription = `subscription newMessaging($receiver: String!, $key: String!) {
  Messaging(key: $key, receiver: $receiver) {
    body
    createdAt
    id
    sender
    receiver
    key
  }
}`;

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
