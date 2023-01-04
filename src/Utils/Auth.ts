import { TOKEN } from 'Constant/Auth'

export function getToken() {
	return localStorage.getItem(TOKEN)
}

export function setToken(token: string) {
	return localStorage.setItem(TOKEN, token)
}
