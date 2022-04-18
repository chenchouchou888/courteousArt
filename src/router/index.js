import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/home/home';
import Market from '@/pages/market/market'
import Login from '@/pages/login'
import ElementUI from 'element-ui'
import store from '@/store/home'
import User from '@/pages/user'
import ShopList from '@/pages/shopList'
import handler from '@/pages/handler'
import dept from '@/pages/dept'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VueRouter)
Vue.use(ElementUI)
const router = new VueRouter({
    routes:[
        {
            path:"*",
            redirect:'/home',
          
        }
        ,
        {
            name:"home",
            path:"/home",
            component:Home,
            meta:{
                showFooter:true
            }
        },
        {
            name:"market",
            path:"/market/:keyword?",
            component:Market,
            children:[{
                name:'shopList',
                path:'/shopList',
                component:ShopList
            }]
        },
        {
            name:"login",
            path:"/login",
            component:Login,

        },
        {
            name:'User',
            path:"/User",
            component:User
        },
        {
            name:'hand',
            path:'/drug',
            component:handler
        },
        {
            name:'dept',
            path:'/dept',
            component:dept
        }



    ],
    
})

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   const nextRoute = ['User', 'market'] // 需要登录的页面
//   store.state.loginInfo = JSON.parse(localStorage.getItem("loginInfo"))
//   let isLogin = store.state.loginInfo  // 判断是否登录，本地存储有用户数据则视为已经登录
//     if (!isLogin && nextRoute.indexOf(to.name) != -1) {


//         ElementUI.MessageBox('请先登录')

//         router.push({
//             name: 'login'
//         })
//         return

//   }

//   next() 
// })

export default router