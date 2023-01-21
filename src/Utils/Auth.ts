import { COOKIES_REFRESH_TOKEN, TOKEN } from 'Constant/Auth'
import Cookies from 'js-cookie'

export const getToken = () => {
	return localStorage.getItem(TOKEN)
}

export const removeToken = () => {
	return localStorage.removeItem(TOKEN)
}

export const setToken = (token: string) => {
	localStorage.setItem(TOKEN, token)
}

export const getRefToken = () => {
	return Cookies.get(COOKIES_REFRESH_TOKEN)
}

export const setRefToken = (token: string) => {
	Cookies.set(COOKIES_REFRESH_TOKEN, token)
}

export const removeRefToken = () => {
	Cookies.remove(COOKIES_REFRESH_TOKEN)
}
