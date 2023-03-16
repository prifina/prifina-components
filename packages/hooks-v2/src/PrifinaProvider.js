import React, { createContext, useContext, useMemo, useRef, useCallback, useState } from "react";

import { stringify, shortId } from "./utils";
//import { v4 as uuidv4 } from 'uuid';
import gql from "graphql-tag";

import { buildProviderFilter } from "./queryBuilder";

//const { v4: uuidv4 } = require('uuid');
/*
export const AccountContext = createContext(null);

export function useAccountContext() {
  return useContext(AccountContext);
}

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
    
      }}
    >
      <ThemeProvider>
        <React.Fragment>
          <GlobalStyle />
          {!isAuthenticating && <Routes />}
          {isAuthenticating && <div>Loading...</div>}
        </React.Fragment>
      </ThemeProvider>
    </AppContext.Provider>
  );

*/

export const PrifinaContext = createContext({});

export const PrifinaContextProvider = ({ activeApp, activeUser, Context, stage = "dev", children, ...props }) => {

  const providerContext = useRef({ stage, ...props });
  const callbacks = useRef({});
  const appSubscriptions = useRef({});
  const CLIENT = useRef({});
  const API = useRef({});

  const [currentUser, setCurrentUser] = useState(
    activeUser || {
      name: "Test",
      uuid: "Testing-uuid",
      endpoint: "https://endpoint.xxx",
      region: "us-east-1",
    }
  );


  const check = useCallback(() => {
    console.log("Prifina current", providerContext.current);
    //console.log("Prifina subscriptions", appSubscriptions.current);
    //console.log("Prifina API", API.current);
    //console.log("Prifina CLIENT", CLIENT.current);
    //timerTest();
    return { init: providerContext.current.init, callbacks: getCallbacks(), API: getAPI() };
  }, []);

  //S3FileUpload,

  //res.data.createMessage.messageId,
  /*
  await API[appID].Messaging.mutationUpdateMessageStatus({
    variables: { messageId: m.id, status: 1 },
  });
  */


  const createSubscriptionAppsyncClientVersion = (opts) => {
    console.log("SUBSCRIPTION OPTS ", opts);
    if (callbacks.current?.sandbox) {
      let connectorFunction = Object.assign({}, opts);
      callbacks.current["sandbox"][0]({
        [connectorFunction.name]: connectorFunction,
      });
    }

    if (callbacks.current?.sandbox) {
      callbacks.current["sandbox"][0]({
        mutationRequest: {
          appID: opts.appId,
          variables: opts.variables,
        },
      });
    }

    return new Promise(function (resolve, reject) {
      const { appHandler, ...variables } = opts.variables;
      const subHandler = CLIENT.current.user
        .subscribe({
          query: gql(opts.mutation),
          variables: {
            ...variables,
            dataconnector: opts.name,
            userId: currentUser.uuid,
            appId: opts.appId,
            execId: shortId(),
            stage: providerContext.current.init.stage,
          },
        })
        .subscribe({
          next: (res) => {
            console.log("NOTIFICATION SUBS RESULTS3 ", res, appHandler);

            //appSubscriptions.current[opts.appId][appHandler]=subHandler;

            const appIndex = providerContext.current.init.apps[opts.appId];
            console.log("APP INDEX ARRAY ", appIndex);
            /*
            NOTIFICATION SUBS RESULTS3  { data: 'Subsription Testing...' } s8af6yaxis
            console.log
            APP INDEX  [ 's8af6yaxis' ]
            console.log
            SUBS HANDLER  181ujb3avr
        
          console.log
            SUBS  { 'APP-ID': { s8af6yaxis: '181ujb3avr' } }
            */

            let callBackIndex = 0;
            if (appIndex.length > 1) {
              callBackIndex = appIndex.findIndex((id) => {
                return id === appHandler;
              });
            }

            callbacks.current[opts.appId][callBackIndex](res.data);
          },
          error: (error) => {
            console.warn(error);
            //const appIndex = providerContext.current.init.apps[opts.appId];
            let callBackIndex = 0;
            callbacks.current[opts.appId][callBackIndex]({ error: error });
          },
        });

      console.log("SUBS HANDLER ", subHandler);
      if (appSubscriptions.current?.[opts.appId]) {
        // not array so we can support multiple subscriptions for same app/widget... 
        appSubscriptions.current[opts.appId][appHandler] = subHandler;
        //appSubscriptions.current[opts.appId].push(subHandler);
      } else {
        appSubscriptions.current[opts.appId] = { [appHandler]: subHandler };
      }
      resolve(true);
    });
  };

  const createSubscription = (opts) => {
    console.log("SUBSCRIPTION OPTS ", opts);
    if (callbacks.current?.sandbox) {
      let connectorFunction = Object.assign({}, opts);
      callbacks.current["sandbox"][0]({
        [connectorFunction.name]: connectorFunction,
      });
    }

    if (callbacks.current?.sandbox) {
      callbacks.current["sandbox"][0]({
        mutationRequest: {
          appID: opts.appId,
          variables: opts.variables,
        },
      });
    }
    /*
        const subscription = this.Client.graphql(graphqlOperation(rq, vars)).subscribe({
          next: ({ provider, value }) => { this.callback(provider, value) },
          error: error => {
            console.error(error);
            // do we need to throw exception here ???
          }
        });
    
        this.subscriptions[subscriptionID] = subscription;
        */

    return new Promise(function (resolve, reject) {
      const { appHandler, ...variables } = opts.variables;
      const subHandler = CLIENT.current.user
        .subscribe({
          query: gql(opts.mutation),
          variables: {
            ...variables
          },
        })
        .subscribe({
          next: (res) => {
            console.log("NOTIFICATION SUBS RESULTS3 ", res, appHandler);

            //appSubscriptions.current[opts.appId][appHandler]=subHandler;

            const appIndex = providerContext.current.init.apps[opts.appId];
            console.log("APP INDEX ARRAY ", appIndex);
            /*
            NOTIFICATION SUBS RESULTS3  { data: 'Subsription Testing...' } s8af6yaxis
            console.log
            APP INDEX  [ 's8af6yaxis' ]
            console.log
            SUBS HANDLER  181ujb3avr
        
          console.log
            SUBS  { 'APP-ID': { s8af6yaxis: '181ujb3avr' } }
            */

            let callBackIndex = 0;
            if (appIndex.length > 1) {
              callBackIndex = appIndex.findIndex((id) => {
                return id === appHandler;
              });
            }

            callbacks.current[opts.appId][callBackIndex](res.data);
          },
          error: (error) => {
            console.warn(error);
            //const appIndex = providerContext.current.init.apps[opts.appId];
            let callBackIndex = 0;
            callbacks.current[opts.appId][callBackIndex]({ error: error });
          },
        });

      console.log("SUBS HANDLER ", subHandler);
      if (appSubscriptions.current?.[opts.appId]) {
        // not array so we can support multiple subscriptions for same app/widget... 
        appSubscriptions.current[opts.appId][appHandler] = subHandler;
        //appSubscriptions.current[opts.appId].push(subHandler);
      } else {
        appSubscriptions.current[opts.appId] = { [appHandler]: subHandler };
      }
      resolve(true);
    });
  };

  const createMutation = (opts) => {
    console.log("MUTATION OPTS ", opts);
    if (callbacks.current?.sandbox) {
      let connectorFunction = Object.assign({}, opts);
      callbacks.current["sandbox"][0]({
        [connectorFunction.name]: connectorFunction,
      });
    }

    if (callbacks.current?.sandbox) {
      callbacks.current["sandbox"][0]({
        mutationRequest: {
          appID: opts.appId,
          variables: opts.variables,
        },
      });
    }

    return new Promise(function (resolve, reject) {

      const moduleParts = opts.name.split("/");

      CLIENT.current.user
        .mutate({
          mutation: gql(opts.mutation),
          variables: {
            input: {
              ...opts.variables,
              dataconnector: opts.name,
              userId: currentUser.uuid,
              appId: opts.appId,
              execId: shortId(),
              stage: providerContext.current.init.stage,
            },
          },
        })
        .then((res) => {
          console.log("MUTATION RES ", res);
          /*
          type MsgObjectData @aws_iam {
            receiver: String
            messageId: String
            chatId: String
            createdAt: AWSTimestamp
            result: AWSJSON
          }
               MUTATION RES  { data: { mutationCreateMessage: { result: [Object] } } 
          */
          let dataObject = undefined;
          //let key=moduleParts[1];
          const key = Object.keys(res.data)[0];
          console.log("KEY ", key)
          // messaging mutations... 
          if (res.data[key]?.result && res.data[key].result?.result) {
            //console.log("KEY2 ",res.data[key])
            dataObject = JSON.parse(res.data[key].result.result);
          } else {
            dataObject = res.data[key];
          }

          if (callbacks.current?.sandbox) {
            callbacks.current["sandbox"][0]({
              mutationResult: { data: { [key]: dataObject } },
            });
          }
          resolve({ data: { [key]: dataObject } });


        })
        .catch((error) => {
          console.log("MUTATION ERROR ", error);
          reject(error);
        });
    });
  };

  const createQuery = (opts) => {
    console.log("OPTS ", opts);

    if (callbacks.current?.sandbox) {
      //"{\"s3::date\":{\"=\":\"2022-08-01\"}}"
      //const filter = stringify(opts.filter);
      const filter = opts?.filter ? stringify(opts.filter) : "";
      let connectorFunction = Object.assign({}, opts);
      connectorFunction.filter = filter;

      callbacks.current["sandbox"][0]({
        [connectorFunction.name]: connectorFunction,
      });
    }

    const moduleParts = opts.name.split("/");
    let queryFields = [];
    if (opts.fields && opts.fieldsList) {
      queryFields = opts.fields.split(",");
      console.log(queryFields, opts.fieldsList);

      let invField = "";
      if (
        queryFields.some((k) => {
          invField = k;
          return opts.fieldsList.indexOf(k) === -1;
        })
      ) {
        if (callbacks.current?.sandbox) {
          callbacks.current["sandbox"][0]({
            fieldsError: { fieldsList: opts.fieldsList, invalidField: invField },
          });
        }
        //throw new Error("INVALID_FIELD (" + invField + ")");
        return Promise.reject("INVALID_FIELD (" + invField + ")");
      }
    }

    if (callbacks.current?.sandbox) {
      callbacks.current["sandbox"][0]({
        queryRequest: {
          appID: opts.appId,
          fields: queryFields,
          filter: opts?.filter ? buildProviderFilter(opts.filter) : "",
          next: opts.next,
        },
      });
    }

    return new Promise(function (resolve, reject) {
      CLIENT.current.user
        .query({
          query: gql(opts.query),
          variables: {
            input: {
              //bucket: S3Bucket,
              //key: S3Key,
              dataconnector: opts.name,
              userId: currentUser.uuid,
              fields: queryFields,
              filter: opts?.filter ? buildProviderFilter(opts.filter) : "",
              next: opts.next,
              appId: opts.appId,
              execId: shortId(),
              stage: providerContext.current.init.stage,
            },
          },
        })
        .then((res) => {
          console.log("RES ", res);
          if (res.data?.getDataObject) {
            let s3Object = JSON.parse(res.data.getDataObject.result);
            if (callbacks.current?.sandbox) {
              callbacks.current["sandbox"][0]({
                queryResult: { data: { getDataObject: s3Object } },
              });
            }
            resolve({ data: { getDataObject: s3Object } });
          } else {
            console.log("NOT S3 DATA OBJECT");
            const key = Object.keys(res.data)[0];
            let dataObject = JSON.parse(res.data[key].result);
            if (callbacks.current?.sandbox) {
              callbacks.current["sandbox"][0]({
                queryResult: { data: { [key]: dataObject } },
              });
            }
            resolve({ data: { [key]: dataObject } });
          }
        })
        .catch((error) => {
          if (callbacks.current?.sandbox) {
            callbacks.current["sandbox"][0]({
              queryError: JSON.stringify(error),
            });
          }
          console.log("QUERY ERROR ", error);
          reject(error);
        });

    });

  };

  const registerDataConnector = useCallback((appID, modules) => {
    if (modules.length > 0) {
      API.current[appID] = {};

      modules.forEach((module, mi) => {
        const moduleName = module.getModuleName();
        const functionList = module.getInfo();
        if (callbacks.current?.sandbox) {
          callbacks.current["sandbox"][0]({ registerConnector: moduleName });
          //callbacks.current[appID][callBackIndex]({ error: err });
        }
        let fn = {};
        //const subscriptionList = module.getSubscriptions() || [];
        console.log("LIST ", typeof functionList, functionList);
        functionList.forEach((q) => {
          console.log("REGISTER new ", q);
          if (q.startsWith("query")) {
            fn[q] = ({ fields, filter, next }) => {
              console.log("INIT ", providerContext.current.init);
              const stage = providerContext.current.init.stage;
              let fieldsList = [];
              if (typeof module.getFields !== "undefined") {
                fieldsList = module.getFields(q);
              }
              //const executionID = short.generate();
              if (callbacks.current?.sandbox) {
                callbacks.current["sandbox"][0]({
                  connector: moduleName + "/" + q,
                });
              }

              return module[q]({
                stage: stage,
                appID: appID,
                name: moduleName + "/" + q,
                createQuery: createQuery,
                fields,
                filter,
                next,
                fieldsList: fieldsList,
                uuid: currentUser.uuid,
              });
            };
          }

          else if (q.startsWith("subscribe")) {
            fn[q] = ({ variables }) => {
              console.log("INIT MUTATION", providerContext.current.init);
              const stage = providerContext.current.init.stage;

              //const executionID = short.generate();
              if (callbacks.current?.sandbox) {
                callbacks.current["sandbox"][0]({
                  connector: moduleName + "/" + q,
                });
              }

              return module[q]({
                stage: stage,
                appID: appID,
                name: moduleName + "/" + q,
                createSubscription: createSubscription,
                uuid: currentUser.uuid,
                variables,
              });
            };
          }

          else if (q.startsWith("mutation")) {
            fn[q] = ({ variables }) => {
              console.log("INIT MUTATION", providerContext.current.init);
              const stage = providerContext.current.init.stage;

              //const executionID = short.generate();
              if (callbacks.current?.sandbox) {
                callbacks.current["sandbox"][0]({
                  connector: moduleName + "/" + q,
                });
              }

              return module[q]({
                stage: stage,
                appID: appID,
                name: moduleName + "/" + q,
                createMutation: createMutation,
                uuid: currentUser.uuid,
                callbacks: getCallbacks,
                variables,
              });
            };
          } else {
            throw new Error('Oh no!');
          }
        });
        //console.log(subscriptionList);
        //console.log(providerContext.current.init);
        API.current[appID][moduleName] = fn;
      });
      //console.log("HOOKS", appSubscriptions);
    }
  }, []);

  const registerClient = useCallback((client) => {
    CLIENT.current["user"] = client[0];
    CLIENT.current["prifina"] = client[1];
    CLIENT.current["s3"] = client[2];
  }, []);

  const onUpdate = useCallback((appID, fn, type = "WIDGET") => {
    console.log("UPDATE SET ", appID, callbacks);

    if (typeof appID !== "string") {
      throw new Error("onUpdate, appID is not string");
    }
    const updateID = shortId()

    if (callbacks.current) {
      // multiple apps/widgets active...
      if (providerContext.current.init.apps?.[appID]) {
        providerContext.current.init.apps[appID].push(updateID);
      } else {
        providerContext.current.init.apps[appID] = [updateID];
      }

      if (providerContext.current.init.users?.[currentUser.uuid]) {
        providerContext.current.init.users[currentUser.uuid] = "";
      }
      providerContext.current.init.users[currentUser.uuid] = activeApp;

      if (Object.keys(callbacks.current).length === 0) callbacks.current = {};
      if (callbacks.current?.[appID]) {
        callbacks.current[appID].push(fn);
      } else if (type === "WIDGET") {
        if (!callbacks.current?.[appID])
          callbacks.current[appID] = [];
        callbacks.current[appID].push(fn);
      } else {
        callbacks.current[appID] = fn;
      }

      console.log("UPDATE SET ", callbacks.current);
      return updateID;
    }
  }, []);

  const getAppSubscriptions = useCallback(() => {
    //console.log("GET CALLBACk ", data);
    return appSubscriptions.current;
  }, []);
  const getCallbacks = useCallback(() => {
    //console.log("GET CALLBACk ", data);
    return callbacks.current;
  }, []);

  const removeCallbacks = useCallback(() => {
    callbacks.current = {};
    return true;
  }, []);

  const deleteCallback = useCallback((appID, index) => {
    const currentCount = callbacks.current[appID].length;
    if (currentCount > 1) {
      callbacks.current[appID].splice(index, 1);
    } else {
      delete callbacks.current[appID];
    }
    return true;
  }, []);

  const getAPI = useCallback(() => {
    return API.current;
  }, []);

  const getLocalization = useCallback(() => {
    let appLocalization = JSON.parse(
      localStorage.getItem("PrifinaAppLocalization")
    );
    if (appLocalization === null) {
      appLocalization = {
        calendar: "gregory",
        country: "FI",
        day: "2-digit",
        desktop: true,
        language: "en-US,en;q=0.9",
        locale: "en-GB",
        mobile: false,
        month: "2-digit",
        numberingSystem: "latn",
        smarttv: false,
        tablet: false,
        timeZone: "Europe/Helsinki",
        timeZoneOffset: -120,
        year: "numeric",
      };
    }
    return appLocalization;
  }, []);

  providerContext.current = {
    stage,
    check,
    onUpdate,
    getAppSubscriptions,
    getCallbacks,
    removeCallbacks,
    deleteCallback,
    currentUser,
    getLocalization,
    registerClient,
    registerDataConnector,
    API: API.current,
  }
  /*
    providerContext.current = {
      
      activeRole,
      setSettings,
      getSettings,
      
      subscriptionTest,
      unSubscribe,
      Prifina,
      registerRemoteClient,
      API: API.current,
     
    };
  */


  if (typeof providerContext.current.init === "undefined") {
    providerContext.current.init = { stage: stage, apps: {}, users: {} };
  }
  //console.log("Prifina ", providerContext);
  if (!children) {
    return null;
  }

  return (
    <Context.Provider
      value={providerContext}
    >
      {children}
    </Context.Provider>
  );
};

/* Hook */
// ==============================
export const usePrifina = () => {
  // console.log("CONTEXT ",PrifinaContext);
  const prifinaContext = useContext(PrifinaContext);
  // console.log("CONTEXT2 ",prifinaContext);
  const prifina = useMemo(() => {
    return prifinaContext.current;
  }, [prifinaContext]);

  return prifina;
};

/* @component */
//export default PrifinaContextProvider;
