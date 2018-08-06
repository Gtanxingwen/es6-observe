'use strict';

var _observe = require('./observe.js');

var _observe2 = _interopRequireDefault(_observe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var observeInst = new _observe2.default();

// 订阅test
observeInst.subscribe('test', function () {
  console.log('test Event has subscribe!!!!!!!');
});

//异步发布test
setTimeout(function (_) {
  observeInst.publish('test');
}, 4000);