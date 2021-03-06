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

const short = require("short-uuid");

const connectorOpts = ["name", "function"];
export const PrifinaContext = createContext({});

const PrifinaContextProvider = (props) => {
  const providerContext = useRef(null);

  const callbacks = useRef({});

  const [currentUser, setCurrentUser] = useState({
    name: "Tero",
    uuid: "Testing-uuid",
  });
  const check = useCallback(() => {
    console.log("Prifina current", providerContext.current);
    return { check: "OK" };
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
    return true;
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
      return appSettings;
    } else {
      return {};
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
    console.log("UPDATE SET ", appID);
    if (callbacks.current) {
      if (Object.keys(callbacks.current).length === 0) callbacks.current = {};
      callbacks.current[appID] = fn;
      console.log("UPDATE SET ", callbacks.current);
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
/*
export const useHooks = ({ Context, appID = "", connectors = [] }) => {
  console.log("HOOK ", typeof Context, Context);

  let contextExists = false;
  if (typeof Context !== "undefined") {
    Context = createContext(Context);
    contextExists = true;
    console.log("CONTEXT EXISTS...");
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
      console.log("MEMO 1 ", prifinaContext);

      if (contextExists) {
        prifinaContext.init.apps.push({
          app: appID,
          connectors: connectors,
        });
      } else {
        throw new Error("Invalid Prifina context provider");
      }
      return prifinaContext;
    } else {
      //   console.log("MEMO 2.0 ", prifinaContext.current.init);
      prifinaContext.current.init = {
        stage: stage,
        apps: [],
      };
      console.log("MEMO 2 ", contextExists, prifinaContext);
      return prifinaContext.current;
    }
  }, [prifinaContext]);
  return prifina;
};
*/
/* @component */
export default PrifinaContextProvider;
