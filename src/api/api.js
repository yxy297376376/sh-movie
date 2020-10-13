//导入需要请求的地址以及请求拦截
import {NowPlayingListUrl,ComingSoonListUrl,DetailUrl,CityUrl,cinemaUrl} from '@/config/url'
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
export const CityListData= async ()=>{
    http.defaults.headers.info='city'
    let ret = await http.get(CityUrl);
    let cities=ret.data.data.cities;
    //存储所有大写字母的数组
    let cityIndex=[];
    //存储城市名称数据的数组
    let dataList=[];
    //存放筛选出来已有的大写字母
    let indexList=[]
    
    //循环生成26个大写字母
    for(let i = 65;i<=90;i++){
        cityIndex.push(String.fromCharCode(i))
    }

    cityIndex.forEach((index)=>{
        let cityArr = cities.filter(
            element => index.toLowerCase() == element.pinyin.substr(0,1)
        )
        if(cityArr.length >0){
            indexList.push(index);
            dataList.push({
                index,
                data:cityArr
            })
        }
    })
    return Promise.resolve([indexList,dataList])
}
export const cinemaData=()=>{
    http.defaults.headers.info='cinema'
    return http.get(cinemaUrl)
}