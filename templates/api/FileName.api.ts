import { ExampleRoute } from 'Api/Routes'
import { BaseApi } from 'Redux/Store/BaseApi'

const FileName = BaseApi.injectEndpoints({
	endpoints: (builder) => ({
		// GET: GetAll
		getFileName: builder.query<ReqWrap<R_FileName.Data[]>, void>({
			query: () => ExampleRoute.base,
			providesTags: (result) =>
				result
					? [
						...result.data.map(({ id }) => ({
							type: 'FileName' as const,
							id,
						})),
						{ type: 'FileName', id: 'FileName-LIST' },
					  ]
					: [{ type: 'FileName', id: 'FileName-LIST' }],
		}),
		// GET: GetById
		getFileNameById: builder.query<ReqWrap<R_FileName.Data>, TID>({
			query: (id) => ExampleRoute.getById.concat(String(id)),
		}),
		// PUT: GetById
		updateFileName: builder.mutation<
			ReqWrap<R_FileName.Data>,
			Omit<R_FileName.Data, 'id'>
		>({
			query: (body) => ({
				url: ExampleRoute.create,
				method: 'PUT',
				body,
			}),
			invalidatesTags: [{ type: 'FileName', id: 'FileName-LIST' }],
		}),
		// DELETE: DeleteById
		deleteFileNameById: builder.mutation<ReqWrap<R_FileName.Data>, TID>({
			query: (id) => ({
				url: ExampleRoute.delete.concat(String(id)),
				method: 'DELETE',
			}),
		}),
		// POST: Create
		createFileName: builder.mutation<
			ReqWrap<R_FileName.Data>,
			Omit<R_FileName.Data, 'id'>
		>({
			query: (body) => ({
				url: ExampleRoute.create,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'FileName', id: 'FileName-LIST' }],
		}),
	}),
	overrideExisting: false,
})

export const {
	useGetFileNameQuery,
	useGetFileNameByIdQuery,
	useCreateFileNameMutation,
	useDeleteFileNameByIdMutation,
	useUpdateFileNameMutation,
} = FileName
