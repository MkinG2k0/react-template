import { PayloadAction } from '@reduxjs/toolkit'

import { AuthModel } from './Auth.Model'

export const reducers = {
	setAuth(state: AuthModel, action: PayloadAction<R_Auth.Login>) {
		state.login.data = action.payload
	},
}
