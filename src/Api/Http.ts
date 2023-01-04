import axios from 'axios'
import { History } from 'Routes/History'
import { NAV } from 'Routes/Navigation'
import { getToken, setToken } from 'Utils/Auth'

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

		config.headers = {
			...config.headers,
			Authorization: `Bearer ${token}`,
		}

		return config
	},
	(error) => Promise.reject(error),
)

http.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		if (
			(error.response && error.response.status === 401) ||
			(error.response && error.response.status === 403) ||
			(error.response && error.response.data.message === 'NOT_AUTHORIZED')
		) {
			setToken('')
			History.push(NAV.AUTH)
		}

		return Promise.reject(error)
	},
)
