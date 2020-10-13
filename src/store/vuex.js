import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:'未知'
    },
    mutations:{
        setCity:function(state,cityName){
            state.city=cityName
        }
    }
})