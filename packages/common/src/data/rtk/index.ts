export { store } from "./store"

export { useAppDispatch, useAppSelector } from "./hooks"

export { setCompanyName, addMoney, subMoney } from "./companySlice"

export { addVehicle, setVehicleName, setCoord } from "./vehiclesSlice"

export {
	addContract,
	deleteContract,
	setVehicle,
	startContract
} from "./contractsSlice"
