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

  const setSettings = useCallback((settings = {}) => {
    //console.log(providerContext.current.init.app);
    localStorage.setItem(
      "PrifinaAppSettings-" + providerContext.current.init.app,
      JSON.stringify(settings)
    );
    return true;
  }, []);
  const getSettings = useCallback(() => {
    //console.log(providerContext.current.init.app);
    let appSettings = JSON.parse(
      localStorage.getItem(
        "PrifinaAppSettings-" + providerContext.current.init.app
      )
    );
    if (appSettings === null) {
      appSettings = {};
    }
    return appSettings;
  }, []);

  const getLocalization = useCallback(() => {
    let appLocalization = JSON.parse(
      localStorage.getItem(
        "PrifinaAppLocalization-" + providerContext.current.init.app
      )
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
    check,
    connector,
    setSettings,
    getSettings,
    getLocalization,
    currentUser,
  };
  console.log("Prifina ", providerContext);
  return <PrifinaContext.Provider value={providerContext} {...props} />;
};

/* Hook */
// ==============================
export const usePrifina = ({ appID = "", connectors = [] }) => {
  const prifinaContext = useContext(PrifinaContext);
  //console.log(window.location.hostname);
  const stage = "dev";

  if (appID === "" && stage === "dev") {
    appID = short.generate();
  }
  const prifina = useMemo(() => {
    prifinaContext.current.init = {
      stage: stage,
      app: appID,
      connectors: connectors,
    };
    return prifinaContext.current;
  }, [prifinaContext]);
  return prifina;
};

/* Hook */
// ==============================
export const useHooks = () => {
  const prifinaContext = useContext(PrifinaContext);

  const prifina = useMemo(() => {
    return prifinaContext.current;
  }, [prifinaContext]);
  return prifina;
};

/* @component */
export default PrifinaContextProvider;
