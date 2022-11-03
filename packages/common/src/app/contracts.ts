import { setVehicle, store } from "../data/rtk"
import { Contract } from "../types/Contract"
import { Vehicle } from "../types/Vehicle"

export const setContractVehicle = (
	contractId: Contract["id"],
	vehicleId: Vehicle["id"] | null
): void => {
	if (vehicleId === null) {
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
