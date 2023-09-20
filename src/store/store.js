import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
const store = createStore({
  state: {
    m_name: null,
    m_id: null,
  },
  plugins: [createPersistedState()], //f5 눌렀을 때 local에서 가져오기
  getters: {
    getUserName(state) {
      return state.m_name;
    },
    getUserId(state) {
      return state.m_id;
    },
  },
  mutations: {
    //변경될 때 대신 동작할 예정
    setUser(state, userInfo) {
      state.m_name = userInfo.m_name;
      state.m_id = userInfo.m_id;
    },
    logout(state) {
      state.m_name = null;
      state.m_id = null;
    },
  },
  actions: {},
});
export default store;
