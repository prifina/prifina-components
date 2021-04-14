const addressBook = {
  addressBook: [
    { name: "Name 1", uuid: "13625638c207ed2fcd5a7b7cfb2364a04661" },
    { name: "Name 2", uuid: "zzzzz" },
    { name: "Name 3", uuid: "0cc3bc47d8a60c8a0f6f35a9134c689e0a8c" },
  ],
  id: "user id",
};

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

export const getAddressBook = (stage, appID, uuid, userQuery, filter) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getUserAddressBook: addressBook,
      },
    });
  } else {
    console.log("QUERY FILTER ", filter);

    return userQuery({
      query: getAddressBookQuery,
      variables: { id: uuid },
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

const getAddressBookQuery = `query addressBook($id: String!) {
  getUserAddressBook(id: $id) {
    id
    addressBook
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
