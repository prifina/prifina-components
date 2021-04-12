export const getInfo = () => {
  return ["createMessage"];
};

export const createMessage = (stage, appID, uuid, variables) => {
  console.log("CREATE TEST ", stage);
  console.log("CREATE TEST ", appID);
  console.log("CREATE TEST ", uuid);
  console.log("CREATE TEST ", variables);
  if (stage === "dev") {
    return Promise.resolve({ data: { createMessage: {} } });
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

export const createMessage = `mutation newMessage($input:MessageInput!) {
  createMessage(input: $input) {
    messageId
    receiver
    sender
    role
    created_at
    body
  }
}`;
