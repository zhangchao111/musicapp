<template>
    <div class="topnav">
        <div class="topnavLeft" @click="checkDrawer"><span class="m_iconfont m_iconliebiao1"></span></div>
        <div class="topnavMiddle">
            <div v-for="item in topList" :key="item.name" :class="[active==item.val?'active':'']" @click="checkPage(item.val)">{{item.name}}</div>
        </div>
        <div class="topnavRight"><span class="m_iconfont m_iconsousuo1" @click="checkSearch"></span></div>
    </div>
</template>
<script lang="ts">
    import {
        defineComponent,
        ref,
        reactive,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onBeforeUnmount,
        onUnmounted,
        watch,
        watchEffect
    } from 'vue'

    export default defineComponent({
        components: {},
        setup() {
            let active=ref<string>('index');
            const topList=reactive([
                {name:'我的',path:'',val:'index'},
                {name:'发现',path:'',val:'find'},
                {name:'云村',path:'',val:'skyCount'},
                {name:'视频',path:'',val:'video'},
            ])
            // 查看我的
            function checkDrawer(){
                console.log(1111)
            };
            // 切换页面
            function checkPage(obj:string){
                active.value=obj;
            }
            // 点击搜索
            function checkSearch(){
                console.log(333)
            }
            return {
                active,
                topList,
                checkDrawer,
                checkPage,
                checkSearch,
            }
        },
    })
</script>
<style>

</style>
