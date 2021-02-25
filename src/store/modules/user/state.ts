import { StateType } from '@/@types'
import { Module } from 'vuex'
interface Token {
    [propertys: string]: any
}

const state = {
    token: {} as Token,
    userDetail:{
        username: '',
        nickName: '',
        phone: '',
        id:''
    }
}
type UserStateType  = typeof state
const user: Module<UserStateType , StateType> = { namespaced: true, ...state }

export { UserStateType , state }
export default user
