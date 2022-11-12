import React from "react"
import ReactDOM from "react-dom/client"
import { Wrapper } from "common"
import App from "./App"
import "./styles.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Wrapper>
			<App />
		</Wrapper>
	</React.StrictMode>
)
