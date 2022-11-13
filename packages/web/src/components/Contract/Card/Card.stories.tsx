import { ComponentMeta, ComponentStory } from "@storybook/react"

import ContractCard from "."

export default {
	title: "ContractCard",
	component: ContractCard
} as ComponentMeta<typeof ContractCard>

export const ContractAvailable: ComponentStory<typeof ContractCard> = () => (
	<ContractCard
		from="origin"
		to="destination"
		earnings={50}
		distance={100}
		caducity="14/11 14:34"
	/>
)

export const ContractWaiting: ComponentStory<typeof ContractCard> = () => (
	<ContractCard
		from="origin"
		to="destination"
		earnings={50}
		distance={100}
		vehicle="Coche"
	/>
)

export const ContractOngoing: ComponentStory<typeof ContractCard> = () => (
	<ContractCard
		from="origin"
		to="destination"
		earnings={50}
		distance={100}
		coveredDistance={60}
		timeToComplete="1:34"
	/>
)
