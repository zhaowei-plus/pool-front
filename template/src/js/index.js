import $ from 'jquery';
import '../style/index.less';

import registerServiceWorker from './serviceWorker';

class Index {
  constructor() {
    this.init();
  }

  init() {
    $('.upload-btn').on('click', function () {
      console.log('fileId:', $(this).data('file-id'))
    });

    const params = {
      data: '你好',
    };

    const contractPaymentDTOList = [
      {paymentPeriods: 1, payRatio: "10", payAmount: 0, payPlan: "", payTime: ""},
      {paymentPeriods: 2, payRatio: "10", payAmount: 0, payPlan: "", payTime: ""},
      {paymentPeriods: 3, payRatio: "10", payAmount: 0, payPlan: "", payTime: ""},
      {paymentPeriods: 4, payRatio: "10", payAmount: 0, payPlan: "", payTime: ""},
      {paymentPeriods: 5, payRatio: "0", payAmount: 0, payPlan: "", payTime: ""},
      {paymentPeriods: 6, payRatio: "10", payAmount: 0, payPlan: "", payTime: ""},
      {paymentPeriods: 7, payRatio: "10", payAmount: 0, payPlan: "", payTime: ""},
      {paymentPeriods: 8, payRatio: "10", payAmount: 0, payPlan: "", payTime: ""},
      {paymentPeriods: 9, payRatio: "10", payAmount: 0, payPlan: "", payTime: ""},
      {paymentPeriods: 10, payRatio: "10", payAmount: 3, payPlan: "", payTime: ""}
    ];

    // 校验分期付款每项的比例和金额都不能为0
    let payRatioValid = contractPaymentDTOList.some(d =>Number(d.payRatio) === 0)
    let payAmountValid = contractPaymentDTOList.some(d =>Number(d.payAmount) === 0)
    console.log(payRatioValid, payAmountValid)


    // 使用 on 方法实现事件委托
    $('.box').on('click', '.btn', params, function (e) {
      console.log(params)
    });

    $('#testTran').on('click', () => {
      const value = $('#testInput').val()
      console.log("Result:", Number(value), Number(value) === 0);
    });





    // 根据事件解除绑定
    $('.box').off('click');
  }
}

$(() => {
  new Index();
});