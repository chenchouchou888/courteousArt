import { reqLoginResult } from "@/api"

const state = {
    detailShow:false,
    imgUrl:'/imgs/nft1.png',
    name3d:'A头耳机杀人刀',
    loginInfo:null,
    handResult:[{"id":"a","name":"设置","children":[{"id":"b","name":"门户设置","children":[{"id":"c","name":"门户菜单设置"},{"id":"cc","name":"门户菜单设置2"}]},{"id":"d","name":"系统管理","children":[{"id":"e","name":"定时任务","children":[{"id":"feee","name":"定时任务下的定时任务"}]},{"id":"ee","name":"定时任务2"}]}]}]
}
const mutations = {
    CHANGEDETAILSHOW(state){
        state.detailShow =  !state.detailShow
    },
    CHANGEINTRODUCE(state,item){
        state.imgUrl = item.imgUrl
        state.name3d = item.title
    },
    LOGININFO(state,loginInfo){
        state.loginInfo = loginInfo
        //存储本地
        localStorage.setItem("loginInfo",JSON.stringify(loginInfo))
    },
   
}
const actions = {
    changeDetailShow({commit}){
        commit('CHANGEDETAILSHOW')
    },
    changeIntroduce({commit},item)
    {
        commit('CHANGEINTRODUCE',item)
    },
    async loginInfo({commit}){
        let result = await reqLoginResult();
        if(result.code == 200)
        {
            commit('LOGININFO',result.data)
        }
    },
   
}

const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}