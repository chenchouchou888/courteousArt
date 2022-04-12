//API统一管理

import request from "./request"
import mockRequests from './mockAjax'

export const reqLoginResult = ()=>
    request({
    url:'/login',
    method:'post'})

export const reqGetCatelogyList = ()=>
    request({
    url:'/catelogy',
    method:'get'})

export const reqGetFloorList = ()=>{
    return mockRequests.get('/floor')
}

//搜索模块
export const reqGetSearchInfo = (params)=>
    request({
        url:'/shoppings',
        method:'post',
        data:params
    })
