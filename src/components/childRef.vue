<template>
  <div>{{message}}</div>
</template>

<script>
export default {
  name: "child-ref",
  data() {
    return { message: "子组件二 通过$parent" };
  },
  created() {},
  mounted() {
    console.log(this.$parent);
  },
  computed: {},
  methods: {
    getMessage(m) {
      this.message = m;
    }
  }
};
</script>
<style scoped>
</style>