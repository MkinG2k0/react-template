import { createSlice } from '@reduxjs/toolkit'

import { extraReducers } from './Data.ExReducers'
import { initialState } from './Data.Init'
import { reducers } from './Data.Reducers'

const slice = createSlice({
	name: 'Data',
	initialState,
	reducers,
	extraReducers
})

export const { reducerExample } = slice.actions

export const Data = slice.reducer

