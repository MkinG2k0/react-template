import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { RootState } from 'Redux/Store/IRootSate'

export const BaseApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
		prepareHeaders: (headers, { getState, endpoint }) => {
			const user = (getState() as RootState).Auth?.login.data

			if (user && endpoint !== 'refresh') {
				headers.set('Authorization', `Bearer ${user.token}`)
			}

			return headers
		},
	}),
	tagTypes: ['FileName', 'ExampleApi', 'Data'],

	endpoints: () => ({}),
})
