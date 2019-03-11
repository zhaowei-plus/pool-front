console.log("***************************************** Generator + yield *****************************************");

function* generatorFun(params) {
  console.log('params:', params);
  yield asyncFunc
  let data = yield params
  console.log('data:', data)
  yield data;
  return data;
}

const asyncFunc = () => {
  setTimeout(() => {
    console.log('async request')
    return 'async request over'
  }, 3000);
}

// generator还有另一个巨大的好处，就是把异步回调代码变成“同步”代码
let generator = generatorFun('李四') // 这里知识创建一个Generator对象，还没有执行 - 无打印数据
console.log('generator:', generatorFun('李四')); // generator: Object [Generator] {}

console.log('next:', generator.next()); // next: { value: '李四', done: false }
console.log('next:', generator.next('张三')); // data: undefined next: { value: undefined, done: false }

console.log('next:', generator.next()); // data: undefined next: { value: undefined, done: false }

// let data = g.next()
// console.log(g.next()) // { value: { name: 10, say: 'Hello' }, done: false }
// console.log(g.next(1000)) // { value: { name: 10, say: 'Hello' }, done: false }

console.log("***************************************** end *****************************************");


console.log("***************************************** JS  Getter Setter *****************************************");

const user = {
  firstName: '张',
  lastName: '三',

  // fullName 是一个虚拟字段
  get fullName() {
    return this.firstName + this.lastName
  },

  // 在保存之前校验值
  set age(value) {
    if (isNaN())
      throw new Error('年龄必须是一个数字')

    this._age = value
  },

  get age() {
    return this._age
  }
}
// 获取虚拟字段
console.log(user.fullName)

console.log("***************************************** end *****************************************");


