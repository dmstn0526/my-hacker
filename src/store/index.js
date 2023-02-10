import { createStore } from 'vuex'
import { fetchListItem, fetchUserInfo, fetchAskItem } from '../api/index.js'

export default createStore({
  state: {
    list: [],
    user: '',
    item: ''
  },
  getters: {
  },
  mutations: {
    SET_LIST(state, list) {
      state.list = list //받은 list를 state에 저장하는 함수
    },
    SET_USER(state, user) {
      state.user = user
    },
    SET_ITEM(state, id) {
      state.item = id
      // console.log(id)
    }
  },
  actions: {
    FETCH_LIST(context, pageName) {
      return fetchListItem(pageName) //fetchListItem을 실행해서 return
      .then((res)=> { // 처리는 then에서
        context.commit('SET_LIST', res.data); //res.data = 결과 data
        return res; //결과 data return
      }).catch(err => { //error가 있다면 catch로
        console.log(err);
      })
    },
    FETCH_USER(context, userName) {
      return fetchUserInfo(userName) //fetchListItem을 실행해서 return
      .then((res)=> { // 처리는 then에서
        context.commit('SET_USER', res.data); //res.data = 결과 data
        return res; //결과 data return
      }).catch(err => { //error가 있다면 catch로
        console.log(err);
      })
    },
    FETCH_ITEM(context, id) {
      return fetchAskItem(id) //fetchListItem을 실행해서 return
      .then((res)=> { // 처리는 then에서
        context.commit('SET_ITEM', res.data); //res.data = 결과 data
        console.log(res)
        return res; //결과 data return
      }).catch(err => { //error가 있다면 catch로
        console.log(err);
      })
    }
  },
  modules: {
  }
})
