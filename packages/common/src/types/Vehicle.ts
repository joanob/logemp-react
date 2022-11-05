import { Coordinates } from "./Location"

export interface Vehicle {
	id: string
	name: string
	coord: Coordinates
	// Speed: cells per minute
	speed: number
	maxDistance: number
}
