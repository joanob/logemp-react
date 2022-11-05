import { store, useAppSelector } from "../../data/rtk"
import { Vehicle } from "../../types/Vehicle"

export const useVehicles = (): Vehicle[] => {
	const vehicles = useAppSelector((state) => state.vehicles.vehicles)

	return vehicles
}

// GETTERS

export const getVehicleByID = (
	vehicleId: Vehicle["id"]
): Vehicle | undefined => {
	return store
		.getState()
		.vehicles.vehicles.find((vehicle) => vehicle.id === vehicleId)
}
