import React, { createContext, useRef } from "react";

const PrifinaContext = createContext({});

export const Provider = ({ Context, children, ...props }) => {
  console.log("CTX ", Context);
  console.log("PROPS ", props);

  const providerContext = useRef(null);
  providerContext.current = {
    test: "OK",
  };
  if (props.stage === "dev") {
    console.log("DEV STAGE INIT FOR STORYBOOK");
    providerContext.current.init = { stage: "dev", apps: {} };
  }
  console.log("Prifina ", providerContext);
  if (!children) {
    return null;
  }
  return (
    <Context.Provider value={providerContext}>{children}</Context.Provider>
  );
};
