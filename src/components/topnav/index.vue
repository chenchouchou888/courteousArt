<template>
  <div class="navWrapper">
    <img id="logo" src="./imgs/cclogo.png" alt="logo" @click="toHome" />
    <ul>
      <li @click="toHome" :class="{ deep: $route.name == 'home' }">首页</li>
      <li><img src="./imgs/按键分割线.png" alt="" /></li>
      <li @click="toMarket" :class="{ deep: $route.name == 'market' || $route.name == 'shopList' }">
        市场
      </li>
    </ul>

    <img class="search" src="./imgs/search.png" alt="" @click="changeSearch" v-if="Searchshow" />
    <transition enter-to-class="animate__animated animate__fadeInRight animate__faster"
    leave-to-class="animate__animated animate__fadeOutRight animate__faster">
    <div v-show="isSearching" class="searchWrap">
      <el-input v-model="searchKey" placeholder="请输入内容" @keydown.enter.native="search"></el-input>
      <img class="search" src="./imgs/关闭1.png" alt="" @click="changeSearch" />
    </div>
    </transition>
    

    <img class="right" src="./imgs/head.png" alt="" @click="toUser"/>
  </div>
</template>

<script>
import "animate.css"
export default {
  data() {
    return {
      Searchshow:true,
      isSearching: false,
      searchKey: "",
    };
  },
  methods: {
    toUser(){
      this.$router.push("User")

    },

    toHome() {
      this.$router.push("/home");
    },
    toMarket() {
      this.$router.push("/market");
    },
    changeSearch() {
      this.Searchshow = false;
      this.isSearching = !this.isSearching;
      if(!this.isSearching)
      {
          setTimeout(() => {
              this.Searchshow = true
          }, 520);
      }
      
    },
   
  }
};
</script>

<style lang="less" scoped>
.deep {
  color: #666 !important;
}

.searchWrap{
  width: 18rem;
  display: flex;
  align-items: center;
}
.el-input {
  flex: 1;
}
.right {
  padding-right: 2rem;
  cursor: pointer;
}
.search {
  width: 2rem;
  height: 2rem !important;
  cursor: pointer;
  vertical-align: middle;
  margin: 1rem !important;
}

.navWrapper {
  background: white;
  z-index: 9;
  height: 5rem;
  width: 100%;
  box-shadow: 0px 2px 10px #5555;
  position: fixed;
  display: flex;
  justify-content: left;
  align-items: center;

  img {
    height:3rem;
    margin-left: 2rem;
  }
  #logo {
    cursor: pointer;
  }

  li {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    color: rgb(231, 231, 231);
  }
  ul {
    margin-left: 2rem;
    flex: 1 0 6rem;
    img {
      height: 1.3rem ;
      margin-left: 0rem;
    }
  }
}
</style>