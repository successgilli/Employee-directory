"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = require("dotenv");

var _debug = _interopRequireDefault(require("debug"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();
console.log(process.env.NODE_ENV, ' jj');
var debugInstance = (0, _debug["default"])('http');
var app = (0, _express["default"])();
debugInstance('booting', app);
app.use('/api/v1', _routes["default"]);
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  debugInstance("listening on port ".concat(PORT));
});