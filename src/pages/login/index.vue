<template>
  <div class="loginwrapper">
      <div class="login">
            <h2>welcome</h2>
            <div class="username">
                <input type="text" >
            </div>
            <div class="password">
                <input type="password" >
            </div>
            <button @click="toUser">login</button>
      </div>
  </div>
</template>

<script>

export default {
    methods:{
        toUser(){
            let that = this
            this.$store.dispatch('loginInfo').then(function(){
                that.$router.push(
                {
                    name:'User'
                })
            })
            
          
                      
        }
    }

}
</script>

<style lang="less" scoped>
    input{
        border: none !important;
        outline: none;
        background: transparent !important;
        font-size: 1.3rem;
        flex: 1;

    }
  

 
    .loginwrapper{
        height: 100vh;
        width: 100%;
        background: url(./imgs/loginBackground.jpg);
        background-size: cover;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .login{
        border-radius: 2rem;
        height: 30rem;
        width: 36rem;
        background: rgba(0, 0, 0, 0.2);
        margin-top: 2rem;
        margin-right: 6rem;
        display: flex;
        flex-flow: column;
        box-sizing: border-box;
        padding: 3rem;
        box-shadow: 5px 5px 10px #666;
        align-items: center;
        
        h2{
            font-size: 3rem;
            text-align: center;
            color: white;
            margin-bottom: 3rem;
        }
     
        .username,.password{
            height: 4rem;
            background: white;
            margin-bottom: 2rem;
            border-radius: 2rem;   
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            padding-left: 3rem;
        }

        button{
            outline: none;
            border: none;
            width: 50%;
            height: 3rem;
            background: transparent;
            font-size: 1.6rem;
            color: white;
            cursor: pointer;
        }
    }
    
</style>