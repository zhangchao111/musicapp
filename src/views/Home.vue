<template>
  <div class="home">
    <div class="d1"><span class="m_iconfont m_iconsousuo1"></span></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
<style lang="less">
  .d1{
    width:3.75rem;
    height:3.75rem;
    background: skyblue;
  }
</style>

