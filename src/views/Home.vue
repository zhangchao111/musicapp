<template>
  <topNav></topNav>
  <swipers></swipers>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import topNav from '@/components/global/topnav.vue'
import swipers from '@/components/global/swipers.vue'
export default defineComponent({
  naem:'Home',
  components:{
    topNav,
    swipers,
  },
  setup(){

  },
  methods:{

  }
})
</script>
<style lang="less">

</style>

