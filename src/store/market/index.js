import { reqGetCatelogyList,reqGetSearchInfo } from "@/api"

const state = {
    categoryList:[],
    searchList:[]
}
const mutations = {
    GETCATEGORYLIST(state,list){
        console.log(list)
        state.categoryList = list
    },
    GETSEARCHLIST(state,list){
        state.searchList = list
    }
 
}
const actions = {
    async getCategoryList({commit}){
        let result = await reqGetCatelogyList();
        if(result.code == 200)
        {
        
            commit('GETCATEGORYLIST',result.data)
        }
    },
    async getSearchList({commit},searchParams){
        let result = await reqGetSearchInfo(searchParams);
        if(result.code == 200)
        {
            commit('GETSEARCHLIST',result.data)
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