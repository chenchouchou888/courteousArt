<template>
  <el-container style="border: 1px solid #eee" class="all">
<el-header height="14rem">
 <img class="right" src="@/components/topnav/imgs/head.png">
 <div class="intro">
    <span class="dig">courteous Chill</span>
    <div>用户ID : 806832</div>
 <span>您来到 CCOURTEOUS 已经
   <span>8 </span>天
 </span>
 </div>

</el-header>


  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-custom"></i>个人中心</template>   
     <el-menu-item-group>
       
          <el-menu-item index="1-1">余额</el-menu-item>
          <el-menu-item index="1-2">我的藏品</el-menu-item>
          <el-menu-item index="1-2">我的盲盒</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-s-order"></i>订单明细</template>
        <el-menu-item-group>
          
          <el-menu-item index="2-1">我买到的</el-menu-item>
          <el-menu-item index="2-2">我卖出的</el-menu-item>
        </el-menu-item-group>
   
      
      </el-submenu>
       <el-submenu index="3">
        <template slot="title"><i class="el-icon-s-order"></i>艾隆</template>
        <el-menu-item-group>
          
          <el-menu-item index="3-1" @click.native="toDept">科室</el-menu-item>
          <el-menu-item index="3-2" @click.native="toHand">药品</el-menu-item>
        </el-menu-item-group>
   
      
      </el-submenu>
  
    </el-menu>
  </el-aside>
  
  <el-container>
 
    
    <el-main>
    </el-main>

  </el-container>
</el-container>



</template>



<script>
  export default {
   data() {
     return {
     }
   },
  methods:{
    toHand(){
      this.$router.push({
        name:'hand'
      })
    },
    toDept(){
      this.$router.push(
        {
          name:'dept'
        }
      )
    }
  },
  components:{
  }
  }
</script>




<style lang="less" scoped>
  .dig{
    background: linear-gradient(to right,blue,red);
    display: block;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 100%;
      height: 10rem;
    }

  }
  .intro{
    color: white;
    margin-left: 2rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    div{
      background: #999;
      text-align: center;
      width: 9rem;
      border-radius: 10rem;
      position: relative;
      right: 0.6rem;
      line-height: 2rem;
    }
    span span{
      color: red;
    }
  }
  
  .el-aside {
    color: #333;
  }
  .el-container.all{
      margin-top: 5rem;
      height: 48rem;
  }
  .el-header{
 
   background: url('https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvbG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
   background-size: cover;
   
  }
</style>