<!-- switch组件 -->
<template>
  <div class="my-switch" @click="handleChange" :class="{ 'is-checked': this.value }">
    <input class="my-switch__input" type="checkbox" ref="input" :name="name" />
    <span class="my-switch__core" ref="core">
      <span class="my-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "MySwitch",
  props: {
    // 绑定值
    value: {
      type: Boolean,
      default: false
    },
    //
    name: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {
    value() {
      this.setBackgroundColor();
    }
  },
  methods: {
    handleChange() {
      this.$emit("input", !this.value);
      // 修改checkbox的值
      this.$nextTick(() => {
        this.$refs.input.checked = this.value;
      });
    },
    setBackgroundColor() {
      if (!this.activeColor && this.inactiveColor) return;
      let newColor = this.value ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$refs.input.checked = this.value;
    // 设置背景色
    this.setBackgroundColor();
  }
};
</script>
<style lang='less' scoped>
.my-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .my-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .my-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .my-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.my-switch.is-checked {
  .my-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .my-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>