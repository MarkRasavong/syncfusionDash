import React, {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useContext,
	useMemo,
	useState,
} from 'react'

export interface StoreContextInterface {
	activeMenu: boolean
	setActiveMenu: Dispatch<SetStateAction<boolean>>
}

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
}

const StateContext = createContext<StoreContextInterface | null>(null)

export const ContextProvider = ({ children }: PropsWithChildren) => {
	const [activeMenu, setActiveMenu] = useState(true)

	const globalContextValue = useMemo(
		() => ({ activeMenu, setActiveMenu, initialState }),
		[activeMenu, setActiveMenu]
	)

	return (
		<StateContext.Provider value={globalContextValue}>
			{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext)
