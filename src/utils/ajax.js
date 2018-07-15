
import ajax from '@ali/ice-ajax';
import { Feedback } from '@alife/next';
import { browserHistory } from 'dva/router';
const Toast = Feedback.toast;

import { getUrlParam } from '@/utils/tools';
const loginToken = getUrlParam('loginToken') || 'f09518b595f9fbbe07cda5366667c4a4';

export function createService({ url, data = {}, method = 'get'}) {
  const opts = {
    url,
    data:{
      ...data,
      loginToken
    },
    headers: {
      "x-csrf-token": 'e573f9e079d1e'
    },
    dataType: 'json',
    type: method
  };
  
  return ajax(opts).then(res => {
    const code = res.code;
    if(code === 0) {
      // 成功不做处理
    }else{
      // 错误暂时不透露后台提示信息
      // Toast.error(res.msg);
    }
    return res;
  }).catch(() => {
    Toast.error('网络请求失败，稍后重试～');
  });
}
