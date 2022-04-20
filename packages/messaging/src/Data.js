export const getInfo = () => {
  return ["queryUserAddressBook", "mutationCreateMessage"];
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
    return Promise.resolve({
      data: {
        createMessage: {
          messageId: randomID(),
          body: variables.body,
          sender: uuid,
          receiver: variables.receiver,
          createdAt: new Date().getTime(),
        },
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
