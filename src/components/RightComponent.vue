<script setup lang="ts">
import { ref,computed } from 'vue'
import {historyData,clearHistory,deleteItem} from '@/props/answerHistory';
const outerBoxRef = ref();
const isOpen = ref(true);
const closeAndOpen = function () {
    if (isOpen.value) {
        outerBoxRef.value.style.width = '100px';
        isOpen.value = false;
    } else {
        outerBoxRef.value.style.width = '311px';
        isOpen.value = true;
    }
}
const btnIndex = ref(1);
const historyContent = computed(()=>{
    return historyData.content;
})
const _clearHistory = function(){
    clearHistory();
}
</script>
<template>
    <div class="outer-box flex flex-col justify-between" ref="outerBoxRef">
        <div>
            <div class="header flex items-center">
                <button @click="closeAndOpen">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#6c7275"
                            d="M19.5 2A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h15zM18 4h-4a2 2 0 0 0-2 2h0v12a2 2 0 0 0 2 2h0 4a2 2 0 0 0 2-2h0V6a2 2 0 0 0-2-2h0zM9.121 9.707a1 1 0 0 0-1.517 1.294h0L5 11a1 1 0 1 0 0 2h0l2.828-.001-.121.122a1 1 0 0 0 1.414 1.414h0l1.414-1.414c.271-.271.354-.659.25-1.002a1 1 0 0 0-.25-.998h0z">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="btn-box mt-3 flex">
                <div class="flex-1 flex items-center justify-center child" v-if="isOpen || (!isOpen && btnIndex !== 1)"
                    :class="{ isActive: btnIndex === 1 }" @click="btnIndex = 1">
                    <span class="text-sm font-[700] text-[#6c7275]">历史</span>
                </div>
                <div class="flex-1 flex items-center justify-center child" v-if="isOpen || (!isOpen && btnIndex !== 2)"
                    :class="{ isActive: btnIndex === 2 }" @click="btnIndex = 2">
                    <span class="text-sm font-[700] text-[#6c7275]">设置</span>
                </div>
            </div>
            <div class="flex justify-between items-center pl-[24px] pr-[24px] mt-5">
                <span class="text-sm">历史聊天</span>
                <svg class="inline-block w-5 h-5 cursor-pointer" @click="_clearHistory" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#6c7275"
                        d="M15 2.1a.9.9 0 0 1 .122 1.792L15 3.9H9a.9.9 0 0 1-.122-1.792L9 2.1h6zm6 3a.9.9 0 0 1 .122 1.792L21 6.9h-1.159l-.691 10.361-.045.567c-.095 1.043-.221 1.573-.523 2.102a3.9 3.9 0 0 1-1.688 1.579l-.224.101c-.332.137-.661.21-1.184.248l-.38.021-.451.013-1.147.008-3.616-.001-.51-.006-.434-.011-.37-.018-.316-.027c-.341-.038-.595-.097-.84-.189l-.21-.087-.107-.05a3.9 3.9 0 0 1-1.688-1.579l-.166-.325-.088-.223c-.054-.154-.098-.32-.135-.518l-.053-.321-.046-.38-.063-.708-.062-.878L4.158 6.9H3a.9.9 0 0 1-.122-1.792L3 5.1h18zm-2.963 1.8H5.962l.691 10.315.066.741.034.277.036.226.04.185.045.152.051.129.059.115a2.1 2.1 0 0 0 .909.85l.126.054.142.044.168.035.206.027.255.02.314.014.606.012.784.003 3.776-.003.583-.011.307-.013.252-.018.206-.024.089-.014.155-.034.132-.042.118-.051a2.1 2.1 0 0 0 .909-.85c.074-.13.131-.285.179-.511l.045-.252.04-.31.037-.378.082-1.129.637-9.559zM10 9.6a.9.9 0 0 1 .892.778l.008.122v5a.9.9 0 0 1-1.792.122L9.1 15.5v-5a.9.9 0 0 1 .9-.9zm4 0a.9.9 0 0 1 .892.778l.008.122v5a.9.9 0 0 1-1.792.122L13.1 15.5v-5a.9.9 0 0 1 .9-.9z">
                    </path>
                </svg>
            </div>
            <div class="mt-5 pl-4 pr-4">
                <div class="pr-3 py-3 pl-4 history-item" v-for="item,index in historyContent" :key="item">
                    <div style="display: flex; justify-content: space-between; align-items: center;"><svg
                            class="inline-block w-4 h-4 mr-2 transition-colors"
                            width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M16.257 3.04c.609.042 1.147.129 1.657.34a5 5 0 0 1 2.706 2.706c.211.51.299 1.048.34 1.657.04.592.04 1.319.04 2.221v.071l-.04 2.221c-.042.609-.129 1.147-.34 1.657a5 5 0 0 1-2.706 2.706c-.51.211-1.048.299-1.657.34-.592.04-1.319.04-2.221.04l-2.841.001-.392.019a1 1 0 0 0-.468.234c-.057.051-.116.121-.391.489l-.022.029-1.483 1.916c-.371.437-.791.877-1.292 1.084A3 3 0 0 1 3.42 19.53c-.276-.466-.348-1.07-.383-1.643L3 16.107V9.665l.057-1.974c.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.592-.302 1.232-.428 1.961-.487.551-.045 1.202-.055 1.974-.057h5.015l1.577.04zM14.59 5H9.813l-1.959.051c-.605.049-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.041.505-.049 1.127-.051 1.959l.001 6.483.032 1.471c.016.268.039.456.065.589.023.112.042.155.043.157a1 1 0 0 0 1.237.412c.002-.002.043-.023.129-.1.101-.09.232-.227.406-.432l1.43-1.851.043-.058c.208-.278.391-.523.617-.724a3 3 0 0 1 1.405-.703c.222-.045.449-.056.696-.058L14 15l2.121-.036c.507-.035.802-.099 1.027-.193a3 3 0 0 0 1.624-1.623c.093-.225.158-.521.193-1.027C19 11.605 19 10.946 19 10l-.036-2.121c-.035-.507-.099-.802-.193-1.027a3 3 0 0 0-1.623-1.624c-.225-.093-.521-.158-1.027-.193L14.59 5zM11 11a1 1 0 1 1 0 2h0-3a1 1 0 1 1 0-2h0zm5-4a1 1 0 1 1 0 2h0-8a1 1 0 1 1 0-2h0z">
                            </path>
                        </svg>
                        <div
                            style="flex: 3 1 0%; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; font-weight: bold;">
                            {{item}}</div>
                        <div style="flex: 1 1 0%; display: flex; justify-content: space-around;"><button><svg
                                    class="inline-block w-4 h-4 transition-colors"
                                    width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M21 19.365a1.2 1.2 0 0 1 .14 2.392l-.14.008h-9a1.2 1.2 0 0 1-.14-2.392l.14-.008h9zM15.652 3.217a3.32 3.32 0 1 1 4.697 4.697h0L7.506 20.754l-.221.209a2.82 2.82 0 0 1-.262.213h0l-.18.118a3.2 3.2 0 0 1-.925.383c-.133.032-.243.052-.374.066h0l-.216.015-.279.007L3 21.765a1.2 1.2 0 0 1-1.2-1.2h0v-1.873l.006-.377c.009-.272.031-.455.083-.669a3.2 3.2 0 0 1 .383-.925l.037-.058h0l.117-.167.107-.135.061-.07h0l.151-.162zm3 1.697a.92.92 0 0 0-1.303 0h0L4.686 17.576l-.275.283-.082.099-.052.092a.8.8 0 0 0-.056.158h0l-.01.067-.009.195-.002.896h.755l.287-.007.117-.015a.8.8 0 0 0 .231-.096h0l.057-.041.158-.146L18.652 6.217a.92.92 0 0 0 0-1.303z">
                                    </path>
                                </svg></button><button @click="deleteItem(index)"><svg
                                    class="inline-block w-4 h-4 transition-colors"
                                    width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M15 2.1a.9.9 0 0 1 .122 1.792L15 3.9H9a.9.9 0 0 1-.122-1.792L9 2.1h6zm6 3a.9.9 0 0 1 .122 1.792L21 6.9h-1.159l-.691 10.361-.045.567c-.095 1.043-.221 1.573-.523 2.102a3.9 3.9 0 0 1-1.688 1.579l-.224.101c-.332.137-.661.21-1.184.248l-.38.021-.451.013-1.147.008-3.616-.001-.51-.006-.434-.011-.37-.018-.316-.027c-.341-.038-.595-.097-.84-.189l-.21-.087-.107-.05a3.9 3.9 0 0 1-1.688-1.579l-.166-.325-.088-.223c-.054-.154-.098-.32-.135-.518l-.053-.321-.046-.38-.063-.708-.062-.878L4.158 6.9H3a.9.9 0 0 1-.122-1.792L3 5.1h18zm-2.963 1.8H5.962l.691 10.315.066.741.034.277.036.226.04.185.045.152.051.129.059.115a2.1 2.1 0 0 0 .909.85l.126.054.142.044.168.035.206.027.255.02.314.014.606.012.784.003 3.776-.003.583-.011.307-.013.252-.018.206-.024.089-.014.155-.034.132-.042.118-.051a2.1 2.1 0 0 0 .909-.85c.074-.13.131-.285.179-.511l.045-.252.04-.31.037-.378.082-1.129.637-9.559zM10 9.6a.9.9 0 0 1 .892.778l.008.122v5a.9.9 0 0 1-1.792.122L9.1 15.5v-5a.9.9 0 0 1 .9-.9zm4 0a.9.9 0 0 1 .892.778l.008.122v5a.9.9 0 0 1-1.792.122L13.1 15.5v-5a.9.9 0 0 1 .9-.9z">
                                    </path>
                                </svg></button></div>
                    </div>
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
.outer-box {
    width: 311px;
    height: 100%;
    border-left: 1px solid rgb(232 236 239);
    transition: width 0.3s ease;
    padding-bottom: 28px;

    .add-btn {
        height: 48px;
        margin-left: 24px;
        margin-right: 24px;
        border-radius: 8px;
        background-color: rgb(0, 130, 252);
    }
    .history-item-active{
        background-color: var(--history-bg);
    }
    .history-item {
        border-radius: 12px;
        color: var(--history-text-color);
        margin-bottom: 12px;
        cursor: pointer;
        svg{
            fill: #6c7275;
        }
        &:hover{
            background-color: var(--history-bg);
        }
    }

    .btn-box {
        height: 48px;
        margin-left: 24px;
        margin-right: 24px;
        border-radius: 8px;
        background-color: #000;
        padding: 4px;

        .child {
            border-radius: 8px;
            cursor: pointer;
        }

        .isActive {
            background-color: rgb(0, 130, 252);

            span {
                color: #ffffff;
            }
        }
    }

    .header {
        height: 50px;
        width: 100%;
        padding-left: 36px;
        padding-right: 36px;
        border-bottom: 1px solid rgb(232 236 239);
    }
}
</style>