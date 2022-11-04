import { Coordinates } from "../types/Location"

export const calculateDistance = (c1: Coordinates, c2: Coordinates): number => {
	return Math.floor(
		Math.sqrt(Math.pow(c2.x + c1.x, 2) + Math.pow(c2.y + c1.y, 2))
	)
}
