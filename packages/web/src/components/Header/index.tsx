import { game } from "common"

const Header = (): JSX.Element => {
	const company = game.useCompany()

	return (
		<header>
			{company.name} - - - - - {company.money}
		</header>
	)
}

export default Header
