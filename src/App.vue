<template>
  <div id="app">
    <carddetail></carddetail>
    <topNav></topNav>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import topNav from './components/topnav'
import myFooter from './components/footer'
import carddetail from './components/carddetail'
export default {
  name: 'App',
  components: {
    topNav,
    myFooter,
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



</style>
