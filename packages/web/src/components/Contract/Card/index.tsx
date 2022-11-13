import styles from "./Card.module.scss"

/**
 * ContractCard displays contract data as a card.
 *
 */
// Display from, to, distance, coveredDistance?, earnings, caducityString?, vehicle.
// functions for selecting vehicle and starting

interface Props {
	from: string
	to: string
	earnings: number
	distance: number
	caducity?: string
	selectVehicle?: () => void
	vehicle?: string
	start?: () => void
	coveredDistance?: number
	timeToComplete?: string
}

const ContractCard = ({
	from,
	to,
	earnings,
	distance,
	caducity,
	selectVehicle,
	vehicle,
	start,
	coveredDistance,
	timeToComplete
}: Props): JSX.Element => {
	return (
		<div className={styles.card}>
			<div>&lt;-{from}</div>
			<div>{distance} km</div>
			<div>-&gt;{to}</div>
			<div>{earnings} $</div>
			{coveredDistance !== undefined ? (
				<div className={styles.progress}>
					<div>{coveredDistance}</div>
					<div className={styles.progressBar}>
						<div className={styles.progressBarText}>{timeToComplete}</div>
						<div
							className={styles.progressBarDone}
							style={{
								width: ((coveredDistance / distance) * 100).toString() + "%"
							}}
						></div>
					</div>
					<div>{distance}</div>
				</div>
			) : vehicle !== undefined ? (
				<>
					<div>{caducity}</div>
					<button onClick={start}>Start</button>
				</>
			) : (
				<>
					<div>{caducity}</div>
					<button onClick={selectVehicle}>Vehicle</button>
				</>
			)}
		</div>
	)
}

export default ContractCard
