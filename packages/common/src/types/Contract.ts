import { Company } from "./Company"
import { Location } from "./Location"
import { Vehicle } from "./Vehicle"

export interface Contract {
	id: string
	from: Location["id"]
	to: Location["id"]
	distance: number
	earnings: Company["money"]
	caducity: number
	vehicle: Vehicle["id"] | null
	start: number | null
}
