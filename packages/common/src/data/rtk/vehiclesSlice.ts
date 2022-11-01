import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"
import { Vehicle } from "../../types/Vehicle"

export interface VehiclesState {
	vehicles: Map<Vehicle["id"], Vehicle>
}

const initialState: VehiclesState = {
	vehicles: new Map<Vehicle["id"], Vehicle>()
}

export const vehiclesSlice = createSlice({
	name: "vehicles",
	initialState,
	reducers: {
		addVehicle: (state, action: PayloadAction<Vehicle>) => {
			do {
				action.payload.id = uuid()
			} while (state.vehicles.has(action.payload.id))
			state.vehicles.set(action.payload.id, action.payload)
		},
		setName: (
			state,
			action: PayloadAction<{ id: Vehicle["id"]; name: Vehicle["name"] }>
		) => {
			const vehicle = state.vehicles.get(action.payload.id)
			if (vehicle === undefined) return
			vehicle.name = action.payload.name
			state.vehicles.set(vehicle.id, vehicle)
		},
		setCoord: (
			state,
			action: PayloadAction<{
				id: Vehicle["id"]
				coord: Vehicle["coord"]
			}>
		) => {
			const vehicle = state.vehicles.get(action.payload.id)
			if (vehicle === undefined) return
			vehicle.coord = action.payload.coord
			state.vehicles.set(vehicle.id, vehicle)
		}
	}
})

export const { addVehicle, setName, setCoord } = vehiclesSlice.actions

export default vehiclesSlice.reducer
