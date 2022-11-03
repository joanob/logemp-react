import { useAppSelector } from "common"
import React from "react"

const Header = (): JSX.Element => {
	const company = useAppSelector((state) => state.company)
	return (
		<header>
			{company.name} - - - - - {company.money}
		</header>
	)
}

export default Header
