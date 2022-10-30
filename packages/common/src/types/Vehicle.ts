import Location from "./Location"

export default interface Vehicle {
	id: string
	name: string
	location: Location
	speed: number
	maxDistance: number
}
