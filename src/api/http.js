import axios from 'axios'

axios.defaults.baseURL='https://m.maizuo.com/'

//请求拦截
axios.interceptors.request.use(function(config){
    let host='mall.film-ticket.film.list';
    let info=config.headers.info;
   
    if('cinema'==info){
        host='mall.film-ticket.cinema.list'
    }
    if('info'==info){
        host='mall.film-ticket.film.info'
    }
    // console.log(info,host)
    config.headers={
        "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"16023005322961672008368129","bc":"310100"}',
        "X-Host":host
    }
    return config
},function(err){
    //错误处理
})

export default axios