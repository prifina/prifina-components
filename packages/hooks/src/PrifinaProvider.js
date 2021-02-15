import React, {
  /* useState, 
  useEffect,
  */
  useCallback,
  createContext,
  useContext,
  useRef,
  useMemo,
} from "react";

const connectorOpts = ["name", "function"];
export const PrifinaContext = createContext({});

const PrifinaContextProvider = (props) => {
  const providerContext = useRef(null);

  const check = useCallback(() => {
    console.log("Prifina current", providerContext.current);
    return { check: "OK" };
  }, []);

  const connector = useCallback((opts) => {
    //console.log("Prifina current", providerContext.current.init.connectors);
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

  providerContext.current = {
    check,
    connector,
    currentUser: { name: "Tero" },
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

/* @component */
export default PrifinaContextProvider;
