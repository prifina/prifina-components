"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _activityMockup = require("./activityMockup.js");

Object.keys(_activityMockup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _activityMockup[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _activityMockup[key];
    }
  });
});