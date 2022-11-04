import locations from "../data/static/locations"
import { Contract } from "../types/Contract"
import { Location } from "../types/Location"
import { calculateDistance } from "./location"

const earningsperDistance = 1.25

const calculateEarnings = (distance: number): number => {
	const baseEarnings = distance * earningsperDistance
	const extra = baseEarnings * (Math.random() * 0.1 - 0.05)
	return Math.floor(baseEarnings + extra)
}

export const createContract = (): Contract => {
	const from = locations[Math.floor(Math.random() * locations.length)]
	let to: Location
	do {
		to = locations[Math.floor(Math.random() * locations.length)]
	} while (from.id === to.id)
	const distance = calculateDistance(from.coord, to.coord)
	const earnings = calculateEarnings(distance)
	const caducity = new Date().getTime() + 1000 * 3600 * 24 * 2
	return {
		id: "",
		from: from.id,
		to: to.id,
		distance,
		earnings,
		caducity,
		vehicle: null,
		start: null
	}
}

export const getActiveContracts = (contracts: Contract[]): Contract[] => {
	return contracts.filter((contract) => contract.vehicle !== null)
}

export const getAvailableContracts = (contracts: Contract[]): Contract[] => {
	return contracts.filter((contract) => contract.vehicle === null)
}
