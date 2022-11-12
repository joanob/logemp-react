import { Link } from "react-router-dom"

import styles from "./NavbarLink.module.scss"

interface Props {
	to: string
	text: string
	active?: boolean
}

const NavbarLink = ({ to, text, active }: Props): JSX.Element => {
	return (
		<div
			className={
				active === undefined || active ? styles.linkActive : styles.link
			}
		>
			<Link to={to}>{text}</Link>
		</div>
	)
}

export default NavbarLink
