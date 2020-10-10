<template>
    <div>
        <FilmList :list="list" :key="'film' + list.length" :type="type" ></FilmList>
    </div>
</template>


<script>
//导入加载效果
// import Loading from '@/components/Loading'
//导入电影列表框架组件
import FilmList from '@/components/FilmList'
//导入发起请求的方法
import {NowPlayingListData} from '@/api/api'
export default {
    data() {
        return {
            pageNum:1,
            list:[],
            type:1
        }
    },

    components:{
        // Loading,
        FilmList
    },
    async mounted() {
        let ret=await NowPlayingListData(this.pageNum);
        // console.log(ret.data);
        this.list=ret.data.data.films;
        // console.log(this.list);
    },
}
</script>
