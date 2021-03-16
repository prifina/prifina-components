import React, { createContext, useContext, useMemo } from "react";

import { RemoteComponent } from "./RemoteComponent";

//const short = require("short-uuid");

export const PrifinaContext = createContext({});

const PrifinaContextProvider = ({ stage = "dev", children }) => {
  return (
    <RemoteComponent
      url={
        "https://raw.githubusercontent.com/prifina/prifina-components/main/packages/remote-hooks/dist/main.bundle.js"
      }
      Context={PrifinaContext}
      stage={stage}
    >
      {children}
    </RemoteComponent>
  );
};

/* Hook */
// ==============================
export const usePrifina = () => {
  const prifinaContext = useContext(PrifinaContext);
  const prifina = useMemo(() => {
    return prifinaContext.current;
  }, [prifinaContext]);
  return prifina;
};
/*
export const usePrifina = ({ Context, appID = "", connectors = [] }) => {
  let contextExists = false;
  if (typeof Context !== "undefined") {
    Context = createContext(Context);
    contextExists = true;
  }
  const prifinaContext = useContext(Context || PrifinaContext);
  const stage = "dev";
  //console.log("HOOK ", prifinaContext);
  //console.log("HOOK2 ", prifinaContext.current);

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
*/
/* @component */
export default PrifinaContextProvider;
