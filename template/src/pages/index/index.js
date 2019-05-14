import $ from 'jquery';
import './index.less';

import Header from 'components/header';
import Footer from 'components/footer';

class Index {
  constructor() {
    this.init();
  }

  init() {}

  bindEvent() {
    $('.upload-btn').on('click', function () {
      console.log('fileId:', $(this).data('file-id'))
    });
  }
}

$(() => {
  new Index();
});
