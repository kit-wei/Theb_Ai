<script lang="ts" setup>
import {ref} from 'vue';
const show = ref(true);
</script>
<template>
    <div class="box p-[10px] flex items-center justify-between" v-if="show">
        <span></span>
        <div>
            <span class="text-sm text-[#fff]">Your Opinion Matters and Help Us Get Better: Quick Survey</span>
            &nbsp;&nbsp;
            <span class="text-sm text-[#fff] cursor-pointer">JOIN NOW ></span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" @click="show = false" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="#fff" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path></svg>
    </div>
</template>
<style lang="less" scoped>
.box{
    width: 100%;
    height: 37px;
    background-color: var(--color-bg-primary);
    svg{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
}
</style>