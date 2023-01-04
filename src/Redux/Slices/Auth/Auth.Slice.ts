import { createSlice } from '@reduxjs/toolkit'

import { extraReducers } from './Auth.ExReducers'
import { initialState } from './Auth.Init'
import { reducers } from './Auth.Reducers'

const slice = createSlice({
	name: 'Auth',
	initialState,
	reducers,
	extraReducers,
})

export const { setAuth } = slice.actions

export const Auth = slice.reducer
