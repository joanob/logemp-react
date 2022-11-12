import { game } from "common"

import styles from "./Header.module.scss"

const Header = (): JSX.Element => {
	const company = game.useCompany()

	return (
		<header className={styles.header}>
			<div>{company.name}</div>
			<div>{company.money}</div>
		</header>
	)
}

export default Header
