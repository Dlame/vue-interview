<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <transition :name="transitionClass">
      <keep-alive :include="keepAliveComponents">
        <router-view class="router-view" />
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["keepAliveComponents"]),
    ...mapGetters({
      direction: "getDirection"
    }),
    transitionClass() {
      return `slide-${this.direction}`;
    }
  },
  mounted() {
    this.$root.eventHub.$emit("getbyEventhub", "通过$emit $on 传递数据");
  }
};
</script>

<style lang="less">
* {
  content: normal !important;
}
html,
body {
  width: 100%;
  height: 100%;
}
html,
body,
p,
h1,
h2,
h3,
h4,
h5 {
  padding: 0;
  margin: 0;
}
.app {
  font-family: "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑, STHeiti", "WenQuanYi Micro Hei", "SimSun",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-user-select: none; /*-webkit-user-select:none;*/
  -ms-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  height: 100%;
}
.router-view {
  // position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  // z-index: 1;
  // overflow-x: hidden;
  // -webkit-overflow-scrolling: touch;
  // -webkit-backface-visibility: hidden;
  // -webkit-transform-style: preserve-3d;
  // transform-style: preserve-3d;
  // backface-visibility: hidden;
  background-color: #fff;
  box-sizing: border-box;
}
.slide-out-enter-active,
.slide-out-leave-active,
.slide-in-enter-active,
.slide-in-leave-active {
  will-change: transform;
  transition: transform 350ms ease;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.slide-out-enter {
  transform: translate3d(-15%, 0, 0);
  /* 防止路由切换时底部栏被抬高 */
  overflow-x: hidden;
}
.slide-out-leave-active {
  transform: translate3d(100%, 0, 0);
  /* 保持即将离开的页面在最上层 */
  z-index: 2;
}
.slide-in-enter {
  transform: translate3d(100%, 0, 0);
}
.slide-in-leave-active {
  transform: translate3d(-15%, 0, 0);
}
.slide-in-leave {
  /* 防止路由切换时底部栏被抬高 */
  overflow-x: hidden;
}
</style>
