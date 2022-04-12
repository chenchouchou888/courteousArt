<template>
  <el-container style="border: 1px solid #eee;" class="all">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-grid"></i>分类</template>
        <el-menu-item-group v-for="item in $store.state.market.categoryList" >
        
          <template slot="title">{{item.title}}</template>
           <el-menu-item :index="detail.id" v-for="detail in item.catelogytwo" @click="search(detail)">{{detail.title}}</el-menu-item>
        </el-menu-item-group>
       
     
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>市场类型</template>
        <el-menu-item-group>
          <template slot="title">藏品来源</template>
          <el-menu-item index="3-1">官方出品</el-menu-item>
          <el-menu-item index="3-2">艺术家</el-menu-item>
        </el-menu-item-group>
      
      </el-submenu>
    
    </el-menu>
  </el-aside>
 <div class="right">
    
  <router-view></router-view>
  </div>

  

</el-container>

</template>

<script>
export default {
    data() {
        return {
            searchParams:{
                categoryone:null,
                searchKey:null
            }
        }
    },
    created(){
        this.$store.dispatch('getCategoryList')
    },
    methods:{
    search(detail){
        this.searchParams.categoryone = detail.id
        this.$store.dispatch('getSearchList',this.searchParams)
        this.$router.push({
            name:'shopList',
        })
    }
    }
   
}
</script>

<style lang="less" scoped>

.el-container.all{
    margin-top: 5rem;
    height: 90vh;
    width: 100%;
}
.right{
    overflow: scroll;
    flex: 1;
}

</style>

