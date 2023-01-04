import { createAsyncThunk } from '@reduxjs/toolkit'
import { Auth } from 'Api/EndPoints/Auth'
import { Error } from 'Utils/Redux'

export const fetchAuth = createAsyncThunk<
	R_Auth.Login,
	Q_Auth.Login,
	{ rejectValue: string }
>('fetch/auth', async function (query, { rejectWithValue }) {
	const data = await Auth.login(query)
	Error(data, rejectWithValue)

	return data.data
})
