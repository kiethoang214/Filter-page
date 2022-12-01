import Vue from 'vue'
import Vuex from 'vuex'
import provinceListJson from '../data/tinh_tp.json'
import districtListJson from '../data/quan_huyen.json'
import postListJson from '../data/data.json'

import pathify, { make } from 'vuex-pathify'


Vue.use(Vuex)

const state = {
  province: null,
  provinceList: [],
  district: null,
  districtList: [],
  price: null,
  priceList: [],
  area: null,
  areaList: [],
  postList: [],
  postListShow: [],

};

const getters = {
  districtListShow: (state) => {
    if(state.province) {
      return state.districtList.filter(district => district.parent_code === state.province.code);
    } else {
      return state.districtList;
    }
  },

}

const mutations = make.mutations(state);

const actions = {
  loadData({ commit }) {
    const provinceList = [];
    for(let key of Object.keys(provinceListJson)) {
      provinceList.push(provinceListJson[key])
    }
    commit('SET_PROVINCE_LIST', provinceList);
    commit('SET_PROVINCE', provinceList[0]);

    const districtList = [];
    for(let key of Object.keys(districtListJson)) {
      districtList.push(districtListJson[key])
    }
    commit('SET_DISTRICT_LIST', districtList);

    const priceList = [
      {
          "name": "Dưới 1 triệu",
          "upper_price": 0,
          "lower_price": 1000000
      },
      {
          "name": "1 triệu - 2 triệu",
          "upper_price": 1000000,
          "lower_price": 2000000
      },
      {
          "name": "2 triệu - 3 triệu",
          "upper_price": 2000000,
          "lower_price": 3000000
      },
      {
          "name": "3 triệu - 5 triệu",
          "upper_price": 3000000,
          "lower_price": 5000000
      },
      {
          "name": "5 triệu - 7 triệu",
          "upper_price": 5000000,
          "lower_price": 7000000
      },
      {
          "name": "7 triệu - 10 triệu",
          "upper_price": 7000000,
          "lower_price": 10000000
      },
      {
          "name": "10 triệu - 12 triệu",
          "upper_price": 10000000,
          "lower_price": 12000000
      },
    ];
    commit('SET_PRICE_LIST', priceList);

    const areaList = [
      {
        "name": "Dưới 20 m2",
        "upper_area": 0,
        "lower_area": 20
      },
      {
        "name": "20 m2 - 30 m2",
        "upper_area": 20,
        "lower_area": 30
      },
      {
        "name": "30 m2 - 50 m2",
        "upper_area": 30,
        "lower_area": 50
      },
      {
        "name": "50 m2 - 60 m2",
        "upper_area": 50,
        "lower_area": 60
      },
      {
        "name": "60 m2 - 70 m2",
        "upper_area": 60,
        "lower_area": 70
      },
      {
        "name": "70 m2 - 80 m2",
        "upper_area": 70,
        "lower_area": 80
      },
      {
        "name": "80 m2 - 90 m2",
        "upper_area": 80,
        "lower_area": 90
      },
      {
        "name": "90 m2 - 100 m2",
        "upper_area": 90,
        "lower_area": 100
      },
    ];
    commit('SET_AREA_LIST', areaList);

    commit('SET_POST_LIST', postListJson);
    commit('SET_POST_LIST_SHOW', postListJson);
  },
  filterData({state, commit}) {
    let res = state.postList.filter((post) => {
                                    if(post.city === state.province.code && post.district === state.district.code) {
                                        return true;
                                    }
                                    return false;
                                  })
    if(state.price) {
      res = res.filter((post) => {
        if(post.price >= state.price.upper_price && post.price < state.price.lower_price) {
          return true;
        } 
        return false;
      })
    } 
    if (state.area) {
      res = res.filter((post) => {
        if(post.area >= state.area.upper_area && post.area < state.area.lower_area) {
          return true;
        }
        return false;
      })
    }
    
    commit('SET_POST_LIST_SHOW', res);
  }
}

export default new Vuex.Store({
  plugins: [
    pathify.plugin
  ],
  state,
  actions,
  getters,
  mutations,
})
