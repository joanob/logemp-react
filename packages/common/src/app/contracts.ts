import {
	setVehicle,
	store,
	startContract,
	addMoney,
	deleteContract
} from "../data/rtk"
import { Contract } from "../types/Contract"
import { Vehicle } from "../types/Vehicle"

export const setContractVehicle = (
	contractId: Contract["id"],
	vehicleId: Vehicle["id"] | null
): void => {
	const contract = store
		.getState()
		.contracts.contracts.find((contract) => contract.id === contractId)
	if (contract === undefined) return
	if (vehicleId === null) {
		if (contract.start !== null) return
		store.dispatch(setVehicle({ id: contractId, vehicle: null }))
		return
	}
	if (
		store
			.getState()
			.contracts.contracts.find(
				(contract) => contract.vehicle === vehicleId
			) === undefined
	) {
		store.dispatch(setVehicle({ id: contractId, vehicle: vehicleId }))
	}
}

export const startContractNow = (contractId: Contract["id"]): void => {
	const contract = store
		.getState()
		.contracts.contracts.find((contract) => contract.id === contractId)
	if (contract === undefined) return
	if (contract.vehicle === null || contract.start !== null) return
	store.dispatch(startContract(contractId))
}

// Check completed and overdue contracts
export const checkContracts = (): void => {
	const now = new Date().getTime()

	store.getState().contracts.contracts.forEach((contract) => {
		// For each contract if has not started check caducity
		if (contract.start === null) {
			if (contract.caducity > now) {
				store.dispatch(deleteContract(contract.id))
			}
			return
		}
		// If contract has started check completed time is not over caducity time
		const vehicle = store
			.getState()
			.vehicles.vehicles.find((vehicle) => vehicle.id === contract.vehicle)
		// Unnecessary check to avoid error highlighting
		if (vehicle !== undefined && contract.start !== null) {
			const timeSinceStart = now - contract.start
			const timeToComplete = contract.distance / vehicle.speed
			const timeWhenCompleted = timeSinceStart + timeToComplete
			if (timeWhenCompleted > contract.caducity) {
				// Contract timed out before completing
				store.dispatch(deleteContract(contract.id))
				return
			}
			// Contract completed in time
			const earnings = contract.earnings
			store.dispatch(addMoney(earnings))
			store.dispatch(deleteContract(contract.id))
		}
	})
}
