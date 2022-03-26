<template>
  <div class="home">
    <el-carousel height="32rem" type="card">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
    <h2>精选系列</h2>
    <div class="series">
      <card  @click.native="details(item)" v-for="item in cardList" :item="item"></card>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
export default {
  data() {
    return {
      imgList: ["./imgs/1.png", "./imgs/2.png", "./imgs/3.png"],
      cardList:[
        {
          imgUrl:'./imgs/nft1.png',
          title:'举刀的阿瓦朋克',
          artist:'cc',
          price:'9755.00'

        },
        { 
          imgUrl:'./imgs/yutou.jpg',
          title:'电子鱼头',
          artist:'cc',
          price:'888.00'

        }
      ]
    };
  },
  components: {
    card,
  },
  methods:{
    async details(item){
      console.log(item)
      await this.$store.dispatch('changeIntroduce',item)
      await this.$store.dispatch('changeDetailShow')

      

    }
  }
};
</script>

<style scoped lang="less">
h2 {
  margin: 0 auto;
  margin-top: 1rem;
  font-size: 2rem;
}
.home {
  margin-top: 9rem;
  display: flex;
  align-items: left;
  flex-wrap: wrap;
  flex-direction: column;
  img {
    background-size: cover;
    width: 60rem;
    height: 100%;
  }
  .series {
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
.el-carousel {
  width: 80%;
  margin: 0 auto;
}
</style>
