"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMessage = exports.getInfo = void 0;

var getInfo = function getInfo() {
  return ["createMessage"];
};

exports.getInfo = getInfo;

var createMessage = function createMessage(stage, appID, uuid, variables) {
  console.log("CREATE TEST ", stage);
  console.log("CREATE TEST ", appID);
  console.log("CREATE TEST ", uuid);
  console.log("CREATE TEST ", variables);

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        createMessage: {}
      }
    });
  }
};

exports.createMessage = createMessage;