import { Game } from "../../types/Game"
import { setCompanyName, useCompany } from "./company"
import { useVehicles, getVehicleByID } from "./vehicle"
import {
	useContracts,
	useOngoingContracts,
	useActiveContracts,
	useAvailableContracts,
	setContractVehicle,
	startContractNow,
	checkContracts
} from "./contract"

export const game: Game = {
	useCompany,
	setCompanyName,
	useVehicles,
	getVehicleByID,
	useContracts,
	useOngoingContracts,
	useActiveContracts,
	useAvailableContracts,
	setContractVehicle,
	startContractNow,
	checkContracts
}
