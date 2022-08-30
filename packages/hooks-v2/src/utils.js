import React from "react";


// JSON.stringify doesn't work with symbols... (connector filters)
export const stringify=(obj)=>{
  if (typeof obj !== "object" || obj === null || obj instanceof Array) {
    console.log("WRONG OBJ TYPE ", typeof obj);
    return value(obj);
  }

  const logicalOperators = Object.getOwnPropertySymbols(obj);
  const objKeys = Object.keys(obj);
  if (logicalOperators.length > 0) {
    return (
      "{" +
      logicalOperators
        .map(function (k) {
          if (typeof k === "symbol") {
            return '"' + k.toString() + '":' + value(obj[k]);
          } else {
            return null;
          }
        })
        .filter(function (i) {
          return i;
        }) +
      "}"
    );
  }

  if (objKeys.length > 0) {
    return (
      "{" +
      objKeys
        .map(function (k) {
          return typeof obj[k] === "function"
            ? null
            : '"' + k + '":' + value(obj[k]);
        })
        .filter(function (i) {
          return i;
        }) +
      "}"
    );
  }

  /*
  return '{' + Object.keys(obj).map(function (k) {
      return (typeof obj[k] === 'function') ? null : '"' + k + '":' + value(obj[k]);
  }).filter(function (i) { return i; }) + '}';
  */
}
const value=(val)=>{
  //console.log("VAL TYPE ",typeof val);
  switch (typeof val) {
    case "string":
      return '"' + val.replace(/\\/g, "\\\\").replace('"', '\\"') + '"';
    case "number":
    case "boolean":
      return "" + val;
    case "function":
      return "null";
    case "symbol":
      return val.toString();
    case "object":
      if (val instanceof Date) return '"' + val.toISOString() + '"';
      if (val instanceof Array) return "[" + val.map(value).join(",") + "]";
      if (val === null) return "null";
      return stringify(val);
  }
}
export const shortId=()=>{
   // this is unique enough...
   return Math.random().toString(36).slice(-10);
}


/*
  export const usePrifina = () => {
    const prifinaContext = useContext(PrifinaContext);
    const prifina = useMemo(() => {
      return prifinaContext.current;
    }, [prifinaContext]);
    
    return prifina;
  };


  useCallback((appID, index) => {
    console.log("APP ",appID,index);
    const currentCount=callbacks.current[appID].length;
    if (currentCount>1) {
      callbacks.current[appID].splice(index,1);
    } else {
      delete callbacks.current[appID];
    }
    return true;
  }, []);

  */