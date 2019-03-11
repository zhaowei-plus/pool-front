
// ajax 原理：
/**
 * ajax的本质时使用XMLHttpRequest对象来请求数据
 * */
function ajax(url, fnSucc, fnFailed) {
  // 1、创建 ajax 对象
  if (window.XMLHttpRequest) {
    var oAjax = new XMLHttpRequest();
  } else {
    var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
  }

  // 2、连接服务器
  oAjax.open('GET', url, true);

  // 3、发送消息
  oAjax.send();

  // 4、接收信息
  oAjax.onreadystatechange = function() {
    if (oAjax.readyState == 4) {
      if (oAjax.status == 200) {
        fnSucc(oAjax.responseText);
      } else {
        if (fnFailed) {
          fnFailed();
        }
      }
    }
  }
}

/**
 * fetch 是全局window的一个方法
 * */

/**
 * fetch 与 ajax 异同：
 *  1、fetch 返回的 Promise 将不会拒绝 HTTP 错误状态， 即使响应是一个HTTP 404 或 500
 *  2、fetch 采用异步处理机制，使用起来更简单
 * */

const str = 'bookmark-item uuid-1547015694733 code-PP013jytest2018102901 false';
const code = 'PP013jytest2018102901';
const regStr = new RegExp(`.code-${code}`);

console.log(str.replace(regStr, ''));

const money = '0.03';
console.log(Number(money) > 0)

const bookmarkValueList = [
  {
    "type": 9,
    "code": "PP013nestTable",
    "nestValues": [
      {
        "type": 6,
        "code": "83009",
        "defaultValue": "张三1"
      }, {
        "type": 6,
        "code": "83005",
        "defaultValue": "李四1"
      }, {
        "type": 6,
        "code": "PP013jytest2018102901",
        "defaultValue": "王五1"
      }
    ]
  }, {
    "type": 9,
    "code": "PP013nestTable",
    "nestValues": [
      {
        "type": 6,
        "code": "83009",
        "defaultValue": "张三2"
      }, {
        "type": 6,
        "code": "83005",
        "defaultValue": "李四2"
      }, {
        "type": 6,
        "code": "PP013jytest2018102901",
        "defaultValue": "王五2"
      }
    ]
  }, {
    "type": 9,
    "code": "PP013nestTable",
    "nestValues": [
      {
        "type": 6,
        "code": "83009",
        "defaultValue": "张三3"
      }, {
        "type": 6,
        "code": "83005",
        "defaultValue": "李四3"
      }, {
        "type": 6,
        "code": "PP013jytest2018102901",
        "defaultValue": "王五3"
      }
    ]
  }, {
    "type": 9,
    "code": "PP013nestTable1",
    "nestValues": [
      {
        "type": 6,
        "code": "88009",
        "defaultValue": "张三01"
      }, {
        "type": 6,
        "code": "88010",
        "defaultValue": "李四01"
      }
    ]
  }, {
    "type": 9,
    "code": "PP013nestTable1",
    "nestValues": [
      {
        "type": 6,
        "code": "88009",
        "defaultValue": "张三02"
      }, {
        "type": 6,
        "code": "88010",
        "defaultValue": "李四02"
      }
    ]
  }
];

// 统计模板书签类型和复制次数
const templateBks = [];
bookmarkValueList.forEach(d => {
  const tempBk = templateBks.find((f) => f.code === d.code);
  if (tempBk) {
    tempBk.nestValues.push(d.nestValues);
  } else {
    templateBks.push({
      code: d.code,
      nestValues: [
        d.nestValues,
      ],
    });
  }
});

// console.log(JSON.stringify(templateBks, null, 2));
console.log('---------saga----------')
const funObj = {
  func1() {
    console.log('func1')
  },
  func2() {
    console.log('func2')
  },
  func3() {
    console.log('func3')
  },
}

for(let fun in funObj) {
  console.log('---:', fun);
  funObj[fun]();
}

const type = 'func1';
// typeof(funObj[type]) undefined function
console.log(typeof(funObj[type]));
