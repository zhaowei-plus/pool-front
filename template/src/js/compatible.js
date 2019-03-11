import $ from 'jquery';
import '../style/template.less';

class Compatible {
  constructor(){
    this.init();
    this.testAjax();
  }

  init() {
    $('#app').on('input', 'input[type="text"]', () => {
      console.log('input');
    });

    $('#app').on('propertychange', 'input[type="text"]', () => {
      console.log('input');
    });
    $('#addInput').on('click', () => {
      this.addInput();
    });
  }

  addInput() {
    $('#app').append('<input type="text" />');


  }

  testAjax() {
    $.ajax({
      url: 'https://cnodejs.org/api/v1/topics',
    }).done(function(){
      console.log('done');
    }).fail(function(){
      console.log('fail');
    }).always(function(){
      console.log('always');
    });
  }
}

$(() => {
  new Compatible();
});
// slice splice split