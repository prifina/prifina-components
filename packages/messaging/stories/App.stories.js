import React, { useEffect } from "react";
//import { PrifinaProvider, usePrifina } from "@prifina/hooks";
import { PrifinaProvider, usePrifina } from "../../hooks";
import MSG from "../src/";

import { Auth, API as GRAPHQL } from "aws-amplify";
import config from "./config";

import AWSAppSyncClient, { AUTH_TYPE, createAppSyncLink } from "aws-appsync";
import gql from "graphql-tag";
import {
  CognitoIdentityClient,
  GetIdCommand,
  GetCredentialsForIdentityCommand,
} from "@aws-sdk/client-cognito-identity";

import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
const { setContext } = require("apollo-link-context");

const APIConfig = {
  aws_appsync_graphqlEndpoint: config.appSync.aws_appsync_graphqlEndpoint,
  aws_appsync_region: config.main_region,
  aws_appsync_authenticationType: config.appSync.aws_appsync_authenticationType,
};

let AUTHConfig = {
  // To get the aws credentials, you need to configure
  // the Auth module with your Cognito Federated Identity Pool
  mandatorySignIn: false,
  userPoolId: config.cognito.USER_POOL_ID,
  identityPoolId: config.cognito.IDENTITY_POOL_ID,
  userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  region: config.auth_region,
  identityPoolRegion: config.main_region,
  //region: config.main_region,
};

export default { title: "Messaging-Test" };

const appID = "messaging";

const createClient = async (endpoint, region, currentSession) => {
  /*
    // this is not authenticated credentials, because of amplify bug...
    Auth.currentCredentials().then(c => {
      console.log("HOME USER CLIENT ", c);
    });
    */

  console.log("CLIENT ", endpoint, region, currentSession);

  const token = currentSession.getIdToken().payload;
  //const userIdPool = localStorage.getItem("LastSessionIdentityPool");
  const userIdPool = config.cognito.IDENTITY_POOL_ID;
  //const provider='cognito-idp.'+userPoolRegion+'.amazonaws.com/'+userPoolId;
  const provider = token["iss"].replace("https://", "");
  let identityParams = {
    IdentityPoolId: userIdPool,
    Logins: {},
  };
  const idToken = currentSession.getIdToken().getJwtToken();
  identityParams.Logins[provider] = idToken;
  const cognitoClient = new CognitoIdentityClient({
    region: userIdPool.split(":")[0],
  });
  //console.log(identityParams);
  const cognitoIdentity = await cognitoClient.send(
    new GetIdCommand(identityParams)
  );
  //console.log("COGNITO IDENTITY ", cognitoIdentity);

  let credentialParams = {
    IdentityId: cognitoIdentity.IdentityId,
    Logins: {},
  };

  credentialParams.Logins[provider] = idToken;
  //console.log(credentialParams);
  const cognitoIdentityCredentials = await cognitoClient.send(
    new GetCredentialsForIdentityCommand(credentialParams)
  );
  console.log("COGNITO IDENTITY CREDS ", cognitoIdentityCredentials);
  const clientCredentials = {
    identityId: cognitoIdentity.IdentityId,
    accessKeyId: cognitoIdentityCredentials.Credentials.AccessKeyId,
    secretAccessKey: cognitoIdentityCredentials.Credentials.SecretKey,
    sessionToken: cognitoIdentityCredentials.Credentials.SessionToken,
    expiration: cognitoIdentityCredentials.Credentials.Expiration,
    authenticated: true,
  };

  //const clientCredentials = await cognitoCredentials(currentSession);

  const AppSyncConfig = {
    url: endpoint,
    region: region,
    auth: {
      type: AUTH_TYPE.AWS_IAM,
      credentials: clientCredentials,
    },
    disableOffline: true,
  };

  const client = new AWSAppSyncClient(AppSyncConfig, {
    link: new createAppSyncLink({
      ...AppSyncConfig,
      resultsFetcherLink: ApolloLink.from([
        setContext((request, previousContext) => {
          //console.log("APOLLO ", previousContext, request);
          return {
            headers: {
              ...previousContext.headers,
              "prifina-user": idToken,
            },
          };
        }),
        createHttpLink({
          uri: AppSyncConfig.url,
        }),
      ]),
    }),
  });

  return Promise.resolve(client);
};

export const messagingTest = () => {
  const {
    currentUser,
    Prifina,
    check,
    API,
    registerHooks,
    onUpdate,
    registerClient,
  } = usePrifina();

  console.log("API ", APIConfig);
  /*
  const client = new AWSAppSyncClient({
    //url: APIConfig.aws_appsync_graphqlEndpoint,
    url: "https://dmqolw4fpfhdrec66gpkugp75m.appsync-api.eu-west-1.amazonaws.com/graphql",
    region: APIConfig.aws_appsync_region,
    auth: {
      type: AUTH_TYPE.AWS_IAM,
      credentials: () => Auth.currentCredentials(),
    },

    disableOffline: true,
  });
  */

  const updateTest = (payload) => {
    console.log("UPDATE TEST PAYLOAD", payload);
  };
  useEffect(async () => {
    // init callback function for background updates/notifications
    onUpdate(appID, updateTest);

    console.log("MSG ", MSG);
    // register datasource modules
    registerHooks(appID, [MSG]);
    console.log(check());
    let client = undefined;
    try {
      Auth.configure(AUTHConfig);
      //GRAPHQL.configure(APIConfig);
      const session = await Auth.currentSession();
      console.log("SESSION ", session);
      /*
      localStorage.setItem(
        "LastSessionIdentityPool",
        prifinaSession.data.getSession.identityPool,
      );
      */
      client = await createClient(
        "https://dmqolw4fpfhdrec66gpkugp75m.appsync-api.eu-west-1.amazonaws.com/graphql",
        config.main_region,
        session
      );
    } catch (e) {
      console.log("AUTH 2", e);
      if (typeof e === "string" && e === "No current user") {
        const user = await Auth.signIn("tahola", "Huuhaa12!#");
        console.log("AUTH ", user);
        //console.log("APP DEBUG ", appCode);
      }
    }

    registerClient([client, GRAPHQL]);
  }, []);

  return (
    <div>
      <div>Hello, {currentUser.name}</div>
      <div>
        <button
          onClick={async (e) => {
            console.log("API ", API);
          }}
        >
          API
        </button>
      </div>
      <div>
        <button
          onClick={async (e) => {
            console.log(
              "API ",
              await API[appID].Messaging.queryUserAddressBook({ filter: {} })
            );
          }}
        >
          GET ADDRESSBOOK
        </button>
      </div>
    </div>
  );
};
messagingTest.story = {
  name: "Messaging-Test",
  decorators: [
    (Story) => {
      //console.log("PROVIDER ", PrifinaProvider);
      return (
        <PrifinaProvider stage={"sandbox"}>
          <Story />
        </PrifinaProvider>
      );
    },
  ],
};
