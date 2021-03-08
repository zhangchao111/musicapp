import { AppStateType } from '@/store/modules/app/state'
import { UserStateType } from '@/store/modules/user/state'

// vuex state 的模块的类型

type ModuleType = {
    app: AppStateType
    user: UserStateType
}
// 所有的StateType
export type StateType = ModuleType

/** http请求响应格式  */
export declare interface ApiResponse {
    errCode: number
    errMsg?: string
    data?: any
}

// 接口响应通过格式
export interface HttpResponse {
    status: number
    statusText: string
    data: {
        code: number
        desc: string
        [key: string]: any
    }
}
// 接口请求列表通用参数配置
export interface HttpListQuery {
    pageNum?: number
    pageSize?: number
    [key: string]: any
}










