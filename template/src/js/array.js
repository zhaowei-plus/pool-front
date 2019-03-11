console.log('************************************** reduce start ***************************************');
const reduceArray = [1, 2, 3, 4, 5, 6];
/**
 * reduce 配置初始值，则num数组第一个元素开始，
 *        没有配置初始值，则total为数组第一个元素，num从第二个开始遍历
 *
 * 应用场景：
 * 1、累加器
 * 2、reduce() 作为一个高阶函数，用于函数的compose（redux中的使用），即一个函数的执行结果是另外一个函数的参数
 * */
const total = reduceArray.reduce((total, num) => {
  console.log(num); // 1, 2, 3, 4, 5, 6
  return total + num;
}, 0);
console.log(total)

const add1 = (num) => {
  console.log('add1:', num);
  return num;
}
const add2 = (num) => {
  console.log('add2:', num);
  return num;
}
const add3 = (num) => {
  console.log('add3:', num);
  return num;
}

const funcs = [add1, add2, add3];

// 遍历函数数组
const add = funcs.reduce(function(a, b) {
  // 返回一个函数
  return function(...args) {
    // 从右到左依次调用函数
    return a(b(...args));
  }
});
add(3);
const result = () => { add1(add2(add3())) };
result();

const compose = (...funs) => {
  if (funs.length === 0) {
    return args => args;
  }
  if (funs.length === 1) {
    return funs[0];
  }
  return funs.reduce((a, b) => (...args) => a(b(...args))); // 从右到左实现
  return funs.reduce((a, b) => (...args) => b(a(...args))); // 从左到右实现
}
const composeAdd = compose(add1, add2, add3);
console.log(composeAdd(3, 3));

// componse函数，返回函数集functions组合后的复合函数，也就是一个函数执行完毕之后，把返回的结果在作为参数复制给下一个函数执行
console.log('************************************** reduce end ***************************************');

console.log('************************************** 数组 ***************************************');

console.log('************** 检测是否是数组 **************')
const dataArray = new Array(4).fill('Test');
console.log('dataArray:', dataArray);

console.log(Array.isArray(dataArray)); // true
console.log(dataArray.constructor === Array); // true
console.log(dataArray instanceof Array); // true
console.log(Object.getPrototypeOf(dataArray) === Array.prototype) //true
console.log(Array.prototype.isPrototypeOf(dataArray)) // true

console.log('************** 扁平化 **************')
var dataArray2 = [
  [1, 3, 2, 1],
  [5, 3, 4, 8, 5, 6, 5],
  [6, 2, 8, 9,
    [4, 11, 15, 8, 9, 12]
  ], 16];

/**
 * 1、扁平化方法一（toString）
 *  转换之后，每项都是字符串，注意：如果有空数组，则不能用此方法
 * */
console.log(dataArray2.toString().split(','));
/**
 * 2、扁平化方法三(reduce)
 *  数组层次比较深时，扁平化处理速度太慢
 * */
const flatten = (array) => {
  return array.reduce((a, b) => [].concat(Array.isArray(a) ? flatten(a) : a, Array.isArray(b) ? flatten(b) : b), []);
}
console.log('flatten:', flatten(dataArray2));

console.log('************** 数组去重 **************')
const dataArray3  = [1, 3, 2, 1, 5, 3, 4, 8, 5, 6, 5, 6, 2, 8, 9, 4, 11, 15, 8, 9, 12, 12, 13, 10, 14, 16]

/**
 * 1、利用Set去重
 * */
const unique1 = Array.from(new Set(dataArray3)); // 格式化成数组
console.log('Set Array:', unique1);
/**
 * 2、利用reduce去重
 * */
const unique2 = dataArray3.reduce((a, b) => {
  if (a.indexOf(b) === -1) {
    a.push(b);
  }
  return a;
}, [])
console.log('Reduce Array:', unique2);
/**
 * 3、利用filter，indexof去重
 * */
const unique3 = dataArray3.filter((d, i, array) =>
  array.indexOf(d) === i
);
console.log('filter Array:', unique3)

console.log('************** 数组排序 **************')
const dataArray4  = [1, 3, 2, 1, 5, 3, 4, 8, 5, 6, 5, 6, 2, 8, 9, 4, 11, 15, 8, 9, 12, 12, 13, 10, 14, 16]
const sort1 = dataArray4.sort((a, b) => a - b)
// 其他略....

console.log('************************************** array end ***************************************');

console.log('************************************** new和instanceof 内部机制 ***************************************');
/**
 * new
 * 1、创建一个新对象、同时集成对象类的原型，即Person.prototype
 * 2、执行对象类的构造函数，同时该实例的属性和方法被this所引用，即this指向新构造的实例
 * 3、如果构造函数return一个新的"对象"，那么这个对象就会取代整个new出来的结果，
 *    如果构造函数没有return对象，那么就会返回新创建的对象
 * */

// new  代码实现
// 实例： let p = new Person(); - 这里调用里立即执行函数
// let p = (function(){
//   let obj = {};
//   obj.__proto__ = Person.prototype;
//
//   // ... 其他赋值语句
//
//   return obj;
// })()


// instanceof 代码实现
// p instanceof Person
const instanceofDemo = () => {
  while(x.__proto__ !== null) {
    if (x.__proto__ === Person.prototype) {
      return true;
      break;
    }
    x.__proto__ = x.__proto__.__proto__;
  }
  if (x.__proto__ === null) {
    return false;
  }
}

/**
 * 补充：
 *  1、每个示例对象都有__proto__属性，函数还有 prototype 属性
 *  2、
 * */
console.log('************************************** end ***************************************');

console.log('********************************* 利用es6 数据结构数组去重 ***************************************');
const testArray = [1, 2, 3, 3, 4, 3, 2, 1];
const resultAry = [...new Set(testArray)];
console.log(resultAry);

console.log('************************************** end ***************************************');


