export { store } from "./store"

export { useAppDispatch, useAppSelector } from "./hooks"

export { setCompanyName, addMoney, subMoney } from "./companySlice"

export { addVehicle, setName, setCoord } from "./vehiclesSlice"

export {
	addContract,
	deleteContract,
	setVehicle,
	startContract
} from "./contractsSlice"
