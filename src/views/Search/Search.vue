<template>
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
      input-align="center"
      background="#4fc08d"
    />
  </form>
    
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
import { Toast } from 'vant';
//轮播部分
import { Swipe, SwipeItem } from 'vant';
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
   data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
      this.$router.go(-1)
    },
  },
};
</script>