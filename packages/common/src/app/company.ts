import { addVehicle, setCompanyName, store } from "../data/rtk"
import { initialVehicle } from "../data/static/vehicles"

export const createCompany = (name: string): void => {
	store.dispatch(addVehicle(initialVehicle))
	store.dispatch(setCompanyName(name))
}
