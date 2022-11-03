import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"
import { Contract } from "../../types/Contract"
import { Vehicle } from "../../types/Vehicle"

export interface ContractsState {
	contracts: Contract[]
}

const initialState: ContractsState = {
	contracts: []
}

export const contractsSlice = createSlice({
	name: "contracts",
	initialState,
	reducers: {
		addContract: (state, action: PayloadAction<Contract>) => {
			do {
				action.payload.id = uuid()
			} while (
				state.contracts.filter((contract) => contract.id === action.payload.id)
					.length !== 0
			)
			state.contracts.push(action.payload)
		},
		deleteContract: (state, action: PayloadAction<Contract["id"]>) => {
			state.contracts = state.contracts.filter(
				(contract) => contract.id !== action.payload
			)
		},
		setVehicle: (
			state,
			action: PayloadAction<{
				id: Contract["id"]
				vehicle: Vehicle["id"] | null
			}>
		) => {
			const contract = state.contracts.find(
				(contract) => contract.id === action.payload.id
			)

			if (contract === undefined) return

			contract.vehicle = action.payload.vehicle
		},
		startContract: (state, action: PayloadAction<Contract["id"]>) => {
			const contract = state.contracts.find(
				(contract) => contract.id === action.payload
			)

			if (contract === undefined) return

			contract.start = new Date().getTime()
		}
	}
})

export const { addContract, deleteContract, setVehicle, startContract } =
	contractsSlice.actions

export default contractsSlice.reducer
