import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'
import issue from './modules/issue'
// import getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    account,
    issue
  },
  // getters: getters,
  strict: debug,

})
