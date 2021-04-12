const addressBook = [
  { name: "Name 1", uuid: "xxxxx" },
  { name: "Name 2", uuid: "zzzzz" },
  { name: "Name 3", uuid: "wwwww" },
];

export const getInfo = () => {
  return ["getTest", "getAddressBook"];
};

export const getTest = (stage, appID, uuid, filter) => {
  console.log("GET TEST ", stage);
  console.log("GET TEST ", appID);
  console.log("GET TEST ", uuid);
  console.log("GET TEST ", filter);
  if (stage === "dev") {
    return Promise.resolve({ data: { getTest: "OK" } });
  }
};

export const getAddressBook = (stage, appID, uuid, filter) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getAddressBook: addressBook,
      },
    });
  } else {
    return Promise.resolve({
      data: {
        getAddressBook: addressBook,
      },
    });
  }
};

export const checkUsername = `query checkUsername($userName: String!) {
  checkUsername(userName: $userName)
}
`;

export const getSettings = `query MyQuery($id:String!,$widget:String) {
  getInstalledWidgets(id: $id, widget: $widget) {
    id
    installedWidgets
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
