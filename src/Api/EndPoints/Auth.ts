import { http } from 'Api/Http'
import { AuthRoute } from 'Api/Routes'
import { Req } from 'Interface/Axios'

const login = (data: Q_Auth.Login): Req<R_Auth.Login> =>
	http.post(AuthRoute.base, data)

const refresh = (data: Q_Auth.Refresh): Req<R_Auth.Refresh> =>
	http.post(AuthRoute.refresh, data)

export const Auth = {
	login,
	refresh,
}
