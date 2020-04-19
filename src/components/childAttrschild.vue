<template>
  <div>
    <div>grandson:{{grandson}}</div>
    <button @click="startUpRocket">我要发射火箭</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["grandson"],
  created() {},
  mounted() {},
  computed: {},
  methods: {
    startUpRocket() {
      this.$emit("upRocket", "startUpRocket");
    }
  }
};
</script>
<style scoped>
</style>