<template>
  <div class="footer">
    <img src="@/../public/imgs/wechat.jpg" alt="">
    <ul>
      <li>
        关于作者
        </li>
      <li>前端初学者</li>
      <li>欢迎交流</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .footer{
        width: 100%;
        background: rgb(244,244,244);
        height: 12rem;
        margin-top: 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        padding-left: 3rem;

        ul{
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          height: 10rem;
          flex: 1;
          margin-left: 6rem;

          :first-child{
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: black;
          }

          li{
            margin-bottom: 0.6rem;
            cursor: pointer;
            transition: 0.2s linear;
            
            &:hover{
              font-size: 1.3rem;
            }
          }
          
          
        }

        img{
          width: 8rem;
          height: 8rem;
          
        }
    }
</style>