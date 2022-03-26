import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/home/home';
import Market from '@/pages/market/market'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VueRouter)
Vue.use(ElementUI)
export default new VueRouter({
    routes:[
        {
            path:"*",
            redirect:'/home',
          
        }
        ,
        {
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
            meta:{
                showFooter:true
            }
        },



    ]
})