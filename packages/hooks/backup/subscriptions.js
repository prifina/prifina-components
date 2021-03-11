export const getInfo = () => {
  return ["addTest"];
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
