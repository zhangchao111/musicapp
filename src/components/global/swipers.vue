<template>
    <div class="warper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"> 1 </div>
                <div class="swiper-slide">2 </div>
                <div class="swiper-slide">3 </div>
                <div class="swiper-slide">4 </div>
                <div class="swiper-slide">5 </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script lang="ts">

import {defineComponent,onMounted,reactive} from 'vue';
import Swiper ,{Autoplay,Pagination}  from 'swiper';
import 'swiper/swiper.less';
import { StateType } from '@/@types'
import { useStore } from 'vuex'
import { setStoreState } from '@/store/utils'
import { AppStateType } from '@/store/modules/app/state'

Swiper.use([Autoplay,Pagination])
   export default defineComponent({
        components:{
        },

       setup(){
           onMounted(() => {
               new Swiper('.swiper-container', {
                   loop: true, // 循环模式选项
                   autoplay:{
                       delay:5000,
                       disableOnInteraction: false
                   },
                   // 如果需要分页器
                   pagination: {
                       el: '.swiper-pagination',
                       clickable: true,
                   },
               });
               const store = useStore<AppStateType>()
               store.dispatch('app/getSwiperList')
               console.log(store,99)
           });

           return{

           }
       }
   })
</script>

<style lang="less">
    .warper{
        width:100%;
        height:3rem;
        border:1px solid red;
        .swiper-container{
            width:100%;
            height:100%;
            position: relative;
            .swiper-slide{
                width:100%;
                height:100%;
                background:blue;
            }
            .swiper-pagination{
                position: absolute;
                bottom: 0px;
                left: 0px;
                height: 20px;
                width: 100%;
                z-index: 99;
                text-align: center;
                line-height: 20px;
                .swiper-pagination-bullet{
                    width: 5px;
                    height: 5px;
                    display: inline-block;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.5);
                    margin:0px 3px;
                    &.swiper-pagination-bullet-active{
                        background: rgba(217,53,47,0.8);
                    }
                }
            }
        }

    }

</style>
