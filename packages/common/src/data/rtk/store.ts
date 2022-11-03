import { configureStore, combineReducers } from "@reduxjs/toolkit"
import companySlice from "./companySlice"
import contractsSlice from "./contractsSlice"
import { gameMiddleware } from "./gameMiddleware"
import { localStorageMiddleware, reHydrateStore } from "./localStorage"
import vehiclesSlice from "./vehiclesSlice"

const rootReducer = combineReducers({
	company: companySlice,
	vehicles: vehiclesSlice,
	contracts: contractsSlice
})

export const store = configureStore({
	reducer: rootReducer,
	preloadedState: reHydrateStore(),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(localStorageMiddleware, gameMiddleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
