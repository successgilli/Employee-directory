"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = _interopRequireDefault(require("./users"));

var _employees = _interopRequireDefault(require("./employees"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var route = (0, _express.Router)();
route.use('/users', _users["default"]);
route.use('/employees', _employees["default"]);
var _default = route;
exports["default"] = _default;