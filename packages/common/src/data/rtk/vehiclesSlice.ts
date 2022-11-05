import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"
import { Vehicle } from "../../types/Vehicle"

export interface VehiclesState {
	vehicles: Vehicle[]
}

const initialState: VehiclesState = {
	vehicles: []
}

export const vehiclesSlice = createSlice({
	name: "vehicles",
	initialState,
	reducers: {
		addVehicle: (state, action: PayloadAction<Vehicle>) => {
			do {
				action.payload.id = uuid()
			} while (
				state.vehicles.filter((vehicles) => vehicles.id === action.payload.id)
					.length !== 0
			)
			state.vehicles.push(action.payload)
		},
		setVehicleName: (
			state,
			action: PayloadAction<{ id: Vehicle["id"]; name: Vehicle["name"] }>
		) => {
			const vehicles = state.vehicles.find(
				(vehicles) => vehicles.id === action.payload.id
			)

			if (vehicles === undefined) return

			vehicles.name = action.payload.name
		},
		setCoord: (
			state,
			action: PayloadAction<{
				id: Vehicle["id"]
				coord: Vehicle["coord"]
			}>
		) => {
			const vehicles = state.vehicles.find(
				(vehicles) => vehicles.id === action.payload.id
			)

			if (vehicles === undefined) return

			vehicles.coord = action.payload.coord
		}
	}
})

export const { addVehicle, setVehicleName, setCoord } = vehiclesSlice.actions

export default vehiclesSlice.reducer
