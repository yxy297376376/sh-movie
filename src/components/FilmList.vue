<template>
  <div class="list scroll" :style="{height: height + 'px'}">
    <Loading v-if="loading"></Loading>
    <div class="content">
    <div
        class="item"
        v-for="(item, index) in reList"
        :key="index"
        @click="goDetail(item.filmId)"
      >
        <div class="left">
          <img :src="item.poster" />
        </div>
        <div class="middle">
          <div class="biaoti">
            <span class="name">{{ item.name }}</span>
            <span class="item">{{ item.filmType.name }}</span>
          </div>
          <div v-if="type == 1">
            <span>观众评分 </span>
            <span class="grade">{{ item.grade }}</span>
          </div>
          <div>主演：{{ item.actors | parseActors }}</div>
          <div>{{ item.nation }} | {{ item.runtime }}分钟</div>
        </div>
        <div class="right">
          <span v-if="type == 1">购票</span>
          <span v-else>预约</span>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Loading from "./Loading";
import betterScroll from 'better-scroll'
import {NowPlayingListData,ComingSoonListData} from '@/api/api'
export default {
  data() {
    return {
      loading: true,
      height: 0,
      bs: null, //保存better-scroll的实例结果
      pageNum:1,
      flag:true,//控制是否可以加载更多数据
      reList:[]  //因为props为只读属性 定义新数组来存储数据做后续新增处理
    };
  },
  components: {
    Loading,
  },
  props: ["list", "type"],
  created() {
    this.reList=this.list;
    if (this.reList.length > 0) {
      this.loading = false;
      //   console.log(this.list);
    }
  },
   filters: {
    parseActors: function (value) {
      let actors = "";
      value.forEach((element) => {
        actors += element.name + " ";
      });
      return actors;
    },
  },
  methods: {
    goDetail: function (filmId) {
      this.$router.push({ name: "detail", params: { filmId } });
    },
    getdata: async function(){
      //判断可以请求
      if(this.flag){
        this.pageNum++
        //获取数据
        if(this.type==1){
          var ret= await NowPlayingListData(this.pageNum)
        }else{
          var ret= await ComingSoonListData(this.pageNum)
        }
        //判断什么时候停止请求数据
        if(ret.data.data.films.length < 10){
          this.flag = false
        }
        //将处理好的数据新增到列表中
        this.reList= this.reList.concat(ret.data.data.films)
      }
    }
  },
  mounted() {
    this.height = document.documentElement.clientHeight - 100;
    console.log(this.height);
  },
  updated() {
    
      this.bs = new betterScroll(".scroll", {
        pullUpLoad: true,
        pullDownRefresh: true,
        click: true,
      });
      //上拉刷新数据
      
      this.bs.on("pullingUp", () => {
        this.getdata()
        this.bs.finishPullUp();
      });
      //下拉刷新数据
      this.bs.on("pullingDown", () => {
        this.getdata()
        this.bs.finishPullDown();
      });
    
  },
  // beforeDestroy() {
  //   this.bs = null;
  // },
 
};
</script>

<style lang="scss" scoped>
.scroll {
  overflow: hidden;
}
.list {
  margin-bottom: 50px;
  .item {
    margin-top: 15px;
    padding-bottom: 15px;
    display: flex;
    color: #797d82;
    font-size: 13px;
    border-bottom: 1px solid #ededed;

    .left {
      width: 77px;
      height: 100px;
      margin-left: 20px;
      img {
        width: 66px;
        height: 100%;
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 55%;

      div:nth-of-type(1) {
        color: #191a1b;
        font-size: 16px;
      }

      div:nth-of-type(3) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .grade {
        color: #ffb232;
        font-size: 14px;
      }
      .biaoti {
        display: flex;
        align-items: center;
        .item {
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
          margin: 0 0 0 10px;
        }
      }
    }

    .right {
      width: 15%;
      display: flex;
      align-items: center;
      margin-right: 20px;

      span {
        border: 1px solid #ff5f16;
        background: white;
        color: #ff5f16;
        border-radius: 2px;
        height: 25px;
        line-height: 25px;
        font-size: 13px;
        width: 50px;
        text-align: center;
      }
    }
  }
}
</style>