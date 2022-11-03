import { useState, useEffect } from "react"
import {
	addContract,
	setContractVehicle,
	useAppDispatch,
	useAppSelector
} from "common"
import {
	createContract,
	getActiveContracts,
	getAvailableContracts
} from "common/src/helpers/contracts"
import { Contract } from "common/src/types/Contract"

const Home = (): JSX.Element => {
	const dispatch = useAppDispatch()
	const contracts = useAppSelector((state) => state.contracts.contracts)
	const vehicles = useAppSelector((state) => state.vehicles.vehicles)

	const [activeContracts, setActiveContracts] = useState<Contract[]>([])

	const [availableContracts, setAvailableContracts] = useState<Contract[]>([])

	if (contracts.length === 0) {
		dispatch(addContract(createContract()))
		dispatch(addContract(createContract()))
	}

	useEffect(() => {
		setActiveContracts(getActiveContracts(contracts))
		setAvailableContracts(getAvailableContracts(contracts))
	}, [contracts])

	return (
		<main>
			<section>
				{activeContracts.map((contract) => {
					return <article key={contract.id}>{contract.id}</article>
				})}
			</section>
			<div>
				{availableContracts.map((contract) => {
					return (
						<article key={contract.id}>
							{contract.from} -&gt; {contract.to}{" "}
							<button
								onClick={() => {
									setContractVehicle(contract.id, vehicles[0].id)
								}}
							>
								Go
							</button>
						</article>
					)
				})}
			</div>
		</main>
	)
}

export default Home
