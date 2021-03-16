import React from "react";
import { Helpers } from "../src/Faker";
import Faker from "../src";
import { usePrifina, PrifinaContext } from "@prifina/hooks";
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

export const helper5 = () => {
  const { currentUser } = usePrifina({ connectors: [Faker] });
  console.log("Logged in user ", currentUser);
  /*
  const info = connector({ name: "Faker", function: "getInfo" });
  console.log(info);
  const user = connector({ name: "Faker", function: "getName" });
  console.log(user);
  */

  return (
    <div>
      <div>Hello, {currentUser.name}</div>
      <div>UserCard:{JSON.stringify(user)}</div>
    </div>
  );
};
helper5.story = {
  name: "Provider test",
  decorators: [
    (Story) => {
      return (
        <PrifinaProvider stage={"dev"} Context={PrifinaContext}>
          <Story />
        </PrifinaProvider>
      );
    },
  ],
};
