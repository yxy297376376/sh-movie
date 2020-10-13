<template>
  <div class="main">
    <div class="film">
      <div  :class="isShow ? 'show' : 'yuanshiShow'">
        <div class="goBack">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
            alt=""
            @click="goBack()"
          />
        </div>
        <div class="title">{{film.name}}</div>
        <!---->
      </div>
      <div class="detail_img">
        <img :src="film.poster" alt="" />
      </div>

      <div class="film-detail">
        <div class="col">
          <div class="film-name">
            <span class="name">
              {{ film.name }}
            </span>
            <span class="item">
              {{ film.item.name }}
            </span>
          </div>
          <div class="film-grade">
            <span class="grade">
              {{ film.grade }}
            </span>
            <span class="grade-text"> 分 </span>
          </div>
        </div>
        <div class="film-category grey-text">
          {{ film.category }}
        </div>
        <div class="film-premiere-time grey-text">
          {{ film.premiereAt | parsePremiereAt }}上映
        </div>
        <div class="film-nation-runtime grey-text">
          {{ film.nation }} | {{ film.runtime }}分钟
        </div>
        <div class="film-synopsis grey-text hidde">
          {{ film.synopsis }}
        </div>
      </div>
      <!-- <h2 class="actorText">演员表</h2>
      <Swiper :key="'actor' + film.actors.length">
        <div
          class="swiper-slide"
          v-for="(item, index) in film.actors"
          :key="index"
        >
          <div>
            <img v-lazy="item.avatarAddress" alt="" />
          </div>
          <div class="actor_name">
            {{ item.name }}
          </div>
          <div class="actor_role">
            {{ item.role }}
          </div>
        </div>
      </Swiper> -->
      <div class="actors">
        <div class="actors-title-bar">
          <span class="actors-title-text">演职人员</span>
        </div>
        <Swiper :key="'actor' + film.actors.length">
          <div
            class="swiper-slide actors-item"
            style="text-align: center"
            v-for="(item, index) in film.actors"
            :key="index"
          >
            <div
              class="actors-img"
              style="width: 85px; height: 85px; background: rgb(249, 249, 249)"
            >
              <img v-lazy="item.avatarAddress" class="target-img" alt="" />
            </div>
            <div class="actor_name actors-name">
              {{ item.name }}
            </div>
            <div class="actor_role actors-role">
              {{ item.role }}
            </div>
          </div>
        </Swiper>
      </div>
      <div class="photos">
        <div class="photos-title-bar">
          <span class="photos-title-text">剧照</span>
          <span class="photos-to-all">
            全部(5)
            <i
              class="iconfont icon-quanju_liebiaojiantou"
              style="font-size: 13px"
            ></i>
          </span>
        </div>
        <Swiper :key="'photos' + film.photos.length" style="marginBottom:60px">
          <div
            class="swiper-slide"
            style="text-align: center"
            v-for="(item, index) in film.photos"
            :key="index"
          >
            <div
              class="actors-img"
              style="width: 85px; height: 85px; background: rgb(249, 249, 249)"
            >
              <img v-lazy="item" class="target-img" alt="" />
            </div>
          </div>
        </Swiper>
      </div>
      <a href="#" class="buyTickect" @click="buyTicket()">
        <div class="goSchedule">选座购票</div>
      </a>
    </div>
  </div>
</template>
<script>
import { DetailData } from "@/api/api";
import moment from "moment";
import Swiper from "@/components/Swiper";
export default {
  data() {
    return {
      film: { actors: [], item: "", photos: [] },
      isShow: false,
    };
  },
  created() {
    this.EventBus.$emit("footnav", false);
  },
  
  async mounted() {
    let ret = await DetailData(this.$route.params.filmId);
    this.film = ret.data.data.film;
    console.log(this.film);
    window.addEventListener("scroll", (e) => {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 60) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    });
  },
  filters: {
    parsePremiereAt: function (value) {
      return moment(value * 1000).format("YYYY-MM-DD");
    },
  },
  components: {
    Swiper,
  },
  methods: {
    goBack: function () {
      this.$router.go(-1);
    },
    buyTicket:function(){
      this.$router.push({path:"/buy"})
    }
  },
  beforeDestroy() {
    this.EventBus.$emit("footnav", true);
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  display: block;
}

a,
a:focus,
a:hover {
  color: #333;
  text-decoration: none;
}
.title {
  text-align: center;
  height: 40px;
  font-size: 25px;
  color: black;
  font-weight: 800;
}
.actorText {
  text-align: center;
  font-weight: 800;
  height: 50px;
  line-height: 50px;
}
.detail_img {
  height: 360px;
  
}
.swiper-slide {
  
  img {
    width: 80px;
  }
  .actor_name {
    font-size: 10px;
    margin-top: 6px;
  }
  .actor_role {
    font-size: 10px;
    margin-top: 6px;
  }
}
.film-detail {
  padding: 15px;
  padding-top: 12px;
  background-color: #fff;
  .col {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .film-name {
      width: 256px;
      .name {
        color: #191a1b;
        font-size: 18px;
        height: 24px;
        line-height: 24px;
        margin-right: 7px;
      }
      .item {
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        display: inline-block;
      }
    }
    .film-grade {
      width: calc(100% - 250px);
      text-align: right;
      color: #ffb232;
      .grade {
        font-size: 18px;
        font-style: italic;
      }
      .grade-text {
        font-size: 10px;
      }
    }
  }
  .grey-text {
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
  }
  .film-synopsis {
    margin-top: 12px;
  }
}
// .film-header {
//   background-color: hsla(0, 0%, 100%, 0);
//   color: transparent;
//   -webkit-transition: all 0.3s ease;
//   -o-transition: all 0.3s ease;
//   transition: all 0.3s ease;
//   width: 100vw;
//   height: 44px;
//   z-index: 1;
//   .goBack {
//     height: 30px;
//     position: absolute;
//     top: 5px;
//     left: 5px;
//     img {
//       width: 30px;
//     }
//   }
//   .title {
//     font-size: 17px;
//     line-height: 44px;
//     width: 100vw;
//     text-align: center;
//   }
// }

.actors {
    text-indent: 13px;
    font-weight: 800;
    background-color: #fff;
    .actors-title-bar {
        width: 100%;
        margin-bottom: 8px;
        .actors-title-text {
            font-size: 16px;
            text-align: left;
            color: #191a1b;
        }
    }
}
.photos {
    background-color: #fff;
    .photos-title-bar {
height: 62px;
display: flex;
justify-content: space-between;
box-sizing: border-box;
padding: 0 13px;
align-items: center;
    width: 100%;
    .photos-title-text {
      font-size: 16px;
      font-weight: 800;
      text-align: center;
      color: #191a1b;
    }
    }
    .photos-to-all {
      font-size: 13px;
      color: #797d82;
      float: right;
      .iconfont {
        font-family: iconfont !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    }

}
//  
//   
//     
//     
//     .photos-to-all {
//       font-size: 13px;
//       color: #797d82;
//       float: right;
//       .iconfont {
//         font-family: iconfont !important;
//         font-size: 16px;
//         font-style: normal;
//         -webkit-font-smoothing: antialiased;
//         -moz-osx-font-smoothing: grayscale;
//       }
//     }
//   }
//   .target-img {
//     width: 100%;
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     -ms-transform: translateY(-50%);
//     -moz-transform: translateY(-50%);
//     -webkit-transform: translateY(-50%);
//     -o-transform: translateY(-50%);
//   }
// }
.show {
  -webkit-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  transition: all 0.6s ease;
  background-color: rgb(255, 255, 114);
  color: #191a1b;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 44px;
  .goBack {
    height: 30px;
    position: absolute;
    top: 5px;
    left: 5px;
    img {
      width: 30px;
      height: 30px;
      display: block;
    }
  }
  .title {
    font-size: 17px;
    line-height: 44px;
    width: 100vw;
    text-align: center;
  }
}
.yuanshiShow{
background-color: rgba(255,255, 255, 0.1);
  color: transparent;
   width: 100vw;
  height: 44px;
  position: relative;
  .goBack {
    height: 30px;
    position: absolute;
    top: 5px;
    left: 5px;
    img {
      width: 30px;
    }
  }
  .title {
    font-size: 17px;
    line-height: 44px;
    width: 100vw;
    text-align: center;
  }
}
.buyTickect {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 49px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
    z-index: 10;
}
</style>