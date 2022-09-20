---
title: index
date: 2022-09-14 18:41:52
permalink: /pages/4ac09a/
categories:
  - guide
tags:
  - 
---
# 我是指南

### 目录结构
```md
.
├─docs
|  ├─index.md
|  ├─reference
|  |     └index.md
|  ├─plan
|  |  └index.md
|  ├─guide
|  |   ├─demo.vue
|  |   └index.md
|  ├─businessComponents // 业务组件文档存放目录
|  |         └index.md
|  ├─baseComponents // 基础组件文档存放目录
|  |       ├─customImg.md
|  |       ├─index.md
|  |       └masterVideo.md
|  ├─.vuepress
|  |     ├─config.js
|  |     ├─enhanceApp.js
|  |     ├─styles
|  |     |   └palette.styl
|  |     ├─public
|  |     |   ├─images
|  |     |   |   ├─watrix.ico
|  |     |   |   ├─watrix.png
|  |     |   |   ├─svg
|  |     |   |   |  ├─code-hide.svg
|  |     |   |   |  └code-show.svg
|  |     ├─plugins
|  |     |    └docsLoader.js
|  |     ├─configs
|  |     |    ├─head.js
|  |     |    ├─index.js
|  |     |    ├─sidebar
|  |     |    |    ├─index.js
|  |     |    |    └zh.js
|  |     |    ├─navbar
|  |     |    |   ├─index.js
|  |     |    |   └zh.js
|  |     ├─components
|  |     |     ├─register.js
|  |     |     ├─DemoBox
|  |     |     |    └index.vue
|  |     |     ├─CodeBox
|  |     |     |    └index.vue
├─components  // 存放组件目录
|     ├─global.js // 注册组件
|     ├─MasterVideo // 组件
|     |      ├─register.js  // 当前组件暴露出哪些组件
|     |      ├─tests  // 组件测试文件
|     |      |   └readme.md
|     |      ├─src  // 组件源码
|     |      |  └index.vue
|     |      ├─demos  // 组件demo
|     |      |   └MasterVideoDemo.vue
|     ├─CustomImg
|     |     ├─register.js
|     |     ├─tests
|     |     |   └readme.md
|     |     ├─src
|     |     |  └index.vue
|     |     ├─demos
|     |     |   └baseDemo.vue
├─.vscode
|    ├─launch.json
|    └settings.json
```

### 提示及警告
::: tip
我是提示
:::

::: warning
我是注意
:::

::: danger 
我是警告
:::

::: details
我是详情
:::

### 代码块

<code-group>
  <code-block title="YARN" active>
  ```bash
  yarn install
  ```
  </code-block>

  <code-block title="CNPM">
  ```bash
  cnpm install
  ```
  </code-block>
</code-group>

### 代码块行高亮

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

### 从文件中读取代码
@[code](./demo.vue)
