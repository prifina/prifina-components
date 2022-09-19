"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryActivities = exports.getModuleName = exports.getInfo = void 0;

var _activityMockup = _interopRequireDefault(require("./activityMockup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var s3Query = "query s3Object($input:S3ObjectInput!) {\n  getS3Object(input:$input) {\n    result\n  }\n}";

var getInfo = function getInfo() {
  return ["queryActivities"];
};

exports.getInfo = getInfo;

var getModuleName = function getModuleName() {
  return "SleepQuality";
};

exports.getModuleName = getModuleName;

var queryActivities = function queryActivities(stage, appID, name, createQuery, fields, filter, next) {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getS3Object: {
          content: _activityMockup["default"]
        }
      }
    });
  } else {
    return createQuery({
      query: s3Query,
      name: name,
      fields: fields,
      filter: filter,
      next: next
    });
  }
};

exports.queryActivities = queryActivities;