import $ from 'jquery';
import './index.less';

class Header {
  constructor(document) {
    this.document = document;

    this.init();
  }

  init() {
    this.$el = $(this.document).$('.header-container');
  }

  bindEvent() {
    this.$el.find('span').text('Header Container');
  }
}

$(() => {
  new Header();
});
