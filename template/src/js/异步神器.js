/****************************************异步神器********************************************/
/**
 *
 * 异步实现方案：
 * Es5 回调
 *
 *
 * Es6 Promise
 *
 *
 * Es7 async await
 *
 *
 * */

/**
 * async 表示函数是异步的，定义的函数会返回一个 Promise 对象，可以调用then方法添加回调方法
 *
 * async 作为关键字放到函数前面，表示函数是一个异步函数，则意味着这个函数的执行不会阻塞后面代码的执行
 *
 * async-await 是 promise 和 generator 的语法糖
 * */
async function basicDemo() {

  /**
   * await - (async wait) await 必须出现在 async 函数内部，不能单独使用
   * 主要作用是用来等待返回 Promise 对象
   *
   * 如果 await 的是 Promise对象，则异步函数会停止执行，并且等待 Promise 对象的返回
   * */
  let result = await Math.random();
  console.log(result);

  /**
   * 如果 async 定义的函数有返回值，return 123; 相当于Promise.resolve(123)
   * 如果 async 定义的函数没有声明式的 return，则相当于执行了 Promise.resolve()
   * */
}

//  返回 Promise 对象
const promiseFunc = (second) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(' enough sleep~ ');
    }, second);
  });
}

// 返回非 Promise 对象
function normalFunc() {
  console.log(normalFunc);
}

async function awaitDemo() {
  await normalFunc();
  console.log('await normalFunc')

  const result = await promiseFunc(3000);
  console.log('await promiseFunc:', result)
}

awaitDemo();

console.log('********************************************异常：reject******************************************')

async function timeout(flag) {
  if (flag) {
    // 返回一个值，则 调用 Promise.resolve(返回值)，返回以 Promise对象
    return 'hello word';
  } else {
    // 抛出异常时，则 调用 Promise.reject() 返回 Promise 对象
    throw 'create a error';
  }
}
console.log(timeout(true))  // 调用Promise.resolve() 返回promise 对象。
console.log(timeout(false)); // 调用Promise.reject() 返回promise 对象。

timeout(true).then(res => {
  console.log('res:', res);
})
timeout(false).then(res => {
  console.log('res:', res);
}, err => {
  console.log('err:', err);
})

console.log('******************************************** await ******************************************')

function doSomething(flag) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        resolve('已解决');
      } else {
        reject('解决出错');
      }
    }, 3000);
  });
}

// await 等待异步方法返回一个 Promise对象，
async function waitDone(flag) {
  const result = await doSomething(flag);
  console.log('waitDone:', result);
  return result;
}

// console.log(waitDone(true));
waitDone(false)
.then(res => {
  console.log('res:', res);
}, err => {
  console.log('err:', err);
})