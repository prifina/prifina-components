"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoteComponent = void 0;

var _remoteComponent = require("@paciolan/remote-component");

var _remoteComponentConfig = require("./remote-component.config.js");

//import axios from "axios";
//const fetcher = (url) => axios.get(url).then((request) => request.data);
var requires = (0, _remoteComponent.createRequires)(_remoteComponentConfig.resolve);
var RemoteComponent = (0, _remoteComponent.createRemoteComponent)({
  requires: requires
}); //export const RemoteComponent = createRemoteComponent({ requires, fetcher });

exports.RemoteComponent = RemoteComponent;