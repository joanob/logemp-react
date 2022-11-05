export const localStorageMiddleware = (store: any) => {
	return (next: any) => (action: any) => {
		const result = next(action)
		localStorage.setItem("logemp", JSON.stringify(store.getState()))
		return result
	}
}

export const reHydrateStore = (): any => {
	const appState = localStorage.getItem("logemp")
	if (appState == null) {
		return {}
	}
	return JSON.parse(appState)
}
