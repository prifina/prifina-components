"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoteComponent = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _remoteComponent = require("@paciolan/remote-component");

var _remoteComponentConfig = require("./remote-component.config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetcher = function fetcher(url) {
  return _axios["default"].get(url).then(function (request) {
    return request.data;
  });
};

var requires = (0, _remoteComponent.createRequires)(_remoteComponentConfig.resolve); //export const RemoteComponent = createRemoteComponent({ requires });

var RemoteComponent = (0, _remoteComponent.createRemoteComponent)({
  requires: requires,
  fetcher: fetcher
});
exports.RemoteComponent = RemoteComponent;