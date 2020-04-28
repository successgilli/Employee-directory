"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var route = (0, _express.Router)();
route.get('/', function (req, res) {
  res.send('employee get');
});
var _default = route;
exports["default"] = _default;