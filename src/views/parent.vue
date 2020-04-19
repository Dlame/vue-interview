<template>
  <div>
    <div>我是父组件!</div>
    <child-props :message="message" @onClick="onClick"></child-props>
    <child-ref ref="childref"></child-ref>
    <child-attrs :son="son" :grandson="grandson" @upRocket="reciveRocket"></child-attrs>
  </div>
</template>

<script>
import childProps from "../components/childProps";
import childRef from "../components/childRef";
import childAttrs from "../components/childAttrs";
export default {
  components: {
    [childProps.name]: childProps,
    [childRef.name]: childRef,
    [childAttrs.name]: childAttrs
  },
  provide: {
    parent: "provide inject"
  },
  data() {
    return {
      message: "组件一 通过props通信",
      son: "hellow son",
      grandson: "hellow grandson"
    };
  },
  created() {},
  mounted() {
    // this.$refs.childref.getMessage("组件二 通过ref通信");
    console.log(this.$children[1].message);
    this.$root.eventHub.$on("getbyEventhub", msg => {
      console.log(msg);
    });
  },
  computed: {},
  methods: {
    // emit接收子组件传递消息
    onClick(msg) {
      console.log(msg);
    },
    reciveRocket(msg) {
      console.log(msg);
    }
  }
};
</script>
<style scoped>
</style>