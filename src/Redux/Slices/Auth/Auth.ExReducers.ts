import { PayloadAction } from '@reduxjs/toolkit'
import { setStatus } from 'Utils/Redux'

import { AuthModel } from './Auth.Model'
import { fetchAuth } from './Auth.Thunk'

export const extraReducers = {
	[fetchAuth.pending.type]: (state: AuthModel, action) =>
		setStatus(state.login, action, 'pending'),
	[fetchAuth.rejected.type]: (state: AuthModel, action) =>
		setStatus(state.login, action, 'rejected'),
	[fetchAuth.fulfilled.type]: (
		state: AuthModel,
		action: PayloadAction<R_Auth.Login>,
	) => {
		setStatus(state.login, action, 'fulfilled')
		state.login.data = action.payload
	},
}
