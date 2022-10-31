import { Coordinates } from "./Location"

export interface Vehicle {
	id: string
	name: string
	coord: Coordinates
	speed: number
	maxDistance: number
}
