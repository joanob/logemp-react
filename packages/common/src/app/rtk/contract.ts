import {
	store,
	useAppSelector,
	setVehicle,
	deleteContract,
	addMoney,
	startContract,
	addContract
} from "../../data/rtk"
import { createContract } from "../../helpers"
import { Contract } from "../../types/Contract"
import { Vehicle } from "../../types/Vehicle"

export const useContracts = (): Contract[] => {
	const contracts = useAppSelector((state) => state.contracts.contracts)

	return contracts
}

export const useOngoingContracts = (): Contract[] => {
	const ongoingContracts = useContracts().filter(
		(contract) => contract.start !== null
	)

	return ongoingContracts
}

export const useActiveContracts = (): Contract[] => {
	const activeContracts = useContracts().filter(
		(contract) => contract.vehicle !== null && contract.start === null
	)

	return activeContracts
}

export const useAvailableContracts = (): Contract[] => {
	const availableContracts = useContracts().filter(
		(contract) => contract.vehicle === null
	)

	return availableContracts
}

// GETTERS

export const getContractByID = (
	contractID: Contract["id"]
): Contract | undefined => {
	return store
		.getState()
		.contracts.contracts.find((contract) => contract.id === contractID)
}

export const getContractByVehicleID = (
	vehicleID: Vehicle["id"]
): Contract | undefined => {
	return store
		.getState()
		.contracts.contracts.find((contract) => contract.vehicle === vehicleID)
}

// SETTERS

export const setContractVehicle = (contractID: Contract["id"]): void => {
	const contract = getContractByID(contractID)
	if (contract === undefined) return
	if (contract.vehicle !== null) return

	// TODO: get first available vehicle
	const vehicle = store.getState().vehicles.vehicles[0]
	if (vehicle === undefined) return
	if (getContractByVehicleID(vehicle.id) !== undefined) return

	if (contract.distance > vehicle.maxDistance) return
	store.dispatch(setVehicle({ id: contractID, vehicle: vehicle.id }))
}

export const startContractNow = (contractId: Contract["id"]): void => {
	const contract = getContractByID(contractId)
	if (contract === undefined) return
	if (contract.start !== null || contract.vehicle === null) return
	store.dispatch(startContract(contractId))
}

// CHECKS
export const checkContracts = (): void => {
	if (store.getState().contracts.contracts.length < 2) {
		store.dispatch(addContract(createContract()))
	}

	const now = new Date().getTime()

	store.getState().contracts.contracts.forEach((contract) => {
		if (contract.start === null) {
			if (contract.caducity < now) {
				store.dispatch(deleteContract(contract.id))
			}
			return
		}

		const vehicle = store
			.getState()
			.vehicles.vehicles.find((vehicle) => vehicle.id === contract.vehicle)

		// Unnecessary check to avoid error highlighting
		if (vehicle === undefined || contract.start == null) return

		// Speed is cells per minute
		const timeToComplete =
			Math.floor(contract.distance / (vehicle.speed / 60)) * 1000
		const timeWhenCompleted = contract.start + timeToComplete

		if (timeWhenCompleted > contract.caducity) {
			// Contract timed out before completing
			store.dispatch(deleteContract(contract.id))
			return
		}

		if (now >= timeWhenCompleted) {
			const earnings = contract.earnings
			store.dispatch(addMoney(earnings))
			store.dispatch(deleteContract(contract.id))
		}
	})
}
