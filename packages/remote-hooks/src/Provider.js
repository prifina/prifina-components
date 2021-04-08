/* global localStorage */

import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useRef,
} from "react";

import * as QLqueries from "./queries";
import * as QLsubscriptions from "./subscriptions";
import * as QLmutations from "./mutations";
import * as DataModels from "./dataModels";
import gql from "graphql-tag";

//const short = require("short-uuid");

export const PrifinaContext = createContext({});

export const Provider = ({ Context, children, ...props }) => {
  console.log("CTX ", Context);
  console.log("PROPS ", props);

  const providerContext = useRef(null);

  const callbacks = useRef({});
  const mockups = useRef({});
  const [appSubscriptions, setAppSubscriptions] = useState({});
  //const appSubscriptions = useRef({});
  //let appSubscriptions = {};
  const API = useRef({});
  const CLIENT = useRef({});

  const [currentUser, setCurrentUser] = useState({
    name: "Tero",
    uuid: "Testing-uuid",
  });
  const check = useCallback(() => {
    console.log("Prifina current", providerContext.current);
    //timerTest();
    return { check: "OK" };
  }, []);
  /*
  Promise.resolve()
  .then(() => {
    // Makes .then() return a rejected promise
    throw new Error('Oh no!');
  })
  .catch(error => {
    console.error('onRejected function called: ' + error.message);
  })
  .then(() => {
    console.log("I am always called even if the prior then's promise rejects");
  });
*/
  const createQuery = (opts) => {
    console.log("OPTS ", opts);
    /*
    input S3ObjectInput {
      bucket:String!
      key:String!
      sql:String
      fields:[String]
      filter:String
      options: S3OptionsInput
    }
    */
    const moduleParts = opts.name.split("/");
    const datamodel = DataModels[moduleParts[0]][moduleParts[1]];
    console.log(datamodel);
    if (opts.fields && opts.fields.length > 0) {
      // check fields matches datamodel + add prefix
      opts.fields.forEach((f, i) => {
        if (!f.startsWith("p_")) {
          opts.fields[i] = "p_" + f;
        }
        if (datamodel.fields.indexOf(f) === -1) {
          //return Promise.reject("INVALID_FIELD (" + f + ")");
          throw new Error("INVALID_FIELD (" + f + ")");
        }
      });
    }

    return new Promise(function (resolve, reject) {
      //const S3Bucket = "athena-test-prifina";
      //const S3Key = "google-timeline-data/csv-data/activities/activities.csv";
      const S3Bucket = datamodel.bucket;
      const S3Key = datamodel.key;

      CLIENT.current.user
        .query({
          query: gql(opts.query),
          variables: {
            input: {
              bucket: S3Bucket,
              key: S3Key,
              fields: opts.fields,
              filter: opts.filter,
              next: opts.next,
            },
          },
        })
        .then((res) => {
          console.log("RES ", res);
          let s3Object = JSON.parse(res.data.getS3Object.result);

          resolve({ data: { getS3Object: s3Object } });
        })
        .catch((error) => {
          console.log("QUERY ERROR ", error);
          reject(error);
        });
    });

    //return Promise.resolve({});
    //createQuery({ query: query, fields, filter, next });
    /*
    const query = `query s3Object {
      getS3Object {
        result
      }
    }`;
    //const result = await client.query({ query: gql(test) });
    return CLIENT.query({ query: GQL(query), variables: {} });

    */

    /*

input S3OptionsInput {
  input:String
  output:String
}  
input S3ObjectInput {
  bucket:String!
  key:String!
  sql:String
  fields:[String]
  filter:String
  options: S3OptionsInput
}

type Query @aws_iam @aws_cognito_user_pools {
	getS3Object(input:S3ObjectInput): S3ObjectData

  */
  };
  const registerClient = useCallback((client) => {
    CLIENT.current["user"] = client[0];
    CLIENT.current["prifina"] = client[1];
    CLIENT.current["s3"] = client[2];
  }, []);

  const S3FileUpload = useCallback((opts) => {
    console.log("OPTS ", opts);
    console.log("S3 ", CLIENT.current);
    return CLIENT.current.s3
      .put(opts.fileName, opts.file, {
        level: "public",
        contentType: opts.meta.type,
        metadata: opts.meta,
        progressCallback: (progress) => {
          opts.progress(progress);
        },
      })
      .then((res) => {
        console.log("S3 STATUS ", res);
        return res;
      })
      .catch((err) => {
        console.log("S3 ERR ", err);
        return err;
      });

    /*
    Storage.put('uploads/'+keyName+'.'+ext, file, {
      metadata: metaData,
      progressCallback: progress => {
        this.CustomFunc(progress);
      }
    })
        .then (result => console.log(result,file))
        .catch(err => console.log(err));
  }

  const s3Status = await S3Storage.put(
          s3Key,
          JSON.stringify(state.schemaJson),
          {
            level: "public",
            contentType: "application/json",
            cacheControl: "",
            expires: parseInt(Date.now() / 1000),
            metadata: { created: new Date().toISOString() },
          }
        );
        console.log(s3Status);

*/
  }, []);
  const registerHooks = useCallback((appID, modules) => {
    if (modules.length > 0) {
      API.current[appID] = {};

      modules.forEach((module, mi) => {
        const moduleName = module.getModuleName();
        const functionList = module.getInfo();
        let fn = {};
        //const subscriptionList = module.getSubscriptions() || [];
        console.log("LIST ", functionList);
        functionList.forEach((q) => {
          if (q.startsWith("query")) {
            fn[q] = ({ fields, filter, next }) => {
              console.log("INIT ", providerContext.current.init);
              const stage = providerContext.current.init.stage;
              //const executionID = short.generate();

              return module[q](
                stage,
                appID,
                moduleName + "/" + q,
                createQuery,

                fields,
                filter,
                next
              );
            };
          }
          if (q.startsWith("S3")) {
            console.log("MODULE REGISTER ", moduleName, q);
            fn[q] = ({ fileName, fileHandler, progress, opts }) => {
              console.log("INIT ", providerContext.current.init);
              const stage = providerContext.current.init.stage;
              //const executionID = short.generate();

              return module[q](
                stage,
                appID,
                moduleName + "/" + q,
                S3FileUpload,
                fileHandler,
                progress,
                opts
              );
            };
          }
        });
        //console.log(subscriptionList);
        //console.log(providerContext.current.init);
        API.current[appID][moduleName] = fn;
      });
      //console.log("HOOKS", appSubscriptions);
    }
  }, []);

  /*
  if (subscriptionList.length > 0) {
    const querySubscription = subscriptionList.find(
      (s) => s.subscription === q
    );
    if (querySubscription) {
      console.log("SUBS ", querySubscription);
      addSubscription(appID, q, {
        executionID: executionID,
        mockups: querySubscription.mockup || null,
      });

      //TBD output fields selection....
    }
  }
*/

  const subscriptionTest = useCallback(
    (appID, mockupData, interval = 10000) => {
      if (providerContext.current.init.stage === "dev") {
        if (mockups.current) {
          if (Object.keys(mockups.current).length === 0) mockups.current = {};
          mockups.current[appID] = mockupData;
        }
        const subscriptionTimer = setInterval(() => {
          const rInt = Math.floor(Math.random() * Math.floor(10));
          //console.log("RANDOM ", rInt);
          if (!(rInt % 3)) {
            console.log("RANDOM ", rInt);
            //console.log("MOCKUPS ", mockups.current[appID]);
            //console.log("MOCKUP KEYS ", Object.keys(mockups.current[appID]));
            if (
              mockups.current[appID] &&
              Object.keys(mockups.current[appID]).length > 0
            ) {
              Object.keys(mockups.current[appID]).map((mockup) => {
                const data = mockups.current[appID][mockup];
                if (Array.isArray(data)) {
                  const r = Math.floor(Math.random() * Math.floor(data.length));
                  callbacks.current[appID](data[r]);
                } else {
                  callbacks.current[appID](data);
                }
              });
            } else {
              if (Object.keys(mockups.current).length === 0) {
                clearInterval(subscriptionTimer);
              }
            }
          }
        }, interval);

        return true;
      }
    },
    []
  );

  const unSubscribe = useCallback((appID, subscription) => {
    if (providerContext.current.init.stage === "dev") {
      if (
        mockups.current[appID] &&
        typeof mockups.current[appID][subscription]
      ) {
        console.log("DELETE MOCKUP ");
        delete mockups.current[appID][subscription];
        if (Object.keys(mockups.current[appID]).length === 0) {
          delete mockups.current[appID];
        }
      }
    } else {
      //QL subscriptio...
      // register subscription to appSubscriptions.current[appID]
      // subscription.unsubscribe()
    }
    return true;
  }, []);

  const subscriptions = useCallback((appID, subscription, variables = null) => {
    console.log("QL ", typeof QLsubscriptions[subscription]);
    if (typeof QLsubscriptions[subscription] !== "function") {
      throw new Error("Invalid Subscription");
    } else if (subscription === "getInfo") {
      return QLsubscriptions.getInfo();
    } else {
      //console.log("CHECK 1 ", typeof callbacks.current[appID]);
      if (typeof callbacks.current[appID] === "undefined") {
        throw new Error("OnUpdate callback function is missing");
      }
      //console.log("CHECK 2 ", providerContext.current.init.stage);
      if (providerContext.current.init.stage === "dev") {
        //console.log("CHECK 3 ", typeof mockups.current[appID]);
        if (typeof mockups.current[appID] === "undefined") {
          throw new Error("Mockup Subscription data is missing");
        }
        return true;
      } else {
        //QL subscriptio...
        // register subscription to appSubscriptions.current[appID]
        // subscription.unsubscribe()
        return true;
      }
      /*
      return QLsubscription[subscription](
        providerContext.current.init.stage,
        appID,
        currentUser.uuid,
        variables
      );
      */
    }
  }, []);

  const mutations = useCallback((appID, mutation, variables) => {
    console.log("QL ", typeof QLmutations[mutation], mutation);
    if (typeof QLmutations[mutation] !== "function") {
      return Promise.reject("INVALID_MUTATION");
    } else {
      return QLmutations[mutation](
        providerContext.current.init.stage,
        appID,
        currentUser.uuid,
        variables
      );
    }
  }, []);
  const queries = useCallback((appID, query, filter = null) => {
    console.log("QL ", typeof QLqueries[query]);
    if (typeof QLqueries[query] !== "function") {
      return Promise.reject("INVALID_QUERY");
    } else {
      return QLqueries[query](
        providerContext.current.init.stage,
        appID,
        currentUser.uuid,
        filter
      );
    }
  }, []);

  const setSettings = useCallback((appID, uuid, newSettings = {}) => {
    //console.log(providerContext.current.init.app);
    /*
    setSettings(currentAppId, prifinaID, {
      type: "WIDGET",
      index: settings.current.widget,
      settings: newSettings,
    });
*/
    if (providerContext.current.init.stage === "dev") {
      localStorage.setItem(
        "PrifinaAppSettings-" + appID,
        JSON.stringify(newSettings.settings)
      );

      return Promise.resolve(true);
    } else {
      if (newSettings.type === "WIDGET") {
        return CLIENT.current.prifina.graphql({
          query: QLmutations.setSettings,
          variables: {
            id: uuid,
            widget: {
              name: appID,
              index: newSettings.index,
              settings: newSettings.settings,
            },
          },
          authMode: "AWS_IAM",
        });
      }
      /*


updateInstalledWidgets(id: String!, widget: WidgetInput): PrifinaUser
mutation MyMutation {
  updateInstalledWidgets(id: "13625638c207ed2fcd5a7b7cfb2364a04661", widget: {index: 0, name: "helloWidget", 
  settings: [{field: "msg", value: "Hello2"}]}) {
    id
    installedWidgets
  }
}

        await setSettings(appID, "f902cbca-8748-437d-a7bb-bd2dc9d25be5", [
          { field: "msg", value: "Hello" },
        ])
        */
    }
  }, []);
  const getSettings = useCallback((appID, uuid = "") => {
    //console.log(providerContext.current.init.app);
    if (providerContext.current.init.stage === "dev") {
      let appSettings = JSON.parse(
        localStorage.getItem("PrifinaAppSettings-" + appID)
      );
      if (appSettings === null) {
        appSettings = {};
      }
      return Promise.resolve(appSettings);
    } else {
      //console.log("CLIENT ", CLIENT);

      return CLIENT.current.prifina.graphql({
        query: QLqueries.getSettings,
        variables: { id: uuid, widget: appID },
        authMode: "AWS_IAM",
      });
    }
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

  const onUpdate = useCallback((appID, fn, type = "WIDGET") => {
    //console.log("UPDATE SET ", appID);
    if (callbacks.current) {
      if (Object.keys(callbacks.current).length === 0) callbacks.current = {};
      if (callbacks.current.hasOwnProperty(appID)) {
        callbacks.current[appID].push(fn);
      } else if (type === "WIDGET") {
        if (!callbacks.current.hasOwnProperty(appID))
          callbacks.current[appID] = [];
        callbacks.current[appID].push(fn);
      } else {
        callbacks.current[appID] = fn;
      }
      //console.log("UPDATE SET ", callbacks.current);
    }
  }, []);
  const getCallbacks = useCallback(() => {
    //console.log("GET CALLBACk ", data);
    return callbacks.current;
  }, []);

  useEffect(() => {
    //console.log("APP SUBS ", appSubscriptions);
    if (Object.keys(appSubscriptions).length > 0) {
      //console.log("TRIGGER SUBS...");
      //console.log(providerContext.current.init);
      if (providerContext.current.init.stage === "dev") {
        Object.keys(appSubscriptions).forEach((app) => {
          const subscriptionTimer = setInterval(() => {
            //console.log("APP ", app);
            Object.keys(appSubscriptions[app]).forEach((f) => {
              const data = {
                data: {
                  [f]: {
                    data: appSubscriptions[app][f].mockups,
                    status: "READY",
                  },
                },
              };
              //console.log("DATA ", data);
              callbacks.current[app](data);
            });

            clearInterval(subscriptionTimer);
          }, 1000);
        });
      }
    }
  }, [appSubscriptions]);

  const addSubscription = (appID, fnName, fnSub) => {
    setAppSubscriptions({ ...appSubscriptions, [appID]: { [fnName]: fnSub } });

    return true;
  };

  const Prifina = useCallback(({ appId, modules = {} }) => {
    let config = {
      appId: appId,
      stage: providerContext.current.init.stage,
      uuid: currentUser.uuid,
    };
    providerContext.current.init.apps[appId] = {};

    let queryList = QLqueries.getInfo();
    let queries = {};
    queryList.forEach((q) => {
      //console.log(q);
      queries[q] = (filter) => {
        return QLqueries[q](config.stage, config.appId, config.uuid, filter);
      };
    });
    let mutationList = QLmutations.getInfo();
    let mutations = {};
    mutationList.forEach((q) => {
      //console.log(q);
      mutations[q] = (variables) => {
        return QLmutations[q](
          config.stage,
          config.appId,
          config.uuid,
          variables
        );
      };
    });
    let subscriptionList = QLsubscriptions.getInfo();
    let subscriptions = {};
    subscriptionList.forEach((q) => {
      subscriptions[q] = (variables) => {
        return QLsubscriptions[q](
          config.stage,
          config.appId,
          config.uuid,
          variables
        );
      };
    });
    let prifinaHooks = {
      config: config,
      appSubscriptions: {},
      addSubscription: function (t) {
        prifinaHooks.appSubscriptions[t] = "OK";
        console.log("CALLBACKS ", callbacks);
        appSubscriptions.current[t] = "SUB TEST";
      },
      core: {
        queries: queries,
        mutations: mutations,
        subscriptions: subscriptions,
      },
    };

    return prifinaHooks;
  }, []);

  providerContext.current = {
    check,

    setSettings,
    getSettings,
    getLocalization,
    onUpdate,
    getCallbacks,
    currentUser,
    subscriptionTest,
    unSubscribe,
    Prifina,
    registerHooks,
    registerClient,
    API: API.current,
    /*
    connector,
    queries,
    mutations,
    subscriptions,
    */
  };

  if (typeof providerContext.current.init === "undefined") {
    console.log("DEV STAGE INIT FOR STORYBOOK");
    providerContext.current.init = { stage: props.stage, apps: {} };
  }
  console.log("Prifina ", providerContext);
  if (!children) {
    return null;
  }
  return (
    <Context.Provider value={providerContext}>{children}</Context.Provider>
  );
};
