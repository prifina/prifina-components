"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActivitiesData = require("./ActivitiesData");

Object.keys(_ActivitiesData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ActivitiesData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ActivitiesData[key];
    }
  });
});

var _ActivitiesSummary = require("./ActivitiesSummary");

Object.keys(_ActivitiesSummary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ActivitiesSummary[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ActivitiesSummary[key];
    }
  });
});

var _HeartRateData = require("./HeartRateData");

Object.keys(_HeartRateData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _HeartRateData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _HeartRateData[key];
    }
  });
});

var _HeartRateSummary = require("./HeartRateSummary");

Object.keys(_HeartRateSummary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _HeartRateSummary[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _HeartRateSummary[key];
    }
  });
});

var _SleepData = require("./SleepData");

Object.keys(_SleepData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SleepData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SleepData[key];
    }
  });
});

var _SleepSummary = require("./SleepSummary");

Object.keys(_SleepSummary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SleepSummary[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SleepSummary[key];
    }
  });
});

var _SleepQuality = require("./SleepQuality");

Object.keys(_SleepQuality).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SleepQuality[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SleepQuality[key];
    }
  });
});