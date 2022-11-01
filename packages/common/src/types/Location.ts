// Coordinates between -1024 and 1024
export interface Coordinates {
	x: number
	y: number
}

export interface Location {
	id: string
	name: string
	coord: Coordinates
}
