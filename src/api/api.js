//导入需要请求的地址以及请求拦截
import {NowPlayingListUrl,ComingSoonListUrl,DetailUrl} from '@/config/url'
import http from './http'

//正式发起请求,因为在请求地址处留了一个未赋值的参数，所以需要传参
export const NowPlayingListData=(page)=>{
    http.defaults.headers.info='film'
    return http.get(NowPlayingListUrl + page)
}
export const ComingSoonListData=(page)=>{
    http.defaults.headers.info='film'
    return http.get(ComingSoonListUrl + page)
}
export const DetailData=(filmId)=>{
    http.defaults.headers.info='info'
    return http.get(DetailUrl + filmId)
}