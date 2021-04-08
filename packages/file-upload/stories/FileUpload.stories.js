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
      <input type="file" id="fileHandler" />
      <button
        onClick={async (e) => {
          const file = document.getElementById("fileHandler");
          console.log("FILE ", file.files);
          console.log("API ", API);
          console.log(
            "API ",
            await API[appID].S3FileUpload.S3UploadSimple({
              fileHandler: file,
              progress: (progress) => {
                console.log(progress);
              },
            })
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
