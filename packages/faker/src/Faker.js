import { useHooks } from "@prifina/hooks";
const faker = require("faker");

const createCard = () => {
  return faker.helpers.createCard();
};
const contextualCard = () => {
  return faker.helpers.contextualCard();
};
const userCard = () => {
  //const { currentUser } = usePrifina({});
  //console.log("GET USER CARD ", currentUser);
  return faker.helpers.userCard();
};
const createTransaction = () => {
  return faker.helpers.createTransaction();
};

const fakerObject = (module) => {
  let newObject = {};
  for (let method in module) {
    console.log("Method ", method, typeof method);
    if (typeof module[method] === "function") {
      //if (typeof newObject[method] === "undefined") newObject[method] = "";
      newObject[method] = module[method]();
    }
  }
  return newObject;
};
const getAddress = () => {
  return fakerObject(faker.address);
};

const getCommerce = () => {
  return fakerObject(faker.commerce);
};

const getCompany = () => {
  return fakerObject(faker.company);
};

const getFinance = () => {
  return fakerObject(faker.finance);
};

const getName = () => {
  return fakerObject(faker.name);
};

const getVehicle = () => {
  return fakerObject(faker.vehicle);
};
export const getInfo = () => {
  const hooks = useHooks();
  console.log("GET INFO ", hooks);
  return [
    "createCard",
    "contextualCard",
    "userCard",
    "createTransaction",
    "getAddress",
    "getCommerce",
    "getCompany",
    "getFinance",
    "getName",
    "getVehicle",
  ];
};

export const getModuleName = () => {
  return "Faker";
};

export const FakerObjects = {
  getName,
  getAddress,
  getCommerce,
  getCompany,
  getFinance,
  getVehicle,
};

export const Helpers = {
  createCard,
  contextualCard,
  userCard,
  createTransaction,
};
