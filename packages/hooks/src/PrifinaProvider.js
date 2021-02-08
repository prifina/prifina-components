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

export const PrifinaContext = createContext({});

const PrifinaContextProvider = (props) => {
  const providerContext = useRef(null);

  const check = useCallback(() => {
    console.log("Prifina current", providerContext.current);
    return { check: "OK" };
  }, []);

  providerContext.current = {
    check,
    currentUser: { name: "Tero" },
  };
  console.log("Prifina ", providerContext);
  return <PrifinaContext.Provider value={providerContext} {...props} />;
};

/* Hook */
// ==============================
export const usePrifina = ({ stage = "dev", appID = "" }) => {
  const prifinaContext = useContext(PrifinaContext);

  const prifina = useMemo(() => {
    /*
    if (theme === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
      }
      */
    prifinaContext.current.init = { stage: stage, app: appID };
    return prifinaContext.current;
  }, [prifinaContext]);
  return prifina;
};

/* @component */
export default PrifinaContextProvider;
