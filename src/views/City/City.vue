<template>
  <div>
    <van-index-bar :index-list="indexList" highlight-color="#ff0000">
      <template v-for="item in dataList">
        <van-index-anchor :index="item.index" :key="item.index" style="background:#eee" />
        <van-cell :title="i.name" v-for="(i,k) in item.data" :key="k"  @click="chooseCity(i.name)" />
      </template>
    </van-index-bar>
  </div>
</template>
<script>
//导入请求方法

import {CityListData} from '@/api/api'
import Vue from "vue";
import { IndexBar, IndexAnchor ,Cell} from "vant";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
    data() {
        return {
            indexList:[],
            dataList:[],
            clickStyle:false
        } 
    },
    async mounted() {
        let ret = await CityListData()
        this.indexList=ret[0]
        this.dataList=ret[1]
        console.log(this.indexList,this.dataList);
    },
    created() {
        this.EventBus.$emit('footnav',false)
    },
    beforeDestroy() {
        this.EventBus.$emit('footnav',true)
    },
    methods: {
        chooseCity:function(cityName){
            //...
            this.$store.commit('setCity',cityName)
            this.$router.push({path:'/film'})
        },
        
    },
};
</script>
<style lang="scss" scoped>

</style>