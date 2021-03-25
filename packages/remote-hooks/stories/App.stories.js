import React, { createContext, useContext, useMemo, useEffect } from "react";

import { Provider, PrifinaContext } from "../src/Provider";

import GoogleTimeline from "../../google-timeline/";

//import { PrifinaProvider } from "@prifina/hooks";
export const usePrifina = ({ Context, appID = "", connectors = [] }) => {
  let contextExists = false;
  if (typeof Context !== "undefined") {
    Context = createContext(Context);
    contextExists = true;
  }
  const prifinaContext = useContext(Context || PrifinaContext);
  const stage = "dev";
  //console.log("HOOK ", prifinaContext);
  //
  const prifina = useMemo(() => {
    if (
      prifinaContext === null ||
      typeof prifinaContext.current === "undefined"
    ) {
      if (contextExists) {
        prifinaContext.init.apps[appID] = {
          connectors: connectors,
        };
      } else {
        throw new Error("Invalid Prifina context provider");
      }
      return prifinaContext;
    } else {
      //   console.log("MEMO 2.0 ", prifinaContext.current.init);
      if (appID === "WIDGETS" || appID == "APP") {
        prifinaContext.current.init = {
          stage: stage,
          apps: {},
        };
      } else {
        prifinaContext.current.init.apps[appID] = {
          connectors: connectors,
        };
      }
      // console.log("MEMO 2 ", contextExists, prifinaContext);
      return prifinaContext.current;
    }
  }, [prifinaContext]);
  return prifina;
};

export default { title: "App" };

const appID = "testing";
export const app = () => {
  const {
    Prifina,
    subscriptionTest,
    onUpdate,
    registerHooks,
    API,
  } = usePrifina({});
  //console.log(Prifina);
  console.log(GoogleTimeline.getInfo());

  const Test = new Prifina({ appId: appID, modules: [GoogleTimeline] });

  const updateTest = (data) => {
    console.log("UPDATE TEST ", data);
    //setUpdate(data);
  };

  useEffect(async () => {
    console.log("UPDATE INIT ");
    onUpdate(appID, updateTest);
    registerHooks(appID, [GoogleTimeline]);

    /*
    subscriptionTest(appID, {
      addMessage: [
        {
          messageId: 1,
          body: "Hello",
        },
        {
          messageId: 3,
          body: "Something",
        },
        {
          messageId: 2,
          body: "Testing",
        },
      ],
    });
    */
  }, []);

  console.log("PROVIDER TEST ", Test);
  //console.log(Test.core.queries.getTest().then((data) => console.log(data)));
  return (
    <>
      <div>Testing</div>
      <button
        onClick={async () => {
          //await Test.GoogleTimeline.queryActivities("TEST-ID");
          console.log(Test);
          console.log("API ", await API[appID].queryActivities("TEST-ID"));
        }}
      >
        GET DATA
      </button>
    </>
  );
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
        <Provider stage={"dev"} Context={PrifinaContext}>
          <Story />
        </Provider>
      );
    },
  ],
};
