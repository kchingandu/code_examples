/**
 * FOR DOCUMENTATION REFER TO TableDataServiceSpec.js
 */
define(['jquery'], function ($) {
  'use strict';

  function TableDataService(path, successCallBack, failCallBack) {

    this.path            = path;
    this.failCallBack    = ensureCallBackMethodExists(failCallBack, 'fail');
    this.successCallBack = ensureCallBackMethodExists(successCallBack, 'success');
  }

  TableDataService.prototype.loadData = function () {

    $.ajax({
      async  : false,
      url    : this.path,
      /*contentType: 'json',*/
      fail   : this.failCallBack,
      success: this.successCallBack
    });
  };

  function ensureCallBackMethodExists(callBack, callBackName) {

    if (callBack) {
      return callBack;
    } else {
      throw new Error('TableDataService :: ' + callBackName + 'not set');
    }
  };

  return TableDataService;
});