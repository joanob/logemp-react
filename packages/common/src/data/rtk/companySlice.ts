import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface CompanyState {
	name: string
	money: number
}

const initialState: CompanyState = {
	name: "",
	money: 0
}

export const companySlice = createSlice({
	name: "company",
	initialState,
	reducers: {
		setCompanyName: (state, action: PayloadAction<string>) => {
			state.name = action.payload
		},
		addMoney: (state, action: PayloadAction<number>) => {
			// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
			state.money += action.payload
		},
		subMoney: (state, action: PayloadAction<number>) => {
			state.money -= action.payload
		}
	}
})

export const { setCompanyName, addMoney, subMoney } = companySlice.actions

export default companySlice.reducer
