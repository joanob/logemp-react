import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit"
import { setCompanyName } from "./companySlice"
import { addVehicle } from "./vehiclesSlice"

export const gameMiddleware: Middleware =
	({ dispatch, getState }: MiddlewareAPI) =>
	(next: Dispatch) =>
	(action: Action) => {
		switch (action.type) {
			case setCompanyName.match(action):
				dispatch(
					addVehicle({
						id: "v1",
						name: "Vehicle 1",
						coord: { x: 0, y: 0 },
						speed: 5,
						maxDistance: 200
					})
				)
				break

			default:
				break
		}
		return next(action)
	}
