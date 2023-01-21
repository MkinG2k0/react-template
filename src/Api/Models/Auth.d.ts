declare namespace Q_Auth {
	interface Login {
		email: string
		password: string
		token: string
	}

	interface Refresh {}
}

declare namespace R_Auth {
	interface Login {
		token: string
	}

	interface Refresh {
		token: string
		refresh: string
	}
}
