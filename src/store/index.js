import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import market from './market'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home,
        market
    }
})