<template>
  <div class="wrapper">
      <card v-for="item in $store.state.market.searchList" :item="item" class="cc">
      </card>
  </div>
</template>

<script>
import card from '@/components/card'
export default {
    mounted(){
        console.log('???',this.$store.state.market.searchList)
    },
    components:{
        card
    }

}
</script>

<style lang="less">
.introduce{
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    margin-top: 1rem;
}
.wrapper{
    display: flex;
    box-sizing: border-box;
    padding-left: 3rem;
    padding-right: 2rem;
    padding-top: 1rem;
    flex-wrap: wrap;
    width: 100%;

    
}



</style>
