import { http } from 'Api/Http'
import { AuthRoute } from 'Api/Routes'

const login = (data: Q_Auth.Login) =>
	http.post<R_Auth.Login>(AuthRoute.base, data)

const refresh = (data: Q_Auth.Refresh) =>
	http.post<R_Auth.Refresh>(AuthRoute.refresh, data)

export const Auth = {
	login,
	refresh,
}
