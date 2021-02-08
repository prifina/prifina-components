"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@blend-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BlendTest = function BlendTest() {
  return /*#__PURE__*/_react["default"].createElement(_core.ThemeProvider, {
    theme: _core.theme
  }, /*#__PURE__*/_react["default"].createElement(_core.Text, null, "This is Blend Text Component"));
};

BlendTest.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BlendTest"
};
var _default = BlendTest;
exports["default"] = _default;