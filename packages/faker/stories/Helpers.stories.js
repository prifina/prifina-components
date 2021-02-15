import React from "react";
import { Helpers } from "../src/Faker";
import Faker from "../src";
import { PrifinaProvider, usePrifina } from "@prifina/hooks";
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
  const { currentUser, connector } = usePrifina({ connectors: [Faker] });
  console.log("Logged in user ", currentUser);
  const info = connector({ name: "Faker", function: "getInfo" });
  console.log(info);
  const userCard = connector({ name: "Faker", function: "userCard" });
  console.log(userCard);

  return (
    <div>
      <div>Hello, {currentUser.name}</div>
      <div>UserCard:{JSON.stringify(userCard)}</div>
    </div>
  );
};
helper5.story = {
  name: "Provider test",
  decorators: [
    (Story) => {
      return (
        <PrifinaProvider>
          <Story />
        </PrifinaProvider>
      );
    },
  ],
};
