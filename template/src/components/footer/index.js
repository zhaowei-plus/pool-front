import $ from 'jquery';
import './index.less';

class Footer {
  constructor(document) {
    this.document = document;

    this.init();
  }

  init() {
    this.$el = $(this.document).$('.footer-container');
  }

  bindEvent() {
    this.$el.find('span').text('Footer Container');
  }
}

$(() => {
  new Footer();
});
