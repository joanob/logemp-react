import { Company } from "./Company"
import { Contract } from "./Contract"
import { Vehicle } from "./Vehicle"

export interface Game {
	// COMPANY
	useCompany: () => Company

	setCompanyName: (name: Company["name"]) => void

	// VEHICLES
	useVehicles: () => Vehicle[]

	getVehicleByID: (vehicleId: Vehicle["id"]) => Vehicle | undefined

	// CONTRACTS
	useContracts: () => Contract[]
	useOngoingContracts: () => Contract[]
	useActiveContracts: () => Contract[]
	useAvailableContracts: () => Contract[]

	setContractVehicle: (contractID: Contract["id"]) => void
	startContractNow: (contractId: Contract["id"]) => void
	checkContracts: () => void
}
