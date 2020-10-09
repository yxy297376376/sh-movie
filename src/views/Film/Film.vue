<template>
    <div>
        <FlimTopNav></FlimTopNav>
        <router-view></router-view>
    </div>
</template>
<script>
import FlimTopNav from '@/components/FilmTopNav.vue'
export default {
    components:{
        FlimTopNav
    }
}
</script>