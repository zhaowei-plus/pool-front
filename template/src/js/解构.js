const obj = {
  name: null,
  data: null,
};
const { name = "你好" } = obj;
console.log(name);

let { data = "你好" } = obj;
data = data || '呵呵';
console.log(data);


// js Math.pow() 被限制使用
console.log(10 ** 4);

const array = [
  ,
  1,
  undefined,
  2,
  undefined,
  3
];

const targetArray = array.map(d => d);
console.log(targetArray);