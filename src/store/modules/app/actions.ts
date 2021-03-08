import AppService from '@/api/app'
import { setStoreState } from '../../utils'
import Store from '@/store'

const appActions = {
    getss(){
        console.log(1111)
    },
    getSwiperList() {
        return AppService.swipers({type:'0'}).then(res => {
            setStoreState('app', 'swiperList', res.data)
        })
    }
}
export default appActions
