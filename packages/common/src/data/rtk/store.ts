import { configureStore, combineReducers } from "@reduxjs/toolkit"
import companySlice from "./companySlice"
import { localStorageMiddleware, reHydrateStore } from "./localStorage"

const rootReducer = combineReducers({
	company: companySlice
})

export const store = configureStore({
	reducer: rootReducer,
	preloadedState: reHydrateStore(),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(localStorageMiddleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
