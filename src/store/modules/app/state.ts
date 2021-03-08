import { StateType } from '@/@types'
import { Module } from 'vuex'


const state = {
    language: 'zhCN',
    version: '0.0.1',
    swiperList:[]
}
type AppStateType = typeof state

const app: Module<AppStateType, StateType> = { namespaced: true, ...state }

export { AppStateType, state }
export default app
