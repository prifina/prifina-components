import React, { createContext, useRef } from "react";

const PrifinaContext = createContext({});

export const Provider = ({ Context, children, ...props }) => {
  console.log("CTX ", Context);
  console.log("PROPS ", props);

  const providerContext = useRef(null);
  providerContext.current = {
    test: "OK",
  };
  return (
    <Context.Provider value={providerContext}>{children}</Context.Provider>
  );
};
