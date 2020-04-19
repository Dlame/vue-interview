<template>
  <div @click="msgClick">{{message}}</div>
</template>

<script>
export default {
  name: "child-props",
  props: {
    message: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    msgClick() {
      this.$emit("onClick", "子组件向父组件传递消息");
    }
  }
};
</script>
<style scoped>
</style>