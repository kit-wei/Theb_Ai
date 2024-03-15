<script lang="ts" setup>
import {reactive,ref} from 'vue'
import titleIcon from '@/assets/images/theb.ai4.svg';
type modeType = {
    name:string;
    email:string;
    password:string;
}
const registerData:modeType = reactive({
    name:'',
    email:'',
    password:'',
})
const nameRef = ref();
const emailRef = ref();
const passwordRef = ref();
//创建账号在这里写
const createAccount = function(){
    registerData.name = nameRef.value.value;//姓名
    registerData.email = emailRef.value.value;//email
    registerData.password = passwordRef.value.value;//密码
}
</script>
<template>
    <div class="outer-box">
        <div class="login-box w-[392px]">
            <div class="flex justify-center mb-8">
                <img alt="TheB.AI" loading="lazy" width="190" height="40" decoding="async" data-nimg="1"
                    class="inline-block align-top opacity-0 transition-opacity opacity-100"
                    :src="titleIcon" style="color: transparent;">
            </div>
            <h2 class="text-3xl font-bold text-center my-4">创建您的账户</h2>
            <h2 class="text-1xl text-center my-4">您的密码必须至少包含8个字符，包括至少一个大写字母、一个小写字母和一个数字。</h2>
            <div>
                <div class="mb-4">
                    <div class="">
                        <div class="flex mb-2 base2 font-semibold">名称</div>
                        <div class="relative flex items-center">
                            <input
                                class="w-full h-[52px] px-3.5 bg-n-2 border-2 border-n-2 rounded-xl base2 text-n-7 outline-none transition-colors placeholder:text-n-4/50 focus:bg-transparent dark:text-n-3 pl-[3.125rem] false dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent disabled:text-zinc-500"
                                type="text" placeholder="名称" required ref="nameRef">
                            <svg class="inline-block w-6 h-6 absolute left-4 fill-n-4/50 pointer-events-none transition-colors false"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M19 2.5a1 1 0 0 1 .993.883L20 3.5v2h2a1 1 0 0 1 .117 1.993L22 7.5h-2v2a1 1 0 0 1-1.993.117L18 9.5v-2h-2a1 1 0 0 1-.117-1.993L16 5.5h2v-2a1 1 0 0 1 1-1zm-7.521 11l.506.002.443.006.387.01.338.016.296.022.26.03c.327.046.577.114.825.218l.186.084.095.047a4 4 0 0 1 1.748 1.748l.091.189c.126.279.207.551.258.918l.03.26.022.296.016.338.01.387.006.443.003.785v1.2a1 1 0 0 1-1.993.117L15 20.5l-.001-1.664-.009-.752-.008-.299-.012-.254-.025-.31-.022-.167-.027-.141-.032-.121-.018-.054-.041-.1-.023-.047a2 2 0 0 0-.874-.874l-.106-.048-.119-.041-.139-.034-.166-.028-.2-.022-.38-.024-.317-.01-.818-.01H6.336l-.818.01-.317.01-.265.015-.115.009-.2.022-.166.028-.139.034-.119.041-.106.048a2 2 0 0 0-.874.874l-.025.052-.045.112-.02.062-.034.139-.028.166-.022.2-.024.38-.01.317-.01.818L3 20.5a1 1 0 0 1-1.993.117L1 20.5l.003-1.985.006-.443.01-.387.016-.338.022-.296.03-.26c.046-.327.114-.577.218-.825l.084-.187.047-.095a4 4 0 0 1 1.748-1.748l.095-.047.186-.084c.248-.103.499-.172.825-.218l.26-.03.296-.022.338-.016.387-.01.443-.006.785-.003h4.679zM9 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 1 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 1 1 0-5z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mb-4">
                    <div class="">
                        <div class="flex mb-2 base2 font-semibold">电子邮件</div>
                        <div class="relative flex items-center"><input
                                class="w-full h-[52px] px-3.5 bg-n-2 border-2 border-n-2 rounded-xl base2 text-n-7 outline-none transition-colors placeholder:text-n-4/50 focus:bg-transparent dark:text-n-3 pl-[3.125rem] false dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent disabled:text-zinc-500"
                                type="email" placeholder="电子邮件" required ref="emailRef"><svg
                                class="inline-block w-6 h-6 absolute left-4 fill-n-4/50 pointer-events-none transition-colors false"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M1.469 7.845l.084.002c.131.014.281.121.581.335h0l7.569 5.407c.543.389 1.02.731 1.566.872a3 3 0 0 0 1.456.011c.547-.133 1.03-.467 1.579-.849h0l7.742-5.36.284-.177c.274-.1.581.061.655.343.016.062.016.152.016.33h0v6.483l-.044 2.01c-.046.562-.145 1.079-.392 1.564a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.011.044h0H6.759c-.805 0-1.469 0-2.011-.044-.562-.046-1.079-.145-1.564-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 16.711 1 16.046 1 15.241V8.613c.001-.27.009-.418.064-.516.097-.171.293-.272.488-.251zM17.578 3l1.674.044c.562.046 1.079.144 1.564.392.621.317 1.168.804 1.548 1.394.099.154.149.231.162.348.01.091-.015.217-.059.297-.057.103-.149.167-.334.294h0l-8.852 6.128c-.735.509-.89.597-1.027.63a1 1 0 0 1-.485-.004c-.136-.035-.291-.126-1.018-.645h0L1.975 5.61c-.192-.137-.288-.206-.344-.314a.56.56 0 0 1-.049-.308c.019-.12.077-.198.192-.356.367-.501.851-.913 1.41-1.197.485-.247 1.002-.346 1.564-.392C5.289 3 5.954 3 6.759 3z">
                                </path>
                            </svg></div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="">
                        <div class="flex mb-2 base2 font-semibold">密码</div>
                        <div class="relative flex items-center"><input
                                class="w-full h-[52px] px-3.5 bg-n-2 border-2 border-n-2 rounded-xl base2 text-n-7 outline-none transition-colors placeholder:text-n-4/50 focus:bg-transparent dark:text-n-3 pl-[3.125rem] false dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent disabled:text-zinc-500"
                                type="password" placeholder="密码" required ref="passwordRef"><button type="button"
                                class="absolute inset-y-0 right-0 pr-3 flex items-center"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4"
                                    style="color: rgb(175, 179, 182);">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg></button><svg
                                class="inline-block w-6 h-6 absolute left-4 fill-n-4/50 pointer-events-none transition-colors false"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M12 1.995a6 6 0 0 1 6 6v1.15c.283.062.554.152.816.286a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.011v1.483l-.044 2.01c-.046.562-.144 1.079-.392 1.564a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.759c-.805 0-1.469 0-2.011-.044-.562-.046-1.079-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564-.038-.464-.043-1.018-.044-1.674v-1.819l.044-2.011c.046-.562.144-1.079.392-1.564a4 4 0 0 1 1.748-1.748c.262-.134.533-.224.816-.286v-1.15a6 6 0 0 1 6-6zm0 11.5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1zm0-9.5a4 4 0 0 0-4 4h0v1.002h8V7.995a4 4 0 0 0-4-4z">
                                </path>
                            </svg></div>
                    </div>
                </div>
                <button class="btn-blue btn-large w-full" type="button" @click="createAccount">创建账号</button>
            </div>
            <p class=" text-sm mt-4">已经有一个帐号了吗？<span class="text-blue-500 cursor-pointer" @click="$router.push('/login')">登录</span></p>
        </div>
    </div>
</template>
<style lang="less" scoped>
.outer-box {
    @apply flex justify-center items-center;
    width: 100%;
    height: 100%;
    background-color: #fff;

    .base2 {
        font-size: 14px;
        letter-spacing: -.02em;
        line-height: 24px;
    }
    .bg-n-2{
        background-color: rgb(243 245 247);
    }
    .border-n-2 {
        --tw-border-opacity: 1;
        border-color: rgb(243 245 247 / var(--tw-border-opacity));
    }
    .fill-n-4\/50 {
        fill: hsla(200, 4%, 44%, .5);
    }
    .btn-large {
        height: 3.25rem;
    }

    .btn-blue {
        --tw-border-opacity: 1;
        border-color: rgb(0 132 255 / var(--tw-border-opacity));
        --tw-bg-opacity: 1;
        background-color: rgb(0 132 255 / var(--tw-bg-opacity));
        fill: #fefefe;
        --tw-text-opacity: 1;
        color: rgb(254 254 254 / var(--tw-text-opacity));
        border-radius: 10px;
    }
}
</style>