<!-- dialog组件 -->
<template>
    <transition name="dialog-fade">
        <div class="my-dialog_wrapper" v-show="visible" @click.self="handleClose">
            <div class="my-dialog" :style="{width:width,marginTop:top}">
                <div class="my-dialog_header">
                    <slot name="title">
                        <!-- 将span放到slot内，这样不仅可以定义title文本，还可以定义样式等 -->
                        <span class="my-dialog_title">{{title}}</span>
                        <button class="my-dialog_headerbtn" @click="handleClose">
                            +
                            <!-- <i class="one-icon-close"></i> -->
                        </button>
                    </slot>
                </div>
                <div class="my-dialog_body">
                    <slot></slot>
                </div>
                <div class="my-dialog_footer">
                    <!-- 如果footer不传递内容，则不显示footer -->
                    <slot name="footer" v-if="$slots.footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "MyDialog",
    props: {
        title: {
            type: String,
            default: "提示",
        },
        width: {
            type: String,
            default: "30%",
        },
        top: {
            type: String,
            default: "15vh",
        },
        visible: {
            type: Boolean,
            default: false,
        },
        footer: {
            type: Object,
        },
    },
    data() {
        return { show: false };
    },
    methods: {
        handleClose() {
            this.$emit("update:visible", false);
        },
    },
};
</script>
<style lang='less' scoped>
.my-dialog_wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    overflow: auto;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);
    .my-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 30%;
        &_header {
            padding: 20px 20px 10px;
            .my-dialog_title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .my-dialog_headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                // font-size: 16px;
                font-size: 24px;
                transform: rotate(45deg); // 临时代替icon-font
                .my-icon-close {
                    color: 909399;
                }
            }
        }
        &_body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }
        &_footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            /deep/ .my-button:first-child {
                margin-right: 20px;
            }
        }
    }
}
.dialog-fade-enter-active {
    animation: fade 0.3s;
}
.dialog-fade-leave-active {
    animation: fade 0.3s reverse;
}
@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>