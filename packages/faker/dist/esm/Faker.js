"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModuleName = exports.getInfo = exports.Helpers = exports.FakerObjects = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

//import { useHooks } from "@prifina/hooks";
var faker = require("faker");

var createCard = function createCard() {
  return faker.helpers.createCard();
};

var contextualCard = function contextualCard() {
  return faker.helpers.contextualCard();
};

var userCard = function userCard() {
  //const { currentUser } = usePrifina({});
  //console.log("GET USER CARD ", currentUser);
  return faker.helpers.userCard();
};

var createTransaction = function createTransaction() {
  return faker.helpers.createTransaction();
};

var fakerObject = function fakerObject(module) {
  var newObject = {};

  for (var method in module) {
    console.log("Method ", method, _typeof(method));

    if (typeof module[method] === "function") {
      //if (typeof newObject[method] === "undefined") newObject[method] = "";
      newObject[method] = module[method]();
    }
  }

  return newObject;
};

var getAddress = function getAddress() {
  return fakerObject(faker.address);
};

var getCommerce = function getCommerce() {
  return fakerObject(faker.commerce);
};

var getCompany = function getCompany() {
  return fakerObject(faker.company);
};

var getFinance = function getFinance() {
  return fakerObject(faker.finance);
};

var getName = function getName() {
  return fakerObject(faker.name);
};

var getVehicle = function getVehicle() {
  return fakerObject(faker.vehicle);
};

var getInfo = function getInfo() {
  //const hooks = useHooks();
  //console.log("GET INFO ", hooks);
  return ["createCard", "contextualCard", "userCard", "createTransaction", "getAddress", "getCommerce", "getCompany", "getFinance", "getName", "getVehicle"];
};

exports.getInfo = getInfo;

var getModuleName = function getModuleName() {
  return "Faker";
};

exports.getModuleName = getModuleName;
var FakerObjects = {
  getName: getName,
  getAddress: getAddress,
  getCommerce: getCommerce,
  getCompany: getCompany,
  getFinance: getFinance,
  getVehicle: getVehicle
};
exports.FakerObjects = FakerObjects;
var Helpers = {
  createCard: createCard,
  contextualCard: contextualCard,
  userCard: userCard,
  createTransaction: createTransaction
};
exports.Helpers = Helpers;