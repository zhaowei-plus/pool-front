// 非0开头，非负数，不能判断整数
function testMoney(money) {
  // 零和非零开头的整数
  return /(^[1-9][0-9]*?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/.test(money);
}

// 检测是非负整数，不能是小数
function testNumber(money) {
  const value = Number(money);
  return value >= 0 && Number.isInteger(value);
}

function testRange(minMoney, maxMoney) {
  return Number(minMoney) <= Number(maxMoney);
}

console.log('test:', testMoney('05')); // false
console.log('test:', testMoney('-1')); // false
console.log('test:', testMoney('-01')); // false

console.log('test:', testMoney('5')); // true
console.log('test:', testMoney('0')); // true
console.log('test:', testMoney('0.5')); // true
console.log('test:', testMoney('100.5')); // true

console.log(Number.isInteger('100.5')) // false
console.log(Number.isInteger('100')) // false
console.log(Number.isInteger(100.5)) // false
console.log(Number.isInteger(100)) // true

console.log(testNumber('100.5')) // false
console.log(testNumber('100')) // true

console.log(testRange('100.5', '101')) // true
console.log(testRange('102', '101')) // false