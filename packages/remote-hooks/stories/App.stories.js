import React, { createContext, useContext, useMemo, useEffect } from "react";

import { Provider, PrifinaContext } from "../src/Provider";

import GoogleTimeline from "../../google-timeline/";

import Amplify, { Auth, API as GRAPHQL } from "aws-amplify";
import config from "./config";

import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import gql from "graphql-tag";

const APIConfig = {
  aws_appsync_graphqlEndpoint: config.appSync.aws_appsync_graphqlEndpoint,
  aws_appsync_region: config.main_region,
  aws_appsync_authenticationType: config.appSync.aws_appsync_authenticationType,
};

const AUTHConfig = {
  // To get the aws credentials, you need to configure
  // the Auth module with your Cognito Federated Identity Pool
  mandatorySignIn: false,
  userPoolId: config.cognito.USER_POOL_ID,
  identityPoolId: config.cognito.IDENTITY_POOL_ID,
  userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  region: config.main_region,
};
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

const appID = "helloWidget";
export const app = () => {
  const {
    Prifina,
    subscriptionTest,
    onUpdate,
    registerHooks,
    registerClient,
    getSettings,
    setSettings,
    API,
  } = usePrifina({});
  //console.log(Prifina);
  //console.log("CONFIG ", API_KEY);
  console.log(GoogleTimeline.getInfo());

  const Test = new Prifina({ appId: appID, modules: [GoogleTimeline] });

  const client = new AWSAppSyncClient({
    url: APIConfig.aws_appsync_graphqlEndpoint,
    region: APIConfig.aws_appsync_region,
    auth: {
      type: AUTH_TYPE.AWS_IAM,
      credentials: () => Auth.currentCredentials(),
    },
    /*
    auth: {
      type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
      jwtToken: async () =>
        (await Auth.currentSession()).getIdToken().getJwtToken(),
    },
    */
    disableOffline: true,
  });

  const updateTest = (data) => {
    console.log("UPDATE TEST ", data);
    //setUpdate(data);
  };

  useEffect(async () => {
    console.log("UPDATE INIT ");
    onUpdate(appID, updateTest);
    registerHooks(appID, [GoogleTimeline]);
    try {
      Auth.configure(AUTHConfig);
      Amplify.configure(APIConfig);
      const session = await Auth.currentSession();
      console.log("SESSION ", session);
    } catch (e) {
      console.log("AUTH 2", e);
      if (typeof e === "string" && e === "No current user") {
        const user = await Auth.signIn("tahola", "xxxx");
        console.log("AUTH ", user);
        //console.log("APP DEBUG ", appCode);
      }
    }
    /*
    const flds = ["country", "desktop"];
    const test = `query MyQuery {
      getHeader {
       ${flds.join(`\n`)}
      }
    }`;

    //await client.hydrated();

    const result = await client.query({ query: gql(test) });
    */
    registerClient([client, GRAPHQL]);

    /*
  const result = await client.query({
    query: gql(listTodos)
  });
  console.log("QUERY ", result);
  */

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
          //console.log("API ", await API[appID].queryActivities());
          //f902cbca-8748-437d-a7bb-bd2dc9d25be5
          console.log(
            await getSettings(appID, "f902cbca-8748-437d-a7bb-bd2dc9d25be5")
          );
        }}
      >
        GET DATA
      </button>
      <div>Settings</div>
      <button
        onClick={async () => {
          //widget: {name: "test", settings: {field: "fld", value: "1"}})

          console.log(
            await setSettings(appID, "f902cbca-8748-437d-a7bb-bd2dc9d25be5", [
              { field: "msg", value: "Hello" },
            ])
          );
        }}
      >
        SET DATA
      </button>
      <div>Google</div>
      <button
        onClick={async () => {
          console.log(API);
          console.log(
            await API[appID].GoogleTimeline.queryActivities({
              fields: ["datetime", "type", "confidence"],
            })
          );
          /*
          fields: ["s._1", "s._3", "s._4"],
          console.log(
            await setSettings(appID, "f902cbca-8748-437d-a7bb-bd2dc9d25be5", [
              { field: "msg", value: "Hello" },
            ])
          );
          */
        }}
      >
        GET Activities
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
        <Provider stage={"alpha"} Context={PrifinaContext}>
          <Story />
        </Provider>
      );
    },
  ],
};
