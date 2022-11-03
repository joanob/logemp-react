import { store, addVehicle } from "common"

export const newVehicle = (): void => {
	store.dispatch(
		addVehicle({
			id: "v1",
			name: "Vehicle 1",
			coord: { x: 0, y: 0 },
			speed: 5,
			maxDistance: 200
		})
	)
}
