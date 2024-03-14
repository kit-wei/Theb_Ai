<script setup lang="ts">
import {ref} from 'vue'
const outerBoxRef = ref();
const isOpen = ref(true);
const closeAndOpen = function(){
    if(isOpen.value){
        outerBoxRef.value.style.width = '100px';
        isOpen.value = false;
    }else{
        outerBoxRef.value.style.width = '311px';
        isOpen.value = true;
    }
}
const btnIndex = ref(1);
</script>
<template>
    <div class="outer-box flex flex-col justify-between" ref="outerBoxRef">
        <div>
            <div class="header flex items-center">
                <button @click="closeAndOpen">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#6c7275" d="M19.5 2A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h15zM18 4h-4a2 2 0 0 0-2 2h0v12a2 2 0 0 0 2 2h0 4a2 2 0 0 0 2-2h0V6a2 2 0 0 0-2-2h0zM9.121 9.707a1 1 0 0 0-1.517 1.294h0L5 11a1 1 0 1 0 0 2h0l2.828-.001-.121.122a1 1 0 0 0 1.414 1.414h0l1.414-1.414c.271-.271.354-.659.25-1.002a1 1 0 0 0-.25-.998h0z"></path></svg>
                </button>
            </div>
            <div class="btn-box mt-3 flex">
                <div class="flex-1 flex items-center justify-center child" v-if="isOpen || (!isOpen && btnIndex!==1)" :class="{isActive:btnIndex===1}" @click="btnIndex=1">
                    <span class="text-sm font-[700] text-[#6c7275]">历史</span>
                </div>
                <div class="flex-1 flex items-center justify-center child" v-if="isOpen || (!isOpen && btnIndex!==2)" :class="{isActive:btnIndex===2}" @click="btnIndex=2">
                    <span class="text-sm font-[700] text-[#6c7275]">设置</span>
                </div>
            </div>
        </div>
        <div class="add-btn flex justify-center items-center cursor-pointer">
            <div class="flex items-center h-full pb-2">
                <span class="text-[30px] text-[#fff]">+</span>
            </div>
            <div class="flex items-center h-full ml-4" v-if="isOpen">
                <span class="text-sm font-[700] text-[#fff]">新聊天</span>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.outer-box{
    width: 311px;
    height: 100%;
    border-left: 1px solid rgb(232 236 239);
    transition: width 0.3s ease;
    padding-bottom: 28px;
    .add-btn{
        height: 48px;
        margin-left: 24px;
        margin-right: 24px;
        border-radius: 8px;
        background-color: rgb(0,130,252);
    }
    .btn-box{
        height: 48px;
        margin-left: 24px;
        margin-right: 24px;
        border-radius: 8px;
        background-color: #000;
        padding: 4px;
        .child{
            border-radius: 8px;
            cursor: pointer;
        }
        .isActive{
            background-color: rgb(0,130,252);
            span{
                color: #ffffff;
            }
        }
    }
    .header{
        height: 50px;
        width: 100%;
        padding-left: 36px;
        padding-right: 36px;
        border-bottom: 1px solid rgb(232 236 239);
    }
}
</style>