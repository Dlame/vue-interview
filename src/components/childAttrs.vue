<template>
  <div>
    <div>son:{{son}}</div>
    <child v-bind="$attrs" v-on="$listeners"></child>
  </div>
</template>

<script>
import childAttrschild from "../components/childAttrschild";
export default {
  name: "child-attrs",
  components: {
    child: childAttrschild
  },
  props: ["son"],
  inject: ["parent"],
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log(this.parent);
  },
  computed: {},
  methods: {}
};
</script>
<style scoped>
</style>