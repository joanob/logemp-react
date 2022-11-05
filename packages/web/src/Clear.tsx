import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Clear = (): JSX.Element => {
	const navigate = useNavigate()

	useEffect(() => {
		localStorage.removeItem("logemp")

		navigate("/")
	}, [navigate])

	navigate("/")
	return <div>Clear</div>
}

export default Clear
