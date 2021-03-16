import React from "react";
import { Helpers } from "../src/Faker";
import { PrifinaProvider, usePrifina } from "@prifina/hooks";
import Faker from "../src";

export default { title: "Helpers" };

export const helper = () => {
  // console.log(Helpers.createCard());
  return <div>{JSON.stringify(Helpers.createCard())}</div>;
};
helper.story = {
  name: "CreateCard",
};

export const helper2 = () => {
  return <div>{JSON.stringify(Helpers.contextualCard())}</div>;
};
helper2.story = {
  name: "ContextualCard",
};

export const helper3 = () => {
  return <div>{JSON.stringify(Helpers.userCard())}</div>;
};
helper3.story = {
  name: "UserCard",
};

export const helper4 = () => {
  return <div>{JSON.stringify(Helpers.createTransaction())}</div>;
};
helper4.story = {
  name: "CreateTransaction",
};

/*
  const info = connector({ name: "Faker", function: "getInfo" });
  console.log(info);
  const user = connector({ name: "Faker", function: "getName" });
  console.log(user);
  */
const appID = "testing";
export const helper5 = () => {
  const { currentUser, Prifina } = usePrifina();
  console.log("Logged in user ", currentUser);
  //console.log(Faker);
  const Test = new Prifina({ appId: appID, modules: { faker: Faker } });
  console.log(Test);
  return (
    <div>
      <div>Hello, {currentUser.name}</div>
    </div>
  );
};
helper5.story = {
  name: "Provider test",
  decorators: [
    (Story) => {
      console.log("PROVIDER ", PrifinaProvider);
      return (
        <PrifinaProvider stage={"dev"}>
          <Story />
        </PrifinaProvider>
      );
    },
  ],
};
