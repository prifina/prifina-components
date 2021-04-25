export const getInfo = () => {
  return [
    "createMessage",
    "updateMessageStatus",
    "createMessaging",
    "addWaiting",
  ];
};

export const createMessage = (
  stage,
  appID,
  uuid,
  userMutationQuery,
  variables
) => {
  console.log("CREATE MSG ", stage);
  console.log("CREATE MSG ", appID);
  console.log("CREATE MSG ", uuid);
  console.log("CREATE MSG ", variables);
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        createMessage: {
          messageId: "messageID",
          body: "Test message",
          sender: "Sender id",
          receiver: "Receiver id",
          created_at: new Date().getTime(),
        },
      },
    });
  } else {
    return userMutationQuery({
      mutation: createMessageMutation,
      variables: { input: variables },
    });
  }
};

export const updateMessageStatus = (
  stage,
  appID,
  uuid,
  userMutationQuery,
  variables
) => {
  console.log("UPDATE STATUS ", stage);
  console.log("UPDATE STATUS ", appID);
  console.log("UPDATE STATUS ", uuid);
  console.log("UPDATE STATUS ", variables);
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        updateMessageStatus: true,
      },
    });
  } else {
    return userMutationQuery({
      mutation: updateMessageStatusMutation,
      variables,
    });
  }
};

export const createMessaging = (
  stage,
  appID,
  uuid,
  userMutationQuery,
  variables
) => {
  console.log("CREATE MSG ", stage);
  console.log("CREATE MSG ", appID);
  console.log("CREATE MSG ", uuid);
  console.log("CREATE MSG ", variables);
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        messaging: {
          id: "messageID",
          body: "Test message",
          sender: "Sender id",
          receiver: "Receiver id",
          createdAt: new Date().getTime(),
        },
      },
    });
  } else {
    return userMutationQuery({
      mutation: newMessagingMutation,
      variables: { input: variables },
    });
  }
};

export const addWaiting = (stage, appID, uuid, prifinaMutation, variables) => {
  console.log("CREATE MSG ", stage);
  console.log("CREATE MSG ", appID);
  console.log("CREATE MSG ", uuid);
  console.log("CREATE MSG ", variables);
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        waiting: {
          createdAt: new Date().getTime(),
          endpoint: "https://endpoint.xxx",
          region: "us-east-1",
          name: "Unknown",
          senderKey: "sender#key",
          key: "key",
        },
      },
    });
  } else {
    //await prifina.core.mutations.addWaiting({endpoint: "", name: "", senderKey: ""});
    /*
input WaitingInput {
	sender: String!
	key: String!
	endpoint: String!
	region: String!
	name: String
}
*/

    let mutationVariables = { sender: uuid, ...variables };

    return prifinaMutation({
      mutation: addWaitingMutation,
      variables: { input: mutationVariables },
    });
  }
};

export const setSettings = `mutation SetSettings($id:String!,$widget: WidgetInput) {
  updateInstalledWidgets(id: $id, widget: $widget) {
    id
  }
}`;

export const uploadS3File = `mutation uploadFile($input: S3FileInput) {
  uploadS3File(input: $input)
}`;

const createMessageMutation = `mutation newMessage($input:MessageInput!) {
  createMessage(input: $input) {
    messageId
    receiver
    sender
    role
    created_at
    body
  }
}`;

const updateMessageStatusMutation = `mutation changeStatus($sender:String!,$messageId:String!,$createdAt:AWSTimestamp!,$status:Int!) {
  updateMessageStatus(created_at: $createdAt, messageId: $messageId, sender: $sender, status: $status)
}`;

const newMessagingMutation = `mutation messaging($input:MessagingInput!) {
  messaging(input: $input) {
    body
    createdAt
    id
    key
    receiver
    sender
  }
}`;

const addWaitingMutation = `mutation newWaiting(!input: WaitingInput) {
  waiting(input: $input) {
    createdAt
    endpoint
    region
    name
    senderKey
    key
  }
}`;
