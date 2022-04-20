import React, { useEffect } from "react";
//import { PrifinaProvider, usePrifina } from "@prifina/hooks";
import { PrifinaProvider, usePrifina } from "../../hooks";
import MSG from "../src/";
export default { title: "Messaging" };

const appID = "messaging";
export const messaging = () => {
  const { currentUser, Prifina, check, API, registerHooks, onUpdate } =
    usePrifina();

  useEffect(async () => {
    // init callback function for background updates/notifications
    //onUpdate(appID, dataUpdate);
    console.log("MSG ", MSG);
    // register datasource modules
    registerHooks(appID, [MSG]);
    console.log(check());
  }, []);

  return (
    <div>
      <div>Hello, {currentUser.name}</div>
      <button
        onClick={async (e) => {
          console.log("API ", API);
          /*
          console.log(
            "API ",
            await API[appID].S3FileUpload.S3UploadSimple({
              fileHandler: file,
              progress: (progress) => {
                console.log(progress);
              },
            })
          );
         */
        }}
      >
        API
      </button>
      <button
        onClick={async (e) => {
          console.log(
            "API ",
            await API[appID].Messaging.mutationCreateMessage({ test: "ok" })
          );
        }}
      >
        CREATE MSG
      </button>
    </div>
  );
};
messaging.story = {
  name: "Messaging",
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
