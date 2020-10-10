<template>
    <div class="main">
        <div class="film">
            <div class="film-header">
                <div class="goBack">
                    <img src="" alt="">
                    <div class="title">{{film.name}}</div>
                </div>
            </div>
            <div class="lazy-img film-poster" alt="filmPoster" style="width: 100%; background: rgb(249, 249, 249);">
                <div class="lazy-img-wrap" style="width: 100%; background: rgb(249, 249, 249); opacity: 1; display: block;">
                    <img :src="film.poster" alt="" class="target-img"> 
                </div>
            </div>
            <div class="film-detail">
                <div class="col">
                    <div class="film-name">
                        <span class="name"></span>
                        <span class="item"></span>
                    </div>
                    <div class="film-grade">
                        <span class="grade"></span>
                        <span class="grade-text"></span>
                    </div>
                </div>
                <div class="film-category grey-text">
                    
                </div>
                <div class="film-premiere-time grey-text"></div>
                <div class="film-nation-runtime grey-text"></div>
                <div class="test grey-text"></div>
                <div class="film-synopsis grey-text hidde" style="height: 77px;"></div>
                <div class="toggle">
                    <img src="" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {DetailData} from '@/api/api'
import moment from 'moment'
export default {
    data() {
        return {
            film:{}
        }
    },
    async mounted() {
        let ret = await DetailData(this.$route.params.filmId)
        this.film=ret.data.data.film
        // console.log(this.film);
    },
    filters:{
        parsePremiereAt:function(value){
            return moment(value*1000).format('YYYY-MM-DD')
        }
    }
}
</script>
<style lang="scss" scoped>
.main, body {
    height: 100%;
}
div {
    box-sizing: border-box;
    display: block;
}
.film .film-header {
    position: fixed;
    background-color: hsla(0,0%,100%,0);
    color: transparent;
    -webkit-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    width: 100vw;
    height: 44px;
    z-index: 1;
}
.lazy-img[data-v-21c202bd] {
    position: relative;
}
.lazy-img .lazy-img-wrap{
    width: 100%;
    background: #fff;
    position: absolute;
    overflow: hidden;
    top: 0;
    opacity: 0;
}
</style>