"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Es6Observe = function () {
  function Es6Observe() {
    _classCallCheck(this, Es6Observe);

    this.eventObjects = {}; // 保存事件对象
  }

  /**
   * 订阅事件
   * @param event
   * @param fn
   */


  _createClass(Es6Observe, [{
    key: "subscribe",
    value: function subscribe(event, fn) {
      if (!this.eventObjects[event]) {
        this.eventObjects[event] = [];
      }
      this.eventObjects[event].push(fn);
    }

    /**
     * 发布事件
     */

  }, {
    key: "publish",
    value: function publish() {
      var event = Array.prototype.shift.apply(arguments); // 获取到的第一个参数
      var fns = this.eventObjects[event]; //该订阅对象所有方法 array
      if (event) {
        fns.forEach(function (item) {
          return item();
        });
      }
    }

    /**
     * 取消订阅
     * @param event
     * @param fn
     */

  }, {
    key: "unSubscribe",
    value: function unSubscribe(event, fn) {
      var fns = this.eventObjects[event];
      if (fns) {
        this.eventObjects[event] = fns.filter(item !== fn);
      }
    }
  }]);

  return Es6Observe;
}();

exports.default = Es6Observe;