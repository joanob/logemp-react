export const localStorageMiddleware = (store: any) => {
	return (next: any) => (action: any) => {
		const result = next(action)
		localStorage.setItem("appState", JSON.stringify(store.getState()))
		return result
	}
}

export const reHydrateStore = (): any => {
	const appState = localStorage.getItem("appState")
	if (appState == null) {
		return {}
	}
	return JSON.parse(appState)
}
