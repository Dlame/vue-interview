<template>
  <div>
    <div>
      computed:
      <input v-model="computed_val" @change="computed_val_onChange" />
      <div>{{computed_after_val}}</div>
    </div>
    <div>
      watch:
      <input v-model="watch_val" />
    </div>
    <div>
      watch-object:
      <input v-model="watch_obj.a" />
    </div>
    <div>
      watch-object:
      <input v-model="watch_obj.b.c" />
    </div>
    <div>
      <div>
        filters:
        {{filter_val}}
      </div>
      after_filter:{{filter_val|dateFormat}}
    </div>
    <son-life @hook:mounted="doMounted"></son-life>
  </div>
</template>

<script>
import dayjs from "dayjs";

import SonLife from "@/components/sonLife.vue";

export default {
  components: {
    "son-life": SonLife
  },
  data() {
    return {
      computed_val: "computed_val",
      watch_val: "watch_val",
      watch_obj: {
        a: "a",
        b: {
          c: "c"
        }
      },
      watch_arr: [1, 2, 3],
      filter_val: new Date()
    };
  },
  created() {},
  mounted() {
    // this.watch_arr[2] = 4;
    // this.$set(this.watch_arr, 2, "4");
  },
  computed: {
    computed_after_val() {
      return this.computed_val + "_after";
    }
  },
  watch: {
    watch_val(newval, oldvalue) {
      console.log(newval, oldvalue);
    },
    "watch_obj.a": (newval, oldvalue) => {
      console.log(newval, oldvalue);
    },
    "watch_obj.b.c": (newval, oldvalue) => {
      console.log(newval, oldvalue);
    },
    watch_arr: (newval, oldvalue) => {
      console.log(newval, oldvalue);
    }
  },
  filters: {
    dateFormat(val) {
      return dayjs(val).format("YYYY年MM月DD日");
    }
  },
  methods: {
    computed_val_onChange(e) {
      console.log(e, this.computed_after_val);
    },
    doMounted(){
      console.log('父组件监听到子组件 mounted');
    }
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log(to, from);
    next(vm => {
      console.log(vm);
    });
  }
};
</script>
<style scoped>
</style>