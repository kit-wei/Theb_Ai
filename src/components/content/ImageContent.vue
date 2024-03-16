<script lang="ts" setup></script>
<template>
    <div class="w-full h-full pb-[20px]">
        <div class="top"></div>
        <div class="bottom flex items-center">
            <div class="w-[50px] h-[44px] flex justify-center items-center">
                <svg
                    class="inline-block w-7 h-7 fill-[#7F8689] transition-colors dark:fill-n-4" width="24" height="24"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 1.995a1 1 0 0 1 .117 1.993L12 3.995l-5.232.001-1.357.037c-.438.036-.663.101-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.381-.18.819-.029.35-.035.78-.037 1.357v9.464l.037 1.357c.036.438.101.663.18.819a2 2 0 0 0 .801.835c.086-.135.179-.238.24-.304.114-.123.258-.259.414-.402l.158-.144 8.508-7.735.466-.405a2.01 2.01 0 0 1 .619-.343 2 2 0 0 1 1.115-.035c.261.067.47.187.64.303l.322.24.169.134 2.831 2.265c.366.292.689.55.93.882a3 3 0 0 1 .463.964c.087.316.104.643.107 1.002v.275.568c0 .671.039 1.372-.136 2.026a4 4 0 0 1-2.828 2.828c-.448.12-.956.135-1.609.136H6.531c-.258 0-.508 0-.718-.014l-.566-.031c-.562-.046-1.079-.145-1.564-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564-.038-.464-.043-1.018-.044-1.674V7.417l.044-1.674c.046-.562.144-1.079.392-1.564a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392.464-.038 1.018-.043 1.674-.044H12zm-4 3.5a3 3 0 1 1 0 6 3 3 0 1 1 0-6zm14.207-3.207a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L17.5 5.581l3.293-3.293a1 1 0 0 1 1.414 0z">
                    </path>
                </svg>
            </div>
            <input class="h-[48px] py-3 imgInput" placeholder="请输入您的图像提示..." type="text">
            <button class="w-[98px] h-10 btn">
                Generate
            </button>
        </div>
    </div>
</template>
<style lang="less" scoped>
.top {
    height: calc(100% - 56px);
}

.bottom {
    margin: 0 auto;
    width: calc(100% - 200px);
    height: 56px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
}
.imgInput{
    width: calc(100% - 150px);
    font-size: 16px;
    color: var(--text-center-color);
    font-weight: bold;
    border: none;
    outline: none;
    background-color: var(--color-background);
}
.btn{
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background-color: var(--image-btn-bg-color);
    color: var(--image-btn-text-color);
    font-weight: bold;
}
</style>