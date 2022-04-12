<template>
  <div id="app">
    <carddetail></carddetail>
    <topNav></topNav>
    <router-view></router-view>
  </div>
</template>

<script>
import topNav from './components/topnav'
import carddetail from './components/carddetail'
export default {
  name: 'App',
  components: {
    topNav,
    carddetail
  }
}
</script>

<style>
#app {
  font-family:'cc';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}

   @media screen and (max-width: 538px) {
      html{
      font-size: 10px;
    }
  }



</style>
