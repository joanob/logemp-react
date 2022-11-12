import { useLocation } from "react-router-dom"
import { NavbarLink } from "../../../components/Navbar"
import styles from "./BottomFixedNavbar.module.scss"

const BottomFixedNavbar = (): JSX.Element => {
	const location = useLocation()

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarFixed}>
				<div className={styles.navbarLayout}>
					<div className={styles.navbarLayoutItem}>
						<NavbarLink to="/" text="Home" active={location.pathname === "/"} />
					</div>
					<div className={styles.navbarLayoutItem}>
						<NavbarLink
							to="/bank"
							text="Bank"
							active={location.pathname === "/bank"}
						/>
					</div>
					<div className={styles.navbarLayoutItem}>
						<NavbarLink
							to="/settings"
							text="Settings"
							active={location.pathname === "/settings"}
						/>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default BottomFixedNavbar
