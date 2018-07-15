/**
 * 根据域名判断并返回四套环境的方法
 */
export const env = () => {
    if (/\d+\.\d+\.\d+|localhost/.test(location.host)) {
      return 'local';
    } else if (/daily\.taobao\.net/.test(location.host)) {
      return 'daily';
    } else if (/pre[\.-](\w+)\.taobao\.com/.test(location.host)) {
      return 'prepub';
    } else {
      return 'production';
    }
  };
  
  /**
   * 获取URL中的参数
   */
  export const getUrlParam = (name) => {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    const r = window.location.search.substr(1).match(reg);
    if (r !== null)return r[2];
    return null;
  }