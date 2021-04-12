export const getInfo = () => {
  return ["createMessage"];
};

export const createMessage = (stage, appID, uuid, variables) => {
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

export const createMessageMutation = `mutation newMessage($input:MessageInput!) {
  createMessage(input: $input) {
    messageId
    receiver
    sender
    role
    created_at
    body
  }
}`;
