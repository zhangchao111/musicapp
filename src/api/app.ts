import Axios from './axios'
import { HttpResponse } from '@/@types'
import UserService from "@/api/user";
/**
 * @interface BindPhoneParams -获取banner参数
 * @property {string} type -类型
 */
interface swipersParams {
    type: string
}

class AppService {
    static swipers(params:swipersParams): Promise<HttpResponse> {
        return Axios('/api/banner', {
            method: 'get',
            responseType: 'json',
            params:params
        })
    }
}
export default AppService
