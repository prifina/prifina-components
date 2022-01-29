"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _garminMockups = require("./garminMockups.js");

Object.keys(_garminMockups).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _garminMockups[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _garminMockups[key];
    }
  });
});