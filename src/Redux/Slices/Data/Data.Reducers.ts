import { PayloadAction } from '@reduxjs/toolkit'

import { DataModel } from './Data.Model'

export const reducers = {
	reducerExample(state: DataModel, action: PayloadAction<string>) {
		state.data.data = action.payload
	}
}

