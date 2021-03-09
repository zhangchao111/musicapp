import AppService from '@/api/app'
import { setStoreState } from '../../utils'
import Store from '@/store'

const appActions = {

    getSwiperList() {
        return AppService.swipers({type:'0'}).then(res => {
            setStoreState('app', 'swiperList', res.data.banners)
        })
    }
}
export default appActions
