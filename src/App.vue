<template>
  <div id="app">
    <FooterNav v-if="show" ></FooterNav>
    <router-view/>
  </div>
</template>

<script>
import FooterNav from './components/FooterNav'
import {mapState} from 'vuex'
export default {
  components:{
    FooterNav
  },
  data() {
    return {
      show:true
    }
  },
  created() {
    this.EventBus.$on('footnav',(flag)=>{
      this.show=flag
    })
  },
  computed: {
    ...mapState(['city'])
  },
  beforeMount() {
    if(this.city=='未知'){
      this.$router.push({path:"/city"})
    }
  },
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0
}
html,body{
  height: 100%;
  touch-action: none;
  ul,li{
    list-style: none;
  }
}
</style>
