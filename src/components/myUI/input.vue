<!-- input组件 -->
<template>
    <div class="my-input" :class="{'my-input--suffix': showSuffix}">
        <input
            class="my-input__inner"
            :class="{'is-disabled': disabled}"
            :placeholder="placeholder"
            :type="showPassword ? (passwordVisible ? 'text':'password'): type"
            :disabled="disabled"
            :value="value"
            @input="handleInput"
        />
        <span class="my-input__suffix" v-if="showSuffix">
            <i
                v-if="clearable && this.value"
                class="my-input__icon el-icon-circle-close my-input__clear"
                @click="clear"
            ></i>
            <i
                v-if="showPassword"
                class="my-input__icon el-icon-view my-input__clear"
                @click="handlePasswordVisible"
            ></i>
        </span>
    </div>
</template>
<script>
export default {
    name: "MyInput",
    components: {},
    data() {
        return {
            passwordVisible: false
        };
    },
    props: {
        placeholder: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "text"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: [String, Number],
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        showSuffix() {
            return this.clearable || this.showPassword;
        }
    },
    watch: {},
    methods: {
        handleInput(e) {
            this.$emit("input", e.target.value);
        },
        clear() {
            this.$emit("input", "");
        },
        handlePasswordVisible() {
            this.passwordVisible = !this.passwordVisible;
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {}
};
</script>
<style lang='less' scoped>
.my-input {
    width: 180px;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .my-input__inner {
        cursor: pointer;
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #000;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        width: 100%;
        &:hover,
        &:focus {
            outline: none;
            border-color: #409eff;
        }
        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}
.my-input--suffix {
    .my-input__inner {
        padding-right: 30px;
    }
    .my-input__suffix {
        position: absolute;
        height: 100%;
        right: 10px;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all 0.3s;
        z-index: 900;
        i {
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
    }
}
</style>