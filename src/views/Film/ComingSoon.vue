<template>
    <div>
        <FilmList :list="list" :type="type" :key="'film' + list.length"></FilmList>
    </div>
</template>
<script>
import FilmList from '@/components/FilmList'

import {ComingSoonListData} from '@/api/api'
export default {
    data() {
        return {
            list:[],
            pageNum:1,
            type:2
        }
    },
    components:{
        FilmList
    },
    async mounted() {
        let ret = await ComingSoonListData(this.pageNum)
        console.log(ret);
        this.list=ret.data.data.films
    },
}
</script>