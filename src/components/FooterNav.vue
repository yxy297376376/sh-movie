<template>
    <div class="nav">
        <ul>
            <router-link to="/film" tag="li" active-class="active">
                <i class="iconfont icondianying"></i>
                <p>电影</p>
            </router-link>
            <router-link to="/cinema" tag="li" active-class="active">
                <i class="iconfont iconyingyuan"></i>
                <p>影院</p>
            </router-link>
            <router-link to="/center" tag="li" active-class="active">
                <i class="iconfont icongeren"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
import('@/assets/iconfont/iconfont.css')
export default {
    
}
</script>
<style lang="scss" scoped>
.nav{
    
    position: fixed;
    bottom: 0;
    right: 0;
    border-top: 1px solid #ccc;
    height: 50px;
    text-align: center;
    background: #fff;
    color: #7a7e83;
    width: 100%;
    z-index: 1000;
    ul{
        display: flex;
        align-items: center;
        li{
            flex: 1;
            list-style: none;
            height: 45px;
            margin-top: 5px;
            
            &.active{
                color:pink;
            }
            i{
                font-size: 20px;
            }
            p{
                margin-top: 3px;
            }
        }
    }
}
</style>