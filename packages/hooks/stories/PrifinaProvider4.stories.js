import React, { useEffect } from "react";
import PrifinaProvider, {
  PrifinaContext,
  usePrifina,
} from "../src/PrifinaProvider";

import { RemoteComponent } from "./RemoteComponent";

export default { title: "ProviderTest2" };

const appID = "TESTING";
export const providerTest2 = () => {
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
//REACT_APP_REMOTE_URL=https://raw.githubusercontent.com/prifina/widgets/master/packages/hello/dist/main.bundle.js

providerTest2.story = {
  name: "Provider Test New",
  decorators: [
    (Story) => {
      return (
        <RemoteComponent
          url={
            "https://raw.githubusercontent.com/prifina/prifina-components/main/packages/remote-hooks/dist/main.bundle.js"
          }
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
providerTest2.story = {
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
