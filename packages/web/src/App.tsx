import { useState } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./routes/Home"
import Header from "./layout/Header"
import Navbar from "./layout/Navbar/BottomFixedNavbar"
import Clear from "./Clear"
import { game } from "common/src/app"

/**
 * App is the main component.
 *
 * Serves as router when user already has a company and displays company creation form otherwise.
 */
const App = (): JSX.Element => {
	const companyName = game.useCompany().name

	const [name, setName] = useState("")

	if (companyName == null || companyName === "") {
		return (
			<div>
				<input
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value)
					}}
				/>
				<button
					onClick={() => {
						game.setCompanyName(name)
					}}
				>
					Create
				</button>
			</div>
		)
	}

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/clear" element={<Clear />} />
			</Routes>
			<Navbar />
		</BrowserRouter>
	)
}
export default App
