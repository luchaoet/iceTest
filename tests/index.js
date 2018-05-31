// test file
//获取URL地址的参数值。
//name为URL参数名
//例如：?param1=abc&param2=123
//当调用GetURLparam("param2"）时，获取到的值为：123
export const getUrlParam = (name) => {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    const r = window.location.search.substr(1).match(reg);
    if (r !== null)return r[2];
    return null;
  };