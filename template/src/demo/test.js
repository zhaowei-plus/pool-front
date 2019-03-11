var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;//手机号码
var isMob= /^0?1[3|4|5|8][0-9]\d{8}$/;// 座机格式
var isEmail = /^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$/;

var phone = '13289087654'
var mobile = '0719-22222222'
var email = '121qq.com'



console.log(isMob.test(phone), isMob.test(phone), isEmail.test(email))


const reducers = {
  reducer1() {
    console.log('reducer1')
  },
  reducer2() {
    console.log('reducer2')
  },
  reducer3() {
    console.log('reducer3')
  },
}

Object.keys(reducers).map((d) => eval(d)())