import React, { useEffect } from "react";
import { PrifinaProvider, usePrifina } from "@prifina/hooks";
import S3Upload from "../src/";
export default { title: "FileUpload" };

const appID = "testing";
export const fileUpload = () => {
  const { currentUser, Prifina, check, API, registerHooks } = usePrifina();
  //const { onUpdate, Prifina, API, registerHooks } = usePrifina();
  console.log("Logged in user ", currentUser);
  const Test = new Prifina({ appId: appID });

  useEffect(async () => {
    // init callback function for background updates/notifications
    //onUpdate(appID, dataUpdate);
    // register datasource modules
    registerHooks(appID, [S3Upload]);
    console.log(check());
  }, []);
  //console.log(check());
  //console.log(Test.faker.getInfo());
  return (
    <div>
      <div>Hello, {currentUser.name}</div>
      <button
        onClick={async (e) => {
          console.log("API ", API);
          console.log(
            "API ",
            API[appID].S3FileUpload.S3UploadSimple({ fileName: "xxxx" })
          );
          //API[appID].S3Upload.S3UploadSimple({ fileName: "xxxx" });
        }}
      >
        API
      </button>
    </div>
  );
};
fileUpload.story = {
  name: "FileUpload",
  decorators: [
    (Story) => {
      //console.log("PROVIDER ", PrifinaProvider);
      return (
        <PrifinaProvider stage={"dev"}>
          <Story />
        </PrifinaProvider>
      );
    },
  ],
};
