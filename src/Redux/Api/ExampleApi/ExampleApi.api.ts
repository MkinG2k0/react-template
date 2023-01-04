import { BaseApi } from 'Redux/Store/BaseApi'

const ExampleApi = BaseApi.injectEndpoints({
	endpoints: (builder) => ({
		// GET: GetAll
		getExampleApi: builder.query<ReqWrap<R_ExampleApi.Data[]>, void>({
			query: () => `ExampleApi`,
			providesTags: (result) =>
				result
					? [
						...result.data.map(({ id }) => ({
							type: 'ExampleApi' as const,
							id,
						})),
						{ type: 'ExampleApi', id: 'ExampleApi-LIST' },
					  ]
					: [{ type: 'ExampleApi', id: 'ExampleApi-LIST' }],
		}),
		// GET: GetById
		getExampleApiById: builder.query<ReqWrap<R_ExampleApi.Data>, TID>({
			query: (id) => `ExampleApi/${id}`,
		}),
		// DELETE: DeleteById
		deleteExampleApiById: builder.mutation<ReqWrap<R_ExampleApi.Data>, TID>({
			query: (id) => ({
				url: `ExampleApi/${id}`,
				method: 'DELETE',
			}),
		}),
		// POST: Create
		createExampleApi: builder.mutation<
			ReqWrap<R_ExampleApi.Data>,
			Omit<R_ExampleApi.Data, 'id'>
		>({
			query: (body) => ({
				url: 'ExampleApi',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'ExampleApi', id: 'ExampleApi-LIST' }],
		}),
	}),
	overrideExisting: false,
})

export const {
	useGetExampleApiQuery,
	useGetExampleApiByIdQuery,
	useCreateExampleApiMutation,
	useDeleteExampleApiByIdMutation,
} = ExampleApi
