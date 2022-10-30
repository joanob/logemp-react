import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Clear = (): JSX.Element => {
	const navigate = useNavigate()

	useEffect(() => {
		localStorage.removeItem("appState")

		navigate("/")
	}, [navigate])

	navigate("/")
	return <div>Clear</div>
}

export default Clear
