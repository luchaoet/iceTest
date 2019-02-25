# ice-scaffold-lite

> 使用文档

使用:

* 启动调试服务: `npm start`
* 构建 dist: `npm run build`

目录结构:

* react-router @4.x 默认采用 hashHistory 的单页应用
* 入口文件: `src/index.js`
* 导航配置: `src/menuConfig.js`
* 路由配置: `src/routerConfig.js`
* 路由入口: `src/router.jsx`
* 布局文件: `src/layouts`
* 通用组件: `src/components`
* 页面文件: `src/pages`

> git log 记录

* 2018-08-01 00:15:54 添加log.js,代码上传时自动保存log记录至README.md文件
* 2018-08-03 01:51:30 修改http.js

引入 react-monaco-editor编辑器

高亮设置

node_modules -> ice-scripts -> lib -> dev.js

```javascript
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = async function (args, subprocess) {
    ...
    webpackConfig.plugins.push(
        new MonacoWebpackPlugin({
        languages: ['json', 'javascript', 'typescript', 'python']
        })
    );
    ...
})
```

