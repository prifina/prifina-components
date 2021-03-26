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

const short = require("short-uuid");

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

  const [currentUser, setCurrentUser] = useState({
    name: "Tero",
    uuid: "Testing-uuid",
  });
  const check = useCallback(() => {
    console.log("Prifina current", providerContext.current);
    //timerTest();
    return { check: "OK" };
  }, []);

  const registerHooks = useCallback((appID, modules) => {
    if (modules.length > 0) {
      modules.forEach((module, mi) => {
        const functionList = module.getInfo();
        let fn = {};
        const subscriptionList = module.getSubscriptions() || [];
        functionList.forEach((q) => {
          if (q.startsWith("query")) {
            fn[q] = (filter) => {
              console.log("INIT ", providerContext.current.init);
              const executionID = short.generate();
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
                  /*
                  if (!appSubscriptions.current.hasOwnProperty(appID))
                    appSubscriptions.current[appID] = {};

                  appSubscriptions.current[appID][q] = {
                    executionID: executionID,
                    mockups: querySubscription.mockup || null,
                  };
                  */
                  //TBD output fields selection....
                }
              }

              return module[q](
                providerContext.current.init.stage,
                appID,
                currentUser.uuid,
                executionID,
                filter
              );
            };
          }
        });
        //console.log(subscriptionList);
        //console.log(providerContext.current.init);
        API.current[appID] = fn;
      });
      //console.log("HOOKS", appSubscriptions);
    }
  }, []);

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

  const setSettings = useCallback((appID, settings = {}) => {
    //console.log(providerContext.current.init.app);

    if (providerContext.current.init.stage === "dev") {
      localStorage.setItem(
        "PrifinaAppSettings-" + appID,
        JSON.stringify(settings)
      );
    }
    return Promise.resolve(true);
  }, []);
  const getSettings = useCallback((appID) => {
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
      return Promise.resolve({});
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

  const onUpdate = useCallback((appID, fn) => {
    //console.log("UPDATE SET ", appID);
    if (callbacks.current) {
      if (Object.keys(callbacks.current).length === 0) callbacks.current = {};
      callbacks.current[appID] = fn;
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
