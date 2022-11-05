import { addContract, addVehicle, store, useAppSelector } from "../../data/rtk"
import { setCompanyName as setName } from "../../data/rtk/companySlice"
import { initialVehicle } from "../../data/static/vehicles"
import { createContract } from "../../helpers"
import { Company } from "../../types/Company"

export const useCompany = (): Company => {
	const company = useAppSelector((state) => state.company)

	return company
}

export const setCompanyName = (name: Company["name"]): void => {
	store.dispatch(setName(name))
	store.dispatch(addVehicle(initialVehicle))
	store.dispatch(addContract(createContract()))
	store.dispatch(addContract(createContract()))
}
