import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { Auth } from 'Redux/Slices/Auth/Auth.Slice'
import { BaseApi } from 'Redux/Store/BaseApi'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
	[BaseApi.reducerPath]: BaseApi.reducer,
	Auth,
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['none'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(),
})

setupListeners(store.dispatch)

export const persist = persistStore(store)
