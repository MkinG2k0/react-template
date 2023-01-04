import { ExampleRoute } from 'Api/Routes'
import { BaseApi } from 'Redux/Store/BaseApi'

const ExampleApi = BaseApi.injectEndpoints({
	endpoints: (builder) => ({
		// GET: GetAll
		getExampleApi: builder.query<ReqWrap<R_ExampleApi.Data[]>, void>({
			query: () => ExampleRoute.base,
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
			query: (id) => ExampleRoute.getById.concat(String(id)),
		}),
		// PUT: GetById
		updateExampleApi: builder.mutation<
			ReqWrap<R_ExampleApi.Data>,
			Omit<R_ExampleApi.Data, 'id'>
		>({
			query: (body) => ({
				url: ExampleRoute.create,
				method: 'PUT',
				body,
			}),
			invalidatesTags: [{ type: 'ExampleApi', id: 'ExampleApi-LIST' }],
		}),
		// DELETE: DeleteById
		deleteExampleApiById: builder.mutation<ReqWrap<R_ExampleApi.Data>, TID>({
			query: (id) => ({
				url: ExampleRoute.delete.concat(String(id)),
				method: 'DELETE',
			}),
		}),
		// POST: Create
		createExampleApi: builder.mutation<
			ReqWrap<R_ExampleApi.Data>,
			Omit<R_ExampleApi.Data, 'id'>
		>({
			query: (body) => ({
				url: ExampleRoute.create,
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
	useUpdateExampleApiMutation,
} = ExampleApi
