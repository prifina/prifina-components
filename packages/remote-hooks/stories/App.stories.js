import React from "react";
import { Provider } from "../src/Provider";

//import { PrifinaProvider } from "@prifina/hooks";

export default { title: "App" };

export const app = () => {
  return <div>Testing</div>;
};
/*
app.story = {
  name: "App",
};
*/

app.story = {
  name: "Provider",
  decorators: [
    (Story) => {
      return (
        <Provider stage={"dev"}>
          <Story />
        </Provider>
      );
    },
  ],
};
