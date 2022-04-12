<template>
  <ul>
      <li v-for="item in List">
          {{item.name}}
          <tree :List="item.children"></tree>
      </li>
  </ul>
</template>

<script>
export default {
    name:'tree',
    props:['List'],
    methods:{
    }
    
}
</script>

<style scoped lange="less">
  
</style>
