import { Auth } from 'Api/EndPoints/Auth'
import { AuthRoute } from 'Api/Routes'
import axios from 'axios'
import { NOT_AUTHORIZED_CODE } from 'Constant/Auth'
import { NAV } from 'Routes/Navigation'
import {
	getRefToken,
	getToken,
	removeRefToken,
	removeToken,
	setRefToken,
} from 'Utils/Auth'
import { navigate } from 'Utils/Navigation'

export const http = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 10000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
})

http.interceptors.request.use(
	(config) => {
		const token = getToken()

		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`
		}

		return config
	},
	(error) => Promise.reject(error),
)

http.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.config.url === AuthRoute.refresh) {
			removeRefToken()
			removeToken()
			navigate(NAV.AUTH)
		}

		if (NOT_AUTHORIZED_CODE.includes(error.response.status)) {
			const refreshToken = getRefToken()
			if (refreshToken) {
				Auth.refresh({ refreshToken }).then(({ data }) => {
					setRefToken(data.refresh)
				})
			}
		}

		return Promise.reject(error)
	},
)
