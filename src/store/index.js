import Vue from "vue";
import Vuex from "vuex";

import content from "./modules/content";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "初始化title",
    direction: "", // 路由前进方向
    keepAliveComponents: [], // 缓存的路由
  },
  mutations: {
    updateTiltle(state, title) {
      state.title = title;
    },
    updateDirection(state, direction) {
      state.direction = direction;
    },
    // 需要缓存
    keepAlive(state, component) {
      // 注：防止重复添加（当然也可以使用Set）
      !state.keepAliveComponents.includes(component) &&
        state.keepAliveComponents.push(component);
    },
    // 不需要缓存
    noKeepAlive(state, component) {
      const index = state.keepAliveComponents.indexOf(component);
      index !== -1 && state.keepAliveComponents.splice(index, 1);
    },
  },
  getters: {
    getTitle(state) {
      return state.title;
    },
    getDirection(state) {
      return state.direction;
    },
  },
  actions: {},
  modules: {
    content,
  },
});
