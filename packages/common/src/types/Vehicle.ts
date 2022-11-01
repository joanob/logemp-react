import { Coordinates } from "./Location"

export interface Vehicle {
	id: string
	name: string
	coord: Coordinates
	// Speed: cells per second
	speed: number
	maxDistance: number
}
