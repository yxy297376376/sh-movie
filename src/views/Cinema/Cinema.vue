<template>
    <div class="main">
        <div class="cinema-list">
            <header class="header">
                <div class="left">
                    <div class="city">
                        <span>{{city}}</span>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
                         alt="" width="6px" height="3px">
                    </div>
                </div>
                <div class="title">
                    <div>影院</div>
                </div>
                <div class="right">
                    <div>
                        <div class="toCinemaSearch" @click="goSearch()">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAMAAABQrCHsAAABlVBMVEVHcEwaGh8/Pz8ZGxszMzMZGhwZGhsZGhsZGhsZGhscHBwnJycZGhskJCQaGh0fHx8ZGhsaGiMeHh4ZGhsZGhsbGxsZJiYaGhsZGhsZGhwZGhwZGxsZGxsaGhsfHx8ZGhsbGxsqKioaGhsbGxsZGxsbGxsZGhwaGh8ZGhskJCQZGxsZHh4ZGxsZGhsaGh0aGhsZGhsZMzMaGh0ZGhseHh4ZGhsZGhseHh4ZGhsZGhsZHh4aGh0aGhsZGhwbGxsaGh4ZIiIbGxsZGhwbGxsZGxsaGh1/f38aGhsZGxshISEZGxsZGxsZGhsZGhwfHx8aGh4aGhsdHR0ZGxv///8ZGhsqKioaGhwbGxtVVVUaGhwbGxsaGh8ZGhsZGxsaGhwZGxsaGhwaGhwgICAiIiIcHBwZGhsZGxsbGxsZGhsZGxsaGhwbGxsZGhsaGiAZGhwaGhsZGxsaGhwZGxsZGhwaGhsZHBwaGhwZHBwaGhwaGh0aGh0ZGhwbGxsaGh0aGhoZGhwaGiEZGxsZHBwZHR0aGhsaGhsZGhsIL5M3AAAAhnRSTlMAOQTsBeP76P73SA3qB2kY+B0i/fRBFKbfx62elq8QtzgG11V5L70w/BXOO6DeV6T2CnLwKsDWIenVMla5mUo6HhysQs9NAsSXF4uE06IITJwjggHMDFhxA5BAMd3Zj52Iah8PG/JmUuCDfS7LJ7aSqXVl0etQYlp8X2i+JXtz0CZ6Wzy4w4GfxwoAAAJjSURBVBgZrcEFUxQBAIbh77qL7m4ElFCxCQWDUFBQaaXDwu56f7cwzHLHsXe7N+Pz6D9pfPehovJvZcWHd42yx1n4uISkkseFTlmZejRHurlHU8pqaJpDruLN6Nvfb6ObxS4OTQ8pM/dVDoQXnszKMPtkIcyBq25lUNQHFDwI6aTQgwKgr0imejuArphOi3UBHb0yEfNAS7fMdbeAJ6ZTIqXQE1QmwR4ojSjdGHgLlVmhF8aU5hfwSdlEgfc6IVICo8puFEpqlWoGfA+V3UMfzCjFMxdEZSUKrmdKWoN5p6w452FNSXuwLGvLsKdjoTj+57L23E88JEM97MiOHaiX4QVsyY4teCFDGazLjnUok6EUamSHA0pl2IAV2bECGzLEISI7IhCXYR+KZEcR7MvwBrZlxza8keEPBGVHEKplKIfXsuM1lMvwCl7KjpfwSoZdWK2VtdpV2NWxOgjKWhDqlLQExbJWDEtKegr+Zllp9sNTpRiEK7JyBQaV6ocXrim7a+D9ohMqwJWnbPJcUKGTWj3QH1JmoX7wtCrNpbNQfU6ZnKuGs5d0ymWgLSFziTbgskx8BXztMtPuAy7myczHOOSfuaF0N87kgx/CDplx+IDAnftKdf9OAPB9C0CgU2YSlRy6d9dx+5akW7cdd+9xqDKhmjD4G2Tq+ghHvJ7vHi9HRq7rwIXzQLlbpm6WFZCqoOymjlQ1AZ+rZG58YnLYlw/k+4YnJ8Z1zL0I1OUpM+dA44BT6Rr8EHYoV/UBCHQqVzUXwf9TubpwHih3K0dVTUCTWzlyLwLvlbOGlkCzctca0z9q9NKFAyAIHQAAAABJRU5ErkJggg=="
                             alt="" width="18px" height="18px">
                        </div>
                    </div>
                </div>
            </header>
            <div class="cinema-list-tag">
                <div class="cinema-list-tag-name">
                    <label for="">
                        全城
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
                         alt="" width="6px" height="3px" style="display: none;">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
                         alt="" width="6px" height="3px" >
                    </label>
                    <label for="" >
                        APP订票
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
                         alt="" width="6px" height="3px" style="display: none;">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
                         alt="" width="6px" height="3px">
                    </label>
                    <label for="">
                        最近去过
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAANlBMVEVHcEz/Xxb/Xxb/Xxf/Xxb/bST/ZBv/YBn/Xxb/Xxf/Xxf/Xxb/YBb/Xxb/YBb/YBb/YRb/XxYVPc+mAAAAEXRSTlMA5Z7SygccPfpr6OmSfp9ycXeG0lYAAABPSURBVAjXVY05EsAgDMTM4Zgzif7/2RTABFTtqNCKDCwEk4OcIOVNqAcAr8tcEYgRiNfMFMCr3kCxM7NWB+o8swp0cX9hVJ08run23dz7ASR9A7q9wA9qAAAAAElFTkSuQmCC"
                         alt="" width="6px" height="3px" style="display: none;">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
                         alt="" width="6px" height="3px">
                    </label>
                </div>
            </div>
            <div class="cinema-layer"></div>
            <div class="cinema-list-wrap">
                <ul class="cinema-list">
                    <li class="cinema-list-item" v-for="(item,index) in cinemas" :key="index">
                        <a href="" class="cinema-item-wrap">
                            <div class="cinema-info-lf cinema-info">
                                <span class="cinema-name">{{item.name}}</span>
                                <img src="data:image/png;base64,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"
                                 alt="" style="display: none;">
                                <span class="cinema-address">{{item.address}}</span>
                            </div>
                            <div class="cinema-info-rt cinema-info">
                                <div>
                                    <span class="cinema-lowPrice price-fmt">
                                        <i>￥</i>
                                        <span class="interge" style="font-size: 15px;">{{item.lowPrice|parsePrice}}起</span>
                                    </span>
                                    <span class="cinema-gpsAddress">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAA1CAMAAAD1YwKXAAABblBMVEX////s7O7NztHFx8r+/v7AwsbHycy+wMS/wcXCxMje3+H5+frt7e/09PXT1df39/fV1tnz8/T8/Pz6+vv9/f3j5ObGyMv7+/vO0NPBw8ff4OLLzdDBwsbz9PT6+vro6er39/jY2dz29vf4+Pnx8vPs7e7n6OnGyMzJy87P0dTt7u/l5uji4+Xh4uTGx8vExsrNz9L09fXMztHR0tXHyMzT1NfIys3y8/TX2Nvd3uDCw8f4+fnq6+zu7/Dn6Orl5uf6+/vDxMj9/v77+/zX2Nrn5+ns7O3Iys7m5+nx8fLi4+TDxcj19vbk5efS09bKzM/AwcXv7/DQ0tTp6evb3N7c3d/3+PjZ2tzt7e7Dxcnb3N/U1tjQ0tXFx8vR09by8vPj5OXX2dv4+Pj5+fn19fbU1djY2dvS1NbJys7ExcnMzdH5+vrg4ePw8fLLzND+///7/PzP0NPr7O3a293W19rQ0dTk5ebW2Nr8/f3R09WCbK1KAAACgklEQVRIx52UV1vbQBREx7bks7LBNBeMDab3DoGEhJBACr0kpPfee//3eZCFZZDsfJmn3auR9s7s6Ep+tJV+fbnq5OPTqfEZheHT+qyhgsnDvkDaYJxjsHu6T7DORgHsa5mD7dZ098b1S1MAduYYbfkNENtp9ZU+7AK8yvlpJQPFifSxl/vbgSFfl8s2ZBcDek4YWGjzdjMOvO0KFDeQh4LXzR5k34WYNWDgibscg3ynV29MRGN2LJpo9ApjYDYkqXUKJsrFptSReammcu0FfJSkCZhcdUsNjs9lp8EtPi3CdUmzsF6mGTDNkaSVjDQbMGViAnalPrBdQU0OxFvKp7XEwXGP7gN7TT9hzn2UgnhbJTpxSLnLWbis77DjKgXT4nOkxYCrehN69AMOvDaaq6xrhoQkaRTmNAzbkqQoRKp4EYi69wV7ugiujBgkq3hJiEmSPsOWimBJkmxv4cEC21sUlYULdb7XBlkVoLdOf71Q0Jz3OFzvFfijb9BRx78OONRXuFbnPkYgotZ99nM177fLYP+WpmGlZl4y0O4G9qpq5M8agvOSVqfgXI08D0LWkqT38NoK/T/Sk+BOhZwD46HT6QzEygNgBZa6Q2j9ptKVojASTEsvwKmjXacJO/kSOM8q2w6wHwXQLgMlf6Ed4msnaItFuFU9Ju/Aw+O0riwUqrOrK3i5qeS5HS52B/hkBqoqPWBGT/Z8H5xe3z4DPA7QlpuH4cqAbjBwOtCrzrzP0+cOTFvB5pcqWi7EYagr7M5vgIl4UpcaQ7OhkbKWl94LIcjNw3BaGWBTtdCZh3ujoVIrOA/YELXq8NQD8CBZjyarAHa/6uPmFoP6F9y+q//HXzl1QJFrg6y6AAAAAElFTkSuQmCC"
                                         alt="" style="display: none;">
                                         <strong>距离未知</strong>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Loading from "@/components/Loading";
import betterScroll from 'better-scroll'
import {cinemaData} from '@/api/api'
import {mapState} from 'vuex'

export default {
    data() {
        return {
            loading:true,
            height:0,
            bs:null,
            flag:true,
            cinemas:[],
        }
    },
    components:{
        Loading
    },
    async mounted() {
        let ret = await cinemaData();
        this.cinemas=ret.data.data.cinemas;
        console.log(this.cinemas);
    },
    computed: {
        ...mapState(['city'])
    },
    filters:{
        parsePrice:function(value){
            return value=value/100;
        }
    },
    methods: {
        goSearch:function(){
            this.$router.push({path:"/search"})
        }
    },

}
</script>
<style lang="scss" scoped>
.main, body {
    height: 100%;
}

div {
    box-sizing: border-box;
}
body, button, input, select, table, textarea {
    font: 12px/1.5 Tahoma,Helvetica,Arial,sans-serif;
    font-family: Microsoft YaHei,Tahoma,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    color: #2c3e50;
}
.cinema-list .header {
    z-index: 20;
}
header>div{
    float: left;
    height: 44px;
}
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 30;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    .left {
    min-width: 15%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 15px;
    .city {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    span {
    display: inline-block;
    font-size: 13px;
    max-width: 58px;
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 5px;
    color: #191a1b;
}
img {
    vertical-align: middle;
}
}
}
.title{
    text-align: center;
    font-size: 17px;
    color: #191a1b;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.right{
    width: 15%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 15px;
    div{
    width: 100%;
    text-align: right;
}
}
}
.cinema-list-tag {
    position: fixed;
    height: 50px;
    width: 100%;
    top: 44px;
    right: 0;
    text-align: center;
    background-color: #fff;
    z-index: 20;
    .cinema-list-tag-name {
    position: relative;
    label {
    float: left;
    width: 33.3%;
    line-height: 49px;
    font-size: 14px;
    color: #191a1b;
    letter-spacing: -.2px;
    }
    img {
    vertical-align: middle;
    padding-left: 2px;
}
}
}
.cinema-list-tag:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(.5);
    -ms-transform: scaleY(.5);
    transform: scaleY(.5);
}
.cinema-layer {
    padding-top: 94px;
}
.cinema-list-wrap {
    padding-bottom: 49px;
    z-index: 10;
    ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
    position: relative;
    background-color: #fff;
    padding: 15px;
    .cinema-item-wrap {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
     .cinema-info-lf {
    width: calc(100% - 65px);
    text-align: left;
    padding-right: 15px;
    float: left;
     span {
    display: block;
    max-width: 80%;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
}
     .cinema-name {
    color: #191a1b;
    font-size: 15px;
    float: left;
}
.isVisted {
    width: 32px;
    height: 16.5px;
    margin-bottom: -6px;
    margin-left: 4px;
}
 .cinema-address {
    color: #797d82;
    font-size: 12px;
    margin-top: 5px;
}
}
.cinema-info-rt {
    width: 70px;
    text-align: center;
    float: right;
    margin-right: -5px;
    .price-fmt {
    font-size: 15px;
    color: #ff5f16;
    height: 0!important;
    display: inline-table!important;
    span{
        float: none!important;
    }
}
.upon {
    color: #ff5f16;
    font-size: 10px;
}
.cinema-gpsAddress {
    display: block;
    font-size: 11px;
    color: #797d82;
    margin-top: 5px;
    img {
    display: block;
    width: 13px;
    height: 17.5px;
    margin: 0 auto;
    margin-top: -30px;
}
 strong {
    font-weight: 400;
    display: block;
    margin-top: 5px;
}
}
}
}
}
}
}

</style>