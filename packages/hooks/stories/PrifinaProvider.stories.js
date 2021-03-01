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
  } = usePrifina({});
  console.log(currentUser);

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
