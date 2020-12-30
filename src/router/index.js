import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Watchandcomputed from "../views/watchandcomputed.vue";
import Parent from "../views/parent.vue";
import Video from "../views/video.vue";
import Vuex from "../views/vuex.vue";

import store from "../store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "首页"
        }
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue")
    },
    {
        path: "/watchandcomputed",
        name: "Watchandcomputed",
        component: Watchandcomputed,
        meta: {
            title: "watch和compouted",
            keepAlive: true // 是否缓存
        }
    },
    {
        path: "/parent",
        name: "Parent",
        component: Parent
    },
    {
        path: "/vuex",
        name: "Vuex",
        component: Vuex
    },
    {
        path: "/video",
        name: "Video",
        component: Video,
        meta: {
            title: "视频"
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

// 页面过渡动画
let storage = window.sessionStorage;
storage.clear();

let historyCount = storage.getItem("count") || 0;
storage.setItem("/", "0");

router.beforeEach((to, from, next) => {
    let toIndex = storage.getItem(to.fullPath);
    let fromIndex = storage.getItem(from.fullPath);

    // 判断meta 添加进vuex
    // 保持组件名和vue文件中name一致
    if (to.meta.keepAlive) {
        store.commit("keepAlive", to.name);
    }

    if (toIndex) {
        if (fromIndex === null) {
            // 入口页不过渡
            store.commit("updateDirection", "");
        } else if (Number(toIndex) < Number(fromIndex)) {
            store.commit("updateDirection", "out");
        } else {
            store.commit("updateDirection", "in");
        }
    } else {
        historyCount = Number(historyCount) + 1;
        storage.setItem("count", String(historyCount));
        to.fullPath !== "/" && storage.setItem(to.fullPath, String(historyCount));

        if (from.name === null) {
            // 入口页不过渡
            store.commit("updateDirection", "");
        } else {
            store.commit("updateDirection", "in");
        }
    }
    next();
});

router.afterEach(to => {
    to.meta.title && (document.title = to.meta.title);
});

export default router;
