const state = {
    detailShow:false,
    imgUrl:'/imgs/nft1.png',
    name3d:'A头耳机杀人刀'
}
const mutations = {
    CHANGEDETAILSHOW(state){
        state.detailShow =  !state.detailShow
    },
    CHANGEINTRODUCE(state,item){
        state.imgUrl = item.imgUrl
        state.name3d = item.title
    }
}
const actions = {
    changeDetailShow({commit}){
        commit('CHANGEDETAILSHOW')
    },
    changeIntroduce({commit},item)
    {
        commit('CHANGEINTRODUCE',item)
    }
}

const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}