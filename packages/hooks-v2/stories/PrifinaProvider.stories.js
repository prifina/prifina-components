import React, { useEffect } from "react";
import PrifinaProvider, { usePrifina } from "../src/PrifinaProvider";

export default { title: "ProviderTest" };

const appID = "TESTING";
export const providerTest = () => {
  const {
    currentUser,
    check,
    setSettings,
    getSettings,
    getLocalization,
    onUpdate,
    getCallbacks,
  } = usePrifina({ appID: appID });
  console.log(currentUser);

  const updateTest = () => {
    console.log("UPDATE TEST");
  };

  useEffect(() => {
    console.log("UPDATE INIT ");
    onUpdate(appID, updateTest);
  }, []);

  return (
    <div>
      Provider Testing{" "}
      <button
        onClick={() => {
          console.log(setSettings(appID, { test: 10 }));
        }}
      >
        Test setSettings
      </button>
      <button
        onClick={() => {
          console.log(getSettings(appID));
          console.log(getLocalization());
          console.log(getCallbacks());
        }}
      >
        Test getSettings
      </button>
    </div>
  );
};
/*
providerTest.story = {
  name: "Provider Test",
};
*/

providerTest.story = {
  name: "Provider Test",
  decorators: [
    (Story) => {
      return (
        <PrifinaProvider stage={"dev"}>
          <Story />
        </PrifinaProvider>
      );
    },
  ],
};
