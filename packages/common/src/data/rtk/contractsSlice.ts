import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"
import { Contract } from "../../types/Contract"
import { Vehicle } from "../../types/Vehicle"

export interface ContractsState {
	contracts: Map<Contract["id"], Contract>
}

const initialState: ContractsState = {
	contracts: new Map<Contract["id"], Contract>()
}

export const contractsSlice = createSlice({
	name: "contracts",
	initialState,
	reducers: {
		addContract: (state, action: PayloadAction<Contract>) => {
			do {
				action.payload.id = uuid()
			} while (state.contracts.has(action.payload.id))
			state.contracts.set(action.payload.id, action.payload)
		},
		deleteContract: (state, action: PayloadAction<Contract["id"]>) => {
			state.contracts.delete(action.payload)
		},
		setVehicle: (
			state,
			action: PayloadAction<{
				id: Contract["id"]
				vehicle: Vehicle["id"] | null
			}>
		) => {
			const contract = state.contracts.get(action.payload.id)
			if (contract === undefined) return
			contract.vehicle = action.payload.vehicle
			state.contracts.set(contract.id, contract)
		},
		startContract: (state, action: PayloadAction<Contract["id"]>) => {
			const contract = state.contracts.get(action.payload)
			if (contract === undefined) return
			contract.start = new Date().getTime()
			state.contracts.set(contract.id, contract)
		}
	}
})

export const { addContract, deleteContract, setVehicle } =
	contractsSlice.actions

export default contractsSlice.reducer
