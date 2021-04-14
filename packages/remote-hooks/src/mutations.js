export const getInfo = () => {
  return ["createMessage", "updateStatus"];
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
