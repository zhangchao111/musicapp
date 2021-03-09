<template>
    <div class="warper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in switlist" :key="index"><img :src="item.imageUrl" alt=""> </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script lang="ts">

import {defineComponent,onMounted,reactive,computed} from 'vue';
import Swiper ,{Autoplay,Pagination}  from 'swiper';
import 'swiper/swiper.less';
import { StateType } from '@/@types'
import { useStore } from 'vuex'
import { AppStateType } from '@/store/modules/app/state'

Swiper.use([Autoplay,Pagination])
   export default defineComponent({
        components:{
        },
       setup(){
           const store = useStore<StateType>()
           store.dispatch('app/getSwiperList')
           const switlist = computed(() => store.state.app.swiperList)
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
           });
           return{
               switlist
           }
       }
   })
</script>

<style lang="less">
    .warper{
        width:95%;
        height:3rem;
        margin:0px auto;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        .swiper-container{
            width:100%;
            height:100%;
            position: relative;
            .swiper-wrapper{
                width:100%;
                height:100%;
                .swiper-slide{
                    width:100%;
                    height:100%;
                    img{
                        width:100%;
                        height:100%
                    }
                }
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
