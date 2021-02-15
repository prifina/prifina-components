"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helpers = exports.FakerObjects = exports.getModuleName = exports.getInfo = void 0;

var _hooks = require("@prifina/hooks");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  var _usePrifina = (0, _hooks.usePrifina)({}),
      currentUser = _usePrifina.currentUser;

  console.log("GET INFO ", currentUser);
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