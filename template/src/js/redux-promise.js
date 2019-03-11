"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promiseMiddleware;

// 柯里化函数
function promiseMiddleware(store) {
  return function (next) {
    return function (action) {
      next(action)
    };
  };
}
// 三级 curry化 函数
const middleware = (store) => (next) => (action) => next(action);