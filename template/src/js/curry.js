console.log('************************************** 柯里化（curry）原理与实践 ***************************************');
function square(i) {
  return i * i;
}
function dubble(i) {
  return i *= 2;
}
function map(helper, list) {
  return list.map(helper);
}
// 数组的每一项平方
console.log(map(square, [1, 2, 3, 4, 5]));

// 数组的每一项加倍
console.log(map(dubble, [1, 2, 3, 4, 5]));

function add(a, b) {
  return a + b;
}

var curry = function(func) {
  var args = [].slice.call(arguments,1);
  return function() {
    var newArgs = args.concat([].slice.call(arguments));
    // 这里null，表示调用全局定义的func
    return func.apply(this, args);
  };
}

var addCurry = curry(add,1,2);
console.log(addCurry()); //3

//或者
var addCurry = curry(add,1);
console.log(addCurry(2)); //3

//或者
var addCurry = curry(add);
console.log(addCurry(1, 2)) // 3

var curry = function(func, args) {
  var length = func.length;
  args = args||[];

  return function(){
    newArgs = args.concat([].slice.call(arguments));
    if(newArgs.length < length){
      return curry.call(this,func,newArgs);
    }else{
      return func.apply(this,newArgs);
    }
  }
}

function add(){
  var args = [].slice.call(arguments);
  var fn = function(){
    var newArgs = args.concat([].slice.call(arguments));
    return add.apply(null,newArgs);
  }
  fn.toString = function(){
    return args.reduce(function(a, b) {
      return a + b;
    })
  }
  return fn ;
}
// var addCurry = curry(add);
console.log(add(1)(2)(3)(4)(5).toString()) // 3

let a = new Array(10)
console.log(2 in a); // false


console.log('************************************** end ***************************************');