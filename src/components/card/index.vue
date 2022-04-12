<template>
  <div
    :class="{ card: $route.name == 'home', cardTwo: $route.name == 'shopList' }"
    @click="test()"
  >
    <img :src="item.imgUrl" alt="" />
    <div class="introduce">
      <span class="title">{{ item.title }}</span>
      <div class="bqul">
        <div class="bq">
          <span class="bqText">艺术家:</span>
          <span
            ><img src="@/../public/icons/bussiness-man.png" alt="" />{{
              item.artist
            }}</span
          >
        </div>
        <div class="bq">
          <span class="bqText">价格:</span>
          <span
            ><img src="@/../public/icons/dollar.png" alt="" />{{
              item.price
            }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const debounce =  function(fn){
  console.log("enter debounce");
  let time = null;
  return  () => {
    if (time) {
      clearTimeout(time);
    }

    time = setTimeout(
      fn, 500);
  }
}
export default {
  props: ["item"],
  methods: {
  
  
},
  
  mounted() {
    this.test = debounce(()=>{
      this.$store.dispatch('changeDetailShow')
    })
  },
};
</script>

<style lang="less" scoped>
.card {
  position: relative;
  border-radius: 1rem;
  width: 20rem;
  height: 30rem;
  background: white;
  box-shadow: 5px 5px 10px #999;
  margin: 1rem;
  animation: flyout 0.2s linear;
  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
    height: 20rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  .introduce {
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex: 1;

    img {
      width: 2rem;
      height: 2rem;
      vertical-align: middle;
    }

    .title {
      font-size: 1.6rem;
    }

    .bq {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .bqText {
        color: rgb(203, 203, 203);
      }

      span {
        vertical-align: middle;
      }
    }
    .bqul {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 0.3rem;
    }
  }
}

.cardTwo {
  position: relative;
  border-radius: 1rem;
  width: 16rem;
  height: 25rem;
  background: white;
  box-shadow: 5px 5px 10px #999;
  margin: 1rem;
  animation: flyout 0.2s linear;
  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
    height: 16rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  .introduce {
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex: 1;

    img {
      width: 2rem;
      height: 2rem;
      vertical-align: middle;
    }

    .title {
      font-size: 1.6rem;
    }

    .bq {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .bqText {
        color: rgb(203, 203, 203);
      }

      span {
        vertical-align: middle;
      }
    }
    .bqul {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 0.3rem;
    }
  }
}

.card:hover,
.cardTwo:hover {
  right: 0.3rem;
  bottom: 0.3rem;
  animation: fly 0.2s linear;
}
@keyframes fly {
  from {
    right: 0rem;
    bottom: 0rem;
  }
  to {
    right: 0.3rem;
    bottom: 0.3rem;
  }
}

@keyframes flyout {
  from {
    right: 0.3rem;
    bottom: 0.3rem;
  }
  to {
    right: 0rem;
    bottom: 0rem;
  }
}
</style>