import { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { TextField, Button } from "@mui/material"
import { setCompanyName, useAppSelector, useAppDispatch } from "common"
import Home from "./routes/Home"
import Clear from "./Clear"

/**
 * App is the main component.
 *
 * Serves as router when user already has a company and displays company creation form otherwise.
 */
const App = (): JSX.Element => {
	const dispatch = useAppDispatch()
	const companyName = useAppSelector((state) => state.company.name)

	const [name, setName] = useState("")

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />
		},
		{
			path: "/clear",
			element: <Clear />
		}
	])

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
						dispatch(setCompanyName(name))
					}}
				>
					Create
				</Button>
			</div>
		)
	}

	return <RouterProvider router={router} />
}
export default App
