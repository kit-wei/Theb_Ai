<template>
    <div class="box flex">
        <div class="left">
            <LeftComponent></LeftComponent>
        </div>
        <div class="center flex">
            <div class="flex-1">
                <CenterComponent></CenterComponent>
            </div>
            <div>
                <RightComponent></RightComponent>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import LeftComponent from './LeftComponent.vue';
import RightComponent from './RightComponent.vue';
import CenterComponent from './CenterComponent.vue';
</script>
<style lang="less" scoped>
.box{
    width: 100%;
    height: 100%;
    background-color: #000000;
    padding-right: 24px;
    .left{
        height: 100%;
    }
    .center{
        flex: 1;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        height: calc(100% - 24px);
        background-color: var(--color-background);
        overflow: hidden;
    }
    .right{
        width: 311px;
        height: 100%;
    }
}
</style>