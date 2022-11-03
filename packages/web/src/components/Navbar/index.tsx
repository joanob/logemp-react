import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss"

const BottomFixedNavbar = (): JSX.Element => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarFixed}>
				<div className={styles.navbarLayout}>
					<div className={styles.navbarLayoutItem}>
						<Link to="/">Home</Link>
					</div>
					<div className={styles.navbarLayoutItem}>
						<Link to="/bank">Bank</Link>
					</div>
					<div className={styles.navbarLayoutItem}>
						<Link to="/settings">Settings</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default BottomFixedNavbar
