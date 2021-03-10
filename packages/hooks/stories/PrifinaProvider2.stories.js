import React, { useEffect } from "react";
import { useState } from "react";
import PrifinaProvider, { usePrifina } from "../src/PrifinaProvider";

export default { title: "ProviderTest QL Hooks" };

const appID = "TESTING";
export const providerTest = () => {
  const {
    currentUser,
    check,
    queries,
    subscriptions,
    onUpdate,
    subscriptionTest,
    unSubscribe,
  } = usePrifina({
    appID: appID,
  });

  const [updateData, setUpdate] = useState({});

  const updateTest = (data) => {
    console.log("UPDATE TEST ", data);
    setUpdate(data);
  };

  useEffect(() => {
    console.log("UPDATE INIT ");
    onUpdate(appID, updateTest);
  }, []);

  return (
    <>
      <div>
        Provider Testing{" "}
        <button
          onClick={() => {
            console.log(check());
            console.log(queries(appID, "getInfo"));
            console.log(
              queries(appID, "getTest").then((res) => console.log(res))
            );
          }}
        >
          Test
        </button>
        <button
          onClick={() => {
            console.log(subscriptions(appID, "getInfo"));
            // const subscriptionTest = useCallback((appID, mockupData) => {
            subscriptionTest(
              appID,
              {
                addTest: [{ test1: "OK" }, { test2: "OK" }, { test3: "OK" }],
              },
              3000
            );
            subscriptions(appID, "addTest");
            /*
          console.log(
            queries(appID, "getTest").then((res) => console.log(res))
          );
          */
          }}
        >
          Subscribe
        </button>
        <button
          onClick={() => {
            unSubscribe(appID, "addTest");
          }}
        >
          UnSubscribe
        </button>
      </div>
      <div>OnUpdate:{JSON.stringify(updateData)}</div>
    </>
  );
};

providerTest.story = {
  name: "Provider Test QL",
  decorators: [
    (Story) => {
      return (
        <PrifinaProvider stage={"dev"}>
          <Story />
        </PrifinaProvider>
      );
    },
  ],
};
