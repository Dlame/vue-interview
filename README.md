# vue-interview
> 复习一些面试考点
> 搭一个简单的万能框架，方便于以后创立新项目

TODO

- [x] CDN引入vue,vuex,vue-router,dayjs
- [x] vuex和keepAlive结合
- [x] 路由切换动画
- [x] vuex模块化
- [x] 组件传值：props和$emit,$parent和$children,provide和inject

组件库

- [x] switch
- [x] button
- [ ] checkbox

## 一、基本框架搭建
### 1.1 CDN引入
在index.html中将要引入的包通过script标签引入
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <!-- local file -->
    <script src="https://cdn.bootcss.com/vue/2.6.11/vue.js"></script>
    <!-- <script src="https://cdn.bootcss.com/vue/2.6.11/vue.min.js"></script> -->
    <script src="https://cdn.bootcss.com/vuex/3.1.3/vuex.min.js"></script>
    <script src="https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js"></script>
    <script src="https://cdn.bootcss.com/dayjs/1.8.24/dayjs.min.js"></script>
  </body>
</html>

```
vue-cli3.0以上在vue.config.js中，函数式引入插件
```js
module.exports = {
    ...your config
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'dayjs': 'dayjs'
        }
    }
}
```
### 1.2 vuex和keepAlive结合
通过keepAlive的include的属性实现，将需要缓存的组件名存到vux中
> 要注意的是组件中的name和rouer.js里的name要一致

1. 首先在router加上meta，keepAlive（自己定义的）
```js
{
    path: "/",
    name: "Home",
    component: Home,
    meta: {
        title: "首页",
        keepAlive: true, // 是否缓存
    },
},
```

2. 通过路由监听将keepAlive为真的组件加入到vuex中
```js
router.beforeEach((to, from, next) => {
	// 判断meta 添加进vuex
	// 保持组件名和vue文件中name一致
	if (to.meta.keepAlive) {
		store.commit("keepAlive", to.name);
	}
})
```

3. 在router-view所在的文件里，通过读取vuex中的数据配置好keepAlive
```
<keep-alive :include="keepAliveComponents">
        <router-view class="router-view" />
</keep-alive>
```

### 1.3 路由切换动画


