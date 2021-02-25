import { createStore, createLogger, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate' //永久性保存store的插件
import mutations from './mutations'
import modules from './modules/index'
import { InjectionKey } from 'vue'
import { StateType } from '@/@types'
export const key: InjectionKey<Store<StateType>> = Symbol()
const store: Store<StateType> = createStore({
  strict: true,
  mutations,
  modules: {
    ...modules
  },
  plugins: process.env.NODE_ENV !== 'production'
      ? [
        createLogger(),
        createPersistedState({
          paths: ['app','user']
        })
      ]
      : [
        createPersistedState({
          paths: ['app','user']
        })
      ]
})

export default store;
