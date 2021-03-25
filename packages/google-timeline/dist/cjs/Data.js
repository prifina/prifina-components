"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryActivities = exports.getModuleName = exports.getSubscriptions = exports.getInfo = void 0;

var _activityMockup = _interopRequireDefault(require("./activityMockup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getInfo = function getInfo() {
  return ["queryActivities"];
};

exports.getInfo = getInfo;

var getSubscriptions = function getSubscriptions() {
  return [{
    subscription: "queryActivities",
    mockup: _activityMockup["default"]
  }];
};

exports.getSubscriptions = getSubscriptions;

var getModuleName = function getModuleName() {
  return "GoogleTimeline";
};

exports.getModuleName = getModuleName;

var queryActivities = function queryActivities(stage, appID, uuid, executionID, filter) {
  console.log("QUERY STAGE", stage);
  console.log("QUERY APP", appID);
  console.log("QUERY UUID", uuid);
  console.log("QUERY EX", executionID);
  console.log("QUERY FILTER", filter);

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getActivities: {
          id: executionID,
          status: "PENDING"
        }
      }
    });
  }
};

exports.queryActivities = queryActivities;