<script setup lang="ts">
import { ref,reactive } from 'vue';
import HIimg from '@/assets/images/hi.svg';
import answerimg from '@/assets/images/theb-ai-model.webp';
import {historyData} from '@/props/answerHistory';
const inputRef = ref();
// const askContent = ref('');
// const answerContent = ref('');
type listType = {
    ask:string,
    answer:string,
}
type modelType = {
    list:listType[];
}
const pageData:modelType = reactive({
    list:[],
})
const text: string = '中国位于亚洲东部，东临东海、黄海、南临南海，西接西藏、新疆等地区，北与蒙古、俄罗斯等国接壤。🌏中国是世界上面积第四大的国家，也是人口最多的国家之一。有任何关于中国的问题都可以问我哦！🇨🇳';
const typewriter = function () {
    let timer: any = null // 可注掉
    let arrStr: string[] = [];
    for (let i = 0; i < text.length; i++) {
        let s: string = text.charAt(i);
        arrStr.push(s);
    }
    console.log('arrStr', arrStr);
    function callBackFn() {
        let word = arrStr.splice(0, 1);
        // answerContent.value += word;
        pageData.list[pageData.list.length - 1]['answer'] += word;
        if (arrStr.length === 0) {
            cancelAnimationFrame(timer) // 可注掉（很少用到）
        } else {
            window.requestAnimationFrame(callBackFn);
        }
    }
    window.requestAnimationFrame(callBackFn)
}
//提问逻辑在这里写
const askFun = function () {
    pageData.list.push({
        ask:inputRef.value.value,
        answer:'',
    })
    // askContent.value = inputRef.value.value;//内容
    historyData.content.push(inputRef.value.value);
    typewriter();
}
</script>
<template>
    <div class="outer-box">
        <div class="content-box pt-[200px]" v-if="pageData.list.length === 0">
            <header class="text-center w-full text-[40px] font-[700]">TheB.AI</header>
            <div class="text-[24px] m-2 text-center">与最先进的模型聊天</div>
        </div>
        <div class="content-box scrollAuto" v-if="pageData.list.length > 0">
            <div class="flex items-center flex-col" v-for="item,index in pageData.list" :key="index">
                <div class="ask-box mt-5">
                    <div class="flex items-center">
                        <div
                            class="relative shrink-0 w-8 h-8 rounded-lg overflow-hidden	shadow-[0_0_0_0.25rem_#FEFEFE] dark:shadow-[0_0_0_0.25rem_#232627]">
                            <img class="object-cover" :src="HIimg" alt="Avatar"
                                style="background-color: rgb(255, 255, 255); inset: 0px; color: transparent; height: 100%;">
                        </div>
                        <div class="mr-auto">
    
                        </div>
                        <div class="flex items-center print-actions space-x-3">
                            <button class="h-5 w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" class="h-5 w-5 hover:text-primary-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184">
                                    </path>
                                </svg></button><button class="h-5 w-5" style="margin-right: -0.2rem;"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" class="h-5 w-5 hover:text-primary-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10">
                                    </path>
                                </svg></button>
                        </div>
                    </div>
                    <div
                        class="min-h-[20px] gap-3 flex items-start overflow-x-auto whitespace-pre-wrap break-words flex-col mt-[20px]">
                        <div class="relative flex items-center flex-wrap -mt-3"></div>{{ item.ask }}
                    </div>
                </div>
                <div class="answer-box mt-5">
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <div
                                class="relative shrink-0 w-8 h-8 rounded-lg overflow-hidden	shadow-[0_0_0_0.25rem_#FEFEFE] dark:shadow-[0_0_0_0.25rem_#232627]">
                                <img class="object-cover w-12 h-12" :src="answerimg" alt="Avatar"
                                    style="object-fit: fill; height: 100%;">
                            </div><span class="ml-3 text-gray-400 font-bold">TheB.AI</span>
                        </div>
                        <div class="mr-auto"></div>
                        <div class="flex items-center print-actions  space-x-3"><button class="h-5 w-5"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" class="h-5 w-5 hover:text-primary-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184">
                                    </path>
                                </svg></button><button class="h-5 w-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                    class="h-5 w-5 hover:text-primary-1">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z">
                                    </path>
                                </svg></button></div>
                    </div>
                    <div class="markdown overflow-x-auto prose mt-[20px]">
                        <p>{{ item.answer }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="input-box flex items-center">
            <div class="w-[50px] h-[44px] flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#7f8689"
                        d="M16.257 3.04c.609.042 1.147.129 1.657.34a5 5 0 0 1 2.706 2.706c.211.51.299 1.048.34 1.657.04.592.04 1.319.04 2.221v.071l-.04 2.221c-.042.609-.129 1.147-.34 1.657a5 5 0 0 1-2.706 2.706c-.51.211-1.048.299-1.657.34-.592.04-1.319.04-2.221.04l-2.841.001-.392.019a1 1 0 0 0-.468.234c-.057.051-.116.121-.391.489l-.022.029-1.483 1.916c-.371.437-.791.877-1.292 1.084A3 3 0 0 1 3.42 19.53c-.276-.466-.348-1.07-.383-1.643L3 16.107V9.665l.057-1.974c.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.592-.302 1.232-.428 1.961-.487.551-.045 1.202-.055 1.974-.057h5.015l1.577.04zM14.59 5H9.813l-1.959.051c-.605.049-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.041.505-.049 1.127-.051 1.959l.001 6.483.032 1.471c.016.268.039.456.065.589.023.112.042.155.043.157a1 1 0 0 0 1.237.412c.002-.002.043-.023.129-.1.101-.09.232-.227.406-.432l1.43-1.851.043-.058c.208-.278.391-.523.617-.724a3 3 0 0 1 1.405-.703c.222-.045.449-.056.696-.058L14 15l2.121-.036c.507-.035.802-.099 1.027-.193a3 3 0 0 0 1.624-1.623c.093-.225.158-.521.193-1.027C19 11.605 19 10.946 19 10l-.036-2.121c-.035-.507-.099-.802-.193-1.027a3 3 0 0 0-1.623-1.624c-.225-.093-.521-.158-1.027-.193L14.59 5zM11 11a1 1 0 1 1 0 2h0-3a1 1 0 1 1 0-2h0zm5-4a1 1 0 1 1 0 2h0-8a1 1 0 1 1 0-2h0z">
                    </path>
                </svg>
            </div>
            <input class="input" placeholder="请随意提问" ref="inputRef" type="text">
            <div class="w-[50px] h-[44px]">
                <div class="w-[40px] h-[40px] rounded-[12px] flex items-center justify-center cursor-pointer"
                    @click="askFun" style="background-color: rgb(148 163 184);">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#fefefe"
                            d="M12 4l.117.007.113.02.112.033.082.034.113.062.089.064.082.073 7 7a1 1 0 0 1-1.32 1.497l-.094-.083L13 7.415V19a1 1 0 0 1-1.993.117L11 19V7.414l-5.293 5.293a1 1 0 0 1-1.497-1.32l.083-.094 7-7 .058-.054.094-.071.071-.043.113-.053.142-.045.114-.02L12 4z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.outer-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 12px;
    // padding-top: 200px;
    flex-direction: column;

    .content-box {
        width: 100%;
        height: calc(100vh - 150px);
        color: var(--text-center-color);
        overflow-y: auto;
        .answer-box {
            padding: 24px;
            border-radius: 20px;
            width: calc(100% - 200px);
            background-color: var(--color-answer-bg);
            .markdown {
                max-width: none;
            }
        }

        .ask-box {
            padding: 24px;
            border-radius: 20px;
            width: calc(100% - 200px);
            background-color: var(--color-ask-bg);
            border: 2px solid var(--color-ask-border);
        }
    }

    .input-box {
        width: calc(100% - 200px);
        height: 56px;
        padding: 10px;
        border-radius: 12px;
        border: 1px solid #e5e7eb;

        .input {
            height: 44px;
            width: calc(100% - 100px);
            font-size: 16px;
            color: var(--text-center-color);
            font-weight: bold;
            border: none;
            outline: none;
            background-color: var(--color-background);
        }
    }
}
.scrollAuto::-webkit-scrollbar{
    width: 6px;
    background-color: var(--scrollbar-bg);
}
.scrollAuto::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
  border-radius: 2px;
}
.scrollAuto::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-thumb);
}
</style>