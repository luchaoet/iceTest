/**
 * 根据域名判断并返回四套环境的方法
 */
export const env = () => {
  if (/\d+\.\d+\.\d+|localhost/.test(location.host)) {
    return "local";
  } else if (/daily\.taobao\.net/.test(location.host)) {
    return "daily";
  } else if (/pre[\.-](\w+)\.taobao\.com/.test(location.host)) {
    return "prepub";
  } else {
    return "production";
  }
};

/**
 * 获取URL中的参数
 */
export const getUrlParam = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r !== null) return r[2];
  return null;
};

export const ajax = (obj) => {
  var url = obj.url,
    data = obj.data,
    type = obj.type || "GET",
    async = obj.async || true,
    dataType = obj.dataType || "json",
    success = obj.success,
    error = obj.error;
  if (!url) return console.error("url不可为空");

  // 处理data
  if (data) {
    if (typeof data === "object") {
      var tempData = [];
      for (var sAttr in data) {
        tempData.push(
          encodeURIComponent(sAttr) + "=" + encodeURIComponent(data[sAttr])
        );
      }
      data = tempData.join("&");
    }
    // get请求拼接url
    if (type.toUpperCase() === "GET") {
      if (url.indexOf("?") === -1) {
        url += "?" + data;
      } else {
        url += "&" + data;
      }
    }
  }

  // 第一步 创建xhr对象
  if (window.ActiveXObject) {
    // IE
    var oXhr = new ActiveXObject("Microsoft.XMLHTTP");
  } else {
    // 其他
    var oXhr = new XMLHttpRequest();
  }

  // 第二步 创建请求
  oXhr.open(type, url, async);
  // 为post设置请求头信息
  if (type.toUpperCase() === "POST") {
    oXhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  }

  // 第三步 发送请求
  if (type.toUpperCase() === "POST") {
    oXhr.send(data);
  } else {
    oXhr.send();
  }

  // 第四步 等待接收数据
  oXhr.onreadystatechange = function () {
    // success回调
    if (oXhr.readyState === 4 && oXhr.status === 200) {
      if (success && typeof success === "function") {
        if (dataType) {
          switch (dataType) {
            case "xml":
              return success(oXhr.responseXML);
            case "json":
              return success(JSON.parse(oXhr.responseText));
            default:
              return success(oXhr.responseText);
          }
        } else {
          success(oXhr.responseText);
        }
      }
    }
    // error回调
    if (oXhr.readyState === 4 && oXhr.status !== 200) {
      if (error && typeof error === "function") error(oXhr);
    }
  };
};

// ajax({
//   url: 'https://luchaoet.com/express/article/list',
//   data: {
//       currentPage:1,
//       pageSize: 10
//   },
//   dataType: 'json',
//   success:(res) => {
//       console.log(res)
//   },
//   error:(err) => {
//       console.log(1,err)
//   }
// })

export const uuid = () => {
  let d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); // use high-precision timer if available
  }
  const _uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return _uuid;
};
