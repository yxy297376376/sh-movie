<template>
    <div>
        <FlimTopNav :class="fixed ? 'fixed' : ' '"></FlimTopNav>
        <router-view></router-view>
    </div>
</template>
<script>
import FlimTopNav from '@/components/FilmTopNav.vue'
export default {
    components:{
        FlimTopNav
    },
    data() {
        return {
            fixed:false
        }
    },
    mounted() {
        window.addEventListener('scroll',(e)=>{
            let scrollTop=document.documentElement.scrollTop;
            if(scrollTop> 120){
                this.fixed=true
            }else{
                this.fixed=false
            }
        })
    },
}
</script>
<style lang="scss" scoped>
.fixed{
    position: fixed;
    top: 0;
    background: #ffffff;
}
</style>