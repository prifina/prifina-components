export const getInfo = () => {
  return ["addTest", "addMessage"];
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

export const addMessage = (
  stage,
  appID,
  uuid,
  addSubscription,
  onUpdateID,
  variables
) => {
  console.log("GET TEST ", stage);
  console.log("GET TEST ", appID);
  console.log("GET TEST ", uuid);
  console.log("GET TEST ", variables);

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
const addMessageSubscription = `subscription newMessage($receiver: String!) {
  addMessage(receiver: $receiver) {
    messageId
    body
    sender
    created_at
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
