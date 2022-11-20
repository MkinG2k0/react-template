import { setStatus } from '@ReduxHelper'
import { PayloadAction } from '@reduxjs/toolkit'

import { DataModel } from './Data.Model'
import { fetchExample } from './Data.Thunk'

export const extraReducers = {
	[fetchExample.pending.type]: (state: DataModel, action) =>
		setStatus(state.data, action, 'pending'),
	[fetchExample.rejected.type]: (state: DataModel, action) =>
		setStatus(state.data, action, 'rejected'),
	[fetchExample.fulfilled.type]: (
		state: DataModel,
		action: PayloadAction<string>
	) => {
		setStatus(state.data, action, 'fulfilled')
		state.data.data = action.payload
	}
}

