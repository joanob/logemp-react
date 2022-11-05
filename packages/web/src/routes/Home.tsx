import { useEffect } from "react"
import { game } from "common"

const Home = (): JSX.Element => {
	const ongoingContracts = game.useOngoingContracts()
	const activeContracts = game.useActiveContracts()
	const availableContracts = game.useAvailableContracts()

	useEffect(() => {
		const interval = setInterval(() => {
			game.checkContracts()
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<main>
			<section>
				{ongoingContracts.map((contract) => {
					if (contract.vehicle === null) return null

					const vehicle = game.getVehicleByID(contract.vehicle)
					if (vehicle === undefined) return null

					const secondsToComplete = Math.floor(
						contract.distance / (vehicle.speed / 60)
					)
					return <article key={contract.id}>{secondsToComplete}s</article>
				})}
			</section>
			<section>
				{activeContracts.map((contract) => {
					return (
						<article key={contract.id}>
							{contract.from} -&gt; {contract.to}{" "}
							<button
								onClick={() => {
									game.startContractNow(contract.id)
								}}
							>
								Start
							</button>
						</article>
					)
				})}
			</section>
			<section>
				{availableContracts.map((contract) => {
					return (
						<article key={contract.id}>
							{contract.from} -&gt; {contract.to}{" "}
							<button
								onClick={() => {
									game.setContractVehicle(contract.id)
								}}
							>
								Go
							</button>
						</article>
					)
				})}
			</section>
		</main>
	)
}

export default Home
