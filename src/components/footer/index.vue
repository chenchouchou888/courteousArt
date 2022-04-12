<template>
  <div class="footer">
    <img src="@/../public/imgs/wechat.jpg" alt="">
    <ul>
      <li>
        关于作者
        </li>
      <li><img src="@/../public/icons/email-fill.png">
      <span>cc604849909@gmail.com</span></li>
    </ul>
  </div> 
</template>

<script>
export default {
  name:'myfooter'

}
</script>

<style lang="less" scoped>
    .footer{
        width: 100%;
        background: rgb(244,244,244);
        height: 12rem;
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

        

          li{
            margin-bottom: 0.6rem;
            cursor: pointer;
            transition: 0.2s linear;

            &:first-of-type{
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: black;
          }
            
            &:hover{
              font-size: 1.03rem;
            }
            img{
              width: 1.2rem;
              height: 1.2rem;
              vertical-align: top;
              
            }
            
          }
          
          
        }

        img{
          width: 8rem;
          height: 8rem;
          
        }
    }
</style>