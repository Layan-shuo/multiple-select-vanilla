/**
 * Multiple Select zh-TW translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import Constants from '../constants';

const locales = {
  ['zh-TW']: {
    formatSelectAll() {
      return '[全選]';
    },
    formatAllSelected() {
      return '已選擇所有記錄';
    },
    formatCountSelected(count: number, total: number) {
      return '已從' + total + '條記錄中選擇' + count + '條';
    },
    formatNoMatchesFound() {
      return '沒有找到記錄';
    },
  },
};

export default Object.assign(Constants.LOCALES, locales);
