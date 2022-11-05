import { useState } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { TextField, Button } from "@mui/material"
import Home from "./routes/Home"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
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
				<TextField
					variant="standard"
					value={name}
					onChange={(e) => {
						setName(e.target.value)
					}}
				/>
				<Button
					onClick={() => {
						game.setCompanyName(name)
					}}
				>
					Create
				</Button>
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
