"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ObjectTest = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import { default as BlendTest } from "./BlendTest";
var ObjectTest = {
  test: "something"
};
exports.ObjectTest = ObjectTest;

var ComponentTest = function ComponentTest() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Testing React Component test");
};

ComponentTest.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ComponentTest"
};
var _default = ComponentTest;
exports["default"] = _default;