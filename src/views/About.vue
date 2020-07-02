<!--  -->
<template>
    <div>
        <h3>switch开关</h3>
        <div>
            <my-switch name="switch" v-model="switchValue"></my-switch>
            <my-switch name="switch" v-model="switchValue2" activeColor="#ff6348"></my-switch>
        </div>
        <h3>button按钮</h3>
        <div>
            <my-button>按钮</my-button>
            <my-button type="primary">按钮</my-button>
            <my-button type="success">按钮</my-button>
            <my-button type="info">按钮</my-button>
            <my-button type="warning">按钮</my-button>
            <my-button type="danger">按钮</my-button>
        </div>
        <div>
            <my-button>按钮</my-button>
            <my-button type="primary" plain>按钮</my-button>
            <my-button type="success" plain>按钮</my-button>
            <my-button type="info" plain>按钮</my-button>
            <my-button type="warning" plain>按钮</my-button>
            <my-button type="danger" plain>按钮</my-button>
        </div>
        <div>
            <my-button round>按钮</my-button>
            <my-button type="primary" round>按钮</my-button>
            <my-button type="success" round>按钮</my-button>
            <my-button type="info" round>按钮</my-button>
            <my-button type="warning" round>按钮</my-button>
            <my-button type="danger" round>按钮</my-button>
        </div>
        <div>
            <my-button circle></my-button>
            <my-button type="primary" circle></my-button>
            <my-button type="success" circle></my-button>
            <my-button type="info" circle></my-button>
            <my-button type="warning" circle></my-button>
            <my-button type="danger" circle></my-button>
        </div>
        <div>
            <my-button disabled>按钮</my-button>
            <my-button type="primary" disabled>按钮</my-button>
            <my-button type="success" disabled>按钮</my-button>
            <my-button type="info" disabled>按钮</my-button>
            <my-button type="warning" disabled>按钮</my-button>
            <my-button type="danger" disabled>按钮</my-button>
        </div>
        <div>
            <my-button disabled>按钮</my-button>
            <my-button type="primary" plain disabled>按钮</my-button>
            <my-button type="success" plain disabled>按钮</my-button>
            <my-button type="info" plain disabled>按钮</my-button>
            <my-button type="warning" plain disabled>按钮</my-button>
            <my-button type="danger" plain disabled>按钮</my-button>
        </div>
    </div>
</template>

<script>
import MySwitch from "@/components/myUI/switch.vue";
import MyButton from "@/components/myUI/button.vue";
export default {
    components: {
        MySwitch,
        MyButton
    },
    data() {
        return {
            switchValue: false,
            switchValue2: false
        };
    },
    computed: {},
    watch: {},
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {}
};
</script>
<style lang='less' scoped>
.my-switch {
    margin: 10px;
}
.my-button{
    margin: 5px;
}
</style>