import { PayloadAction } from '@reduxjs/toolkit'
import { setStatus } from 'Utils/Redux'

import { FileNameModel } from './FileName.Model'
import { fetchFileName } from './FileName.Thunk'

export const extraReducers = {
	[fetchFileName.pending.type]: (state: FileNameModel, action) =>
		setStatus(state.data, action, 'pending'),
	[fetchFileName.rejected.type]: (state: FileNameModel, action) =>
		setStatus(state.data, action, 'rejected'),
	[fetchFileName.fulfilled.type]: (
		state: FileNameModel,
		action: PayloadAction<string>,
	) => {
		setStatus(state.data, action, 'fulfilled')
		state.data.data = action.payload
	},
}
