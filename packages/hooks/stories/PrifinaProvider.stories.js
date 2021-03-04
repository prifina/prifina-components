import React from "react";
import PrifinaProvider, { usePrifina } from "../src/PrifinaProvider";

export default { title: "ProviderTest" };

export const providerTest = () => {
  const {
    currentUser,
    check,
    setSettings,
    getSettings,
    getLocalization,
    onUpdate,
    getCallbacks,
  } = usePrifina({ appID: "TESTING" });
  console.log(currentUser);

  const updateTest = () => {
    console.log("UPDATE TEST");
  };

  onUpdate(updateTest);
  return (
    <div>
      Provider Testing{" "}
      <button
        onClick={() => {
          console.log(setSettings({ test: 10 }));
        }}
      >
        Test setSettings
      </button>
      <button
        onClick={() => {
          console.log(getSettings());
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
        <PrifinaProvider>
          <Story />
        </PrifinaProvider>
      );
    },
  ],
};
