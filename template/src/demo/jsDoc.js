/**
 * 获取url参数的方法
 * @param qs
 * @returns {{}}
 */
export function getQueryParams(qs) {
  const params = {};
  const re = /[?&]?([^=]+)=([^&]*)/g;
  let tokens;
  if (qs) {
    qs = qs.split('+').join(' ');

    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
  }
  return params;
}

/**
 * 将数字格式化为金额格式
 *
 * @param { String } s 要格式化的数字
 * @param { Number } n 保留小数的位数
 *
 * @return { String } 格式化后的金额字符串
 * */
function fmoney(s, n) {
  n = n > 0 && n <= 20 ? n : 2;
  /* eslint-disable no-useless-escape */
  s = `${parseFloat((`${s}`).replace(/[^\d\.-]/g, '')).toFixed(n)}`;
  const l = s.split('.')[0].split('').reverse();
  const r = s.split('.')[1];
  let t = '';
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '');
  }
  return `${t.split('').reverse().join('')}.${r}`;
}
/**
 * 格式化金额
 * 注：金额精确到分，这里需要除以100
 * */
export function formatMoney(num) {
  if (!num && num !== 0) {
    return '-';
  }
  if (isNaN(num)) {
    return '-';
  }
  return fmoney(num / 100, 2);
}

export function formatOutputString(str) {
  if (!str) {
    return '-';
  }
  return str;
}

export function formatOutputNumber(num) {
  if (!num && num !== 0) {
    return '-';
  }
  return num;
}

/**
 * HelloWorld类存储一位客人的名字，并打招呼
 * */
class HelloWorld {
  constructor() {
    this.name = "xxx";
    this.desc = "I am xxx";
  }

  /**
   * 设置客户的名字
   *
   * @param { String } name 名字
   * */
  setName(name) {
    this.name = name;
  }

  /**
   * 获取客户的名字
   *
   * @return { String } 客人的名字
   * */
  getName() {
    return this.name;
  }

  /**
   * 向客人打招呼
   * */
  sayHello() {
    console.log('Hello, ' + this.getName())
  }
}
