import UserService from '@/api/user'
import { setStoreState } from '../../utils'
import Store from '@/store'

const userActions = {
    // 刷新令牌
    refreshToken() {
        return UserService.refreshToken({
            // eslint-disable-next-line @typescript-eslint/camelcase
            refresh_token: Store.state.user.token.refresh_token
        }).then(res => {
            // token过期时间
            const expireTime = res.data.expires_in * 1000 + new Date().getTime()
            setStoreState('user', 'token', { ...res.data, expireTime })
        })
    },
    getUserDetail() {
        return UserService.getUserDetail().then(res => {
            setStoreState('user', 'userDetail', res.data.data)
        })
    }
}

type UserActionsType = typeof userActions
export { UserActionsType }
export default userActions




























