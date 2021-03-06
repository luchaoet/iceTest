// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideFooterLayout from './layouts/HeaderAsideFooterLayout';
import Home from './pages/Home';
import Flex from './pages/Flex';
import NotFound from './pages/NotFound';
import About from './pages/About'
import Mine from './pages/Mine'

const routerConfig = [
  {
    path: '/',
    // layout: HeaderAsideFooterLayout,
    component: Home,
  },
  {
    path: '/flex',
    // layout: HeaderAsideFooterLayout,
    component: Flex,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/mine',
    component: Mine,
  },
  {
    path: '*',
    layout: HeaderAsideFooterLayout,
    component: Flex,
  },
];

export default routerConfig;
