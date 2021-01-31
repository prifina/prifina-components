"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentTest = exports.ObjectTest = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ObjectTest = {
  test: "something"
};
exports.ObjectTest = ObjectTest;

var ComponentTest = function ComponentTest() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Testing React Component");
};

exports.ComponentTest = ComponentTest;
ComponentTest.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ComponentTest"
};