<template>
    <div class="outer-box flex flex-col justify-between" ref="boxRef">
        <div>
            <div class="header flex justify-between items-center pl-[10px]">
                <div v-if="isOpen">
                    <span class="text-[30px] text-[#fff]">THEB.AI</span>
                </div>
                <button class="text-[#fff]" @click="closeAndOpen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-ea893728=""><path fill="#6c7275" d="M19.5 2A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h15zM10 4H6a2 2 0 0 0-2 2h0v12a2 2 0 0 0 2 2h0 4a2 2 0 0 0 2-2h0V6a2 2 0 0 0-2-2h0z"></path></svg>
                </button>
            </div>
            <div class="h-[48px] flex items-center item mt-[30px]" :class="{active:clickIndex===1}" @click="clickIndex=1" :style="{paddingLeft:isOpen?'20px':'10px',paddingRight:isOpen?'20px':'10px',}">
                <div>
                    <svg class="item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="#3e90f0" d="m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"></path><path fill="#3e90f0" d="M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4"></path></svg>
                </div>
                <span class="text-sm text-[#fff] font-bold ml-10" v-if="isOpen">Chat</span>
            </div>
            <div class="h-[48px] flex items-center item mt-[10px]" :class="{active:clickIndex===2}" @click="clickIndex=2" :style="{paddingLeft:isOpen?'20px':'10px',paddingRight:isOpen?'20px':'10px',}">
                <div>
                    <svg class="item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="#3fdd78" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z"></path></svg>
                </div>
                <span class="text-sm text-[#fff] font-bold ml-10" v-if="isOpen">Search</span>
            </div>
            <div class="h-[48px] flex items-center item mt-[10px]" :class="{active:clickIndex===3}" @click="clickIndex=3" :style="{paddingLeft:isOpen?'20px':'10px',paddingRight:isOpen?'20px':'10px',}">
                <div>
                    <svg class="item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-ea893728=""><path fill="#d84c10" d="M21 14a1 1 0 0 1 1 1h0v.839l-.031 1.356c-.032.395-.104.789-.296 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.829.031-1.357.031h0H17a1 1 0 1 1 0-2h0 .8l1.232-.024c.272-.022.372-.06.422-.085a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422.023-.283.024-.656.024-1.232h0V15a1 1 0 0 1 1-1zM3 14a1 1 0 0 1 1 1v1.196l.023.836c.022.272.06.372.085.422a1 1 0 0 0 .437.437c.049.025.15.063.422.085.283.023.656.024 1.232.024H7a1 1 0 1 1 0 2h-.839c-.527 0-.982 0-1.356-.031-.395-.032-.789-.104-1.167-.296a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167-.024-.3-.029-.651-.03-1.049V15a1 1 0 0 1 1-1zm5-6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1h0v6a1 1 0 1 1-2 0h0V9a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM7 4a1 1 0 1 1 0 2h0-1.196l-.836.023c-.272.022-.372.06-.422.085a1 1 0 0 0-.437.437c-.025.049-.063.15-.085.422-.017.213-.022.475-.023.836V9a1 1 0 1 1-2 0h0V7.854l.03-1.049c.032-.395.104-.789.296-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C5.18 4 5.634 4 6.161 4zm11.146 0l1.049.03c.395.032.789.104 1.167.296a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.829.031 1.356h0V9a1 1 0 1 1-2 0h0v-.8l-.024-1.232c-.022-.272-.06-.372-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085A11.34 11.34 0 0 0 18.196 6H17a1 1 0 1 1 0-2h0z"></path></svg>
                </div>
                <span class="text-sm text-[#fff] font-bold ml-10" v-if="isOpen">Image</span>
            </div>
        </div>
        <div class="footer flex p-1">
            <div class="flex-1 flex justify-around items-center child" @click="toLight" v-if="isOpen || (!isOpen && isDark)" :class="{'btn-active':!isDark}">
                <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-ea893728=""><path d="M12 19a1 1 0 0 1 1 1h0v2a1 1 0 1 1-2 0h0v-2a1 1 0 0 1 1-1zm-4.979-2.017a1 1 0 0 1 .083 1.32l-.083.094-1.414 1.414a1 1 0 0 1-1.497-1.32l.083-.094 1.414-1.414a1 1 0 0 1 1.414 0zm11.372 0l1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 1.414-1.414zM12 6a6 6 0 1 1 0 12 6 6 0 1 1 0-12zm-8 5a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h2zm18 0a1 1 0 1 1 0 2h0-2a1 1 0 1 1 0-2h0zM5.513 4.11l.094.083 1.414 1.414a1 1 0 0 1-1.32 1.497l-.094-.083-1.414-1.414a1 1 0 0 1 1.32-1.497zm14.294.083a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM12 1a1 1 0 0 1 .993.883L13 2v2a1 1 0 0 1-1.993.117L11 4V2a1 1 0 0 1 1-1z"></path></svg>
                <span class="text-sm text-[fefefe] font-[700]" v-if="isOpen">Light</span>
            </div>
            <div class="flex-1 flex justify-around items-center child" @click="toDark" v-if="isOpen || (!isOpen && !isDark)" :class="{'btn-active':isDark}">
                <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-ea893728=""><path d="M7.744 1.089C3.672 2.93 1 6.991 1 11.538 1 17.868 6.132 23 12.462 23c4.547 0 8.608-2.672 10.449-6.744.38-.84-.483-1.703-1.323-1.323-1.213.548-2.532.836-3.894.836-5.226 0-9.462-4.236-9.462-9.462 0-1.362.287-2.682.836-3.894.38-.84-.483-1.703-1.323-1.323zM6.335 4.325l.078-.066-.003.018a11.53 11.53 0 0 0-.179 2.029c0 6.33 5.132 11.462 11.462 11.462l.411-.007c.41-.014.816-.051 1.218-.108l.418-.068-.065.079C17.914 19.737 15.303 21 12.462 21 7.236 21 3 16.764 3 11.538c0-2.841 1.263-5.452 3.335-7.213z"></path></svg>
                <span class="text-sm text-[#6c7275] font-[700]" v-if="isOpen">Dark</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const boxRef = ref();
const clickIndex = ref(1);
const isOpen = ref<boolean>(true);
const isDark = ref(false);
const closeAndOpen = function(){
    if(isOpen.value){
        boxRef.value.style.width = '100px';
        isOpen.value = false;
    }else{
        boxRef.value.style.width = '280px';
        isOpen.value = true;
    }
}
const toLight = function(){
    let dom = document.getElementsByTagName('html')[0]
    dom.setAttribute('class','light')
    isDark.value = false;
}
const toDark = function(){
    let dom = document.getElementsByTagName('html')[0]
    dom.setAttribute('class','dark')
    isDark.value = true;
}
</script>
<style lang="less" scoped>
.outer-box{
    width: 280px;
    height: 100%;
    transition: width 0.3s ease;
    padding-left: 28px;
    padding-right: 24px;
    padding-bottom: 28px;
    .footer{
        width: 100%;
        height: 48px;
        border-radius: 8px;
        background-image: linear-gradient(to left, #323337, rgba(70,79,111,0.3));
        svg{
            fill: #6c7275;
        }
        .btn-active{
            background-color: #000000;
            span{
                color: #fefefe !important;
            }
            svg{
                fill: #fefefe !important;
            }
        }
        .btn-icon{
            width: 24px;
            height: 24px;
        }
        .child{
            border-radius: 8px;
            padding-left: 8px;
            padding-right: 8px;
            cursor: pointer;
            color: #6c7275;
        }
    }
    .header{
        height: 50px;
        width: 100%;
        .svg{
            width: 40px;
            height: auto;
        }
    }
    .item{
        padding-left: 20px;
        padding-right: 20px;
        height: 48px;
        width: 100%;
        border-radius: 8px;
        cursor: pointer;
        .item-icon{
            width: 30px;
            height: auto;
        }
    }
}
.active{
    background-image: linear-gradient(to left, #323337, rgba(70,79,111,0.3));
}
</style>