"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _activitySummary = require("./mockups/activitySummary.js");

Object.keys(_activitySummary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _activitySummary[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _activitySummary[key];
    }
  });
});

var _readinessSummary = require("./mockups/readinessSummary.js");

Object.keys(_readinessSummary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _readinessSummary[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _readinessSummary[key];
    }
  });
});

var _sleepSummary = require("./mockups/sleepSummary.js");

Object.keys(_sleepSummary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sleepSummary[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sleepSummary[key];
    }
  });
});