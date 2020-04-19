<template>
  <div>
    <div>{{getTitle}}</div>
    <div>{{getContent}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {
    ...mapGetters(["getTitle"]),
    ...mapGetters("content", ["getContent"])
  },
  methods: {}
};
</script>
<style scoped>
</style>