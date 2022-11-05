import { PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { store } from "../../data/rtk"

export const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
	return <Provider store={store}>{children}</Provider>
}
