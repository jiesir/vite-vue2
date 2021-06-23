## 介绍

项目基于`vite2.0`,`vue2.0`,`vue-router3.0`,`vuex3.0`实现的 vue2 风格的手机端基础工程，单页面应用。


## 预安装

### 环境要求

- `Node.js`: - 版本最好大于 `12.0.0`
- `yarn` > `npm` > `cnpm`: - 包管理工具.


## 使用

### 开发环境

```bash
yarn dev
```

### 打包

```bash

yarn build
```

### 其他

```bash
yarn clean:cache # 删除缓存

yarn clean:lib # 删除node_modules，兼容window系统
```


## 项目结构

```
├── config (配置文件)
├── docs (项目文档)
├── mock (模拟数据)
├── plugins (插件)
├── public (存放公共文件)
│   └── favicon.ico
├── src
│   ├── assets (公共图片)
│   │   ├── logo.png
│   │   └── ...
│   ├── components (业务组件)
│   │   └── ...
│   ├── pages (业务模块)
│   │   ├── DM (业务模块1)
│   │   │   ├── DM0 (子模块1)
│   │   │   │   ├── DM0001 (子页面1)
│   │   │   │   │   ├── index.less (该页面样式)
│   │   │   │   │   └── index.vue (该页面实体)
│   │   │   │   ├── DM0002 (子页面2)
│   │   │   │   └── ...
│   │   │   ├── DM1 (子模块2)
│   │   │   ├── ...
│   │   │   └── page.json (该业务模块路由信息配置)
│   │   └── ...
│   ├── styles (公共样式文件)
│   │   ├── utils
│   │   └── index.less
│   ├── utils (工具文件)
│   │   ├── console
│   │   ├── loader
│   │   ├── router
│   │   ├── store
│   │   ├── bridge.js
│   │   ├── filter.js
│   │   ├── proxy.ts
│   │   ├── tools.js
│   │   └── validate.js
│   ├── App.vue (入口页面)
│   └── main.js (入口文件)
├── babel.config.js (按需加载vant组件库)
├── index.html
├── package.json
├── postcss.config.js
├── README.md
└── vite.config.ts

```



