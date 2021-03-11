import React, { useEffect } from "react";
import PrifinaProvider, {
  PrifinaContext,
  usePrifina,
} from "../src/PrifinaProvider";

import { RemoteComponent } from "./RemoteComponent";

export default { title: "ProviderTest" };

const appID = "TESTING";
export const providerTest = () => {
  const { currentUser, check } = usePrifina({ appID: appID });
  console.log(currentUser);

  return (
    <div>
      Provider Testing{" "}
      <button
        onClick={() => {
          //console.log(setSettings(appID, { test: 10 }));
        }}
      >
        Test
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
  name: "Provider Test New",
  decorators: [
    (Story) => {
      return (
        <RemoteComponent
          url={"./main.bundle.js"}
          Context={PrifinaContext}
          stage={"dev"}
        >
          <Story />
        </RemoteComponent>
      );
    },
  ],
};
/*
providerTest.story = {
  name: "Provider Test New",
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
*/
