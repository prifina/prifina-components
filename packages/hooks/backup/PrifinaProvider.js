/* global localStorage */

import React, {
  useState,
  /* useEffect,
   */
  useCallback,
  createContext,
  useContext,
  useRef,
  useMemo,
} from "react";

import * as QLqueries from "./queries";
import * as QLsubscriptions from "./subscriptions";
import * as QLmutations from "./mutations";

const short = require("short-uuid");

const connectorOpts = ["name", "function"];
export const PrifinaContext = createContext({});

const PrifinaContextProvider = (props) => {
  console.log(QLmutations);
  const providerContext = useRef(null);

  const callbacks = useRef({});
  const mockups = useRef({});
  const appSubscriptions = useRef({});

  const [currentUser, setCurrentUser] = useState({
    name: "Tero",
    uuid: "Testing-uuid",
  });
  const check = useCallback(() => {
    console.log("Prifina current", providerContext.current);
    //timerTest();
    return { check: "OK" };
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

  const connector = useCallback((opts) => {
    console.log("Prifina current", providerContext.current);
    console.log(
      "Prifina current connectors",
      providerContext.current.init.connectors
    );
    //console.log("CONNECTOR NAME ", opts);
    if (
      !Object.keys(opts).every((k) => {
        return connectorOpts.indexOf(k) > -1;
      })
    ) {
      throw new Error(
        `Invalid connector, only (${connectorOpts.join(",")}) allowed.`
      );
    }

    const connectorIndex = providerContext.current.init.connectors.findIndex(
      (c) => {
        return c.getModuleName() === opts.name;
      }
    );
    if (connectorIndex === -1) {
      throw new Error(`Connector (${opts.name}) not found!`);
    } else {
      const selectedConnector =
        providerContext.current.init.connectors[connectorIndex];
      if (Object.keys(selectedConnector).indexOf(opts.function) > -1) {
        return selectedConnector[opts.function]();
      } else {
        throw new Error(`Connector function (${opts.function}) not found!`);
      }
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
  providerContext.current = {
    check,
    connector,
    setSettings,
    getSettings,
    getLocalization,
    onUpdate,
    getCallbacks,
    currentUser,
    queries,
    mutations,
    subscriptions,
    subscriptionTest,
    unSubscribe,
  };
  if (props.stage === "dev") {
    console.log("DEV STAGE INIT FOR STORYBOOK");
    providerContext.current.init = { stage: "dev", apps: {} };
  }
  console.log("Prifina ", providerContext);
  if (!props.children) {
    return null;
  }
  return (
    <PrifinaContext.Provider value={providerContext}>
      {props.children}
    </PrifinaContext.Provider>
  );
};
//<div className={"prifina-provider"}>{props.children}</div>
/* Hook */
// ==============================

/*
export const usePrifina = ({ appID = "", connectors = [] }) => {
  const prifinaContext = useContext(PrifinaContext);
  console.log("PRIFINA CONTEXT ", prifinaContext);
  //console.log(window.location.hostname);
  const stage = "dev";

  if (appID === "" && stage === "dev") {
    appID = short.generate();
  }
  const prifina = useMemo(() => {
    prifinaContext.current.init = {
      stage: stage,
      appID: appID,
      connectors: connectors,
    };
    return prifinaContext.current;
  }, [prifinaContext]);
  return prifina;
};
*/
/* Hook */
// ==============================
export const usePrifina = ({ Context, appID = "", connectors = [] }) => {
  let contextExists = false;
  if (typeof Context !== "undefined") {
    Context = createContext(Context);
    contextExists = true;
  }
  const prifinaContext = useContext(Context || PrifinaContext);
  const stage = "dev";

  if (appID === "" && stage === "dev") {
    appID = short.generate();
  }
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

/* @component */
export default PrifinaContextProvider;
