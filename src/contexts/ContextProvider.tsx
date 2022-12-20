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
	handleClick: (clicked: string) => void
	isClicked: {
		chat: boolean
		cart: boolean
		userProfile: boolean
		notification: boolean
	}
	setIsClicked: Dispatch<
		SetStateAction<{
			chat: boolean
			cart: boolean
			userProfile: boolean
			notification: boolean
		}>
	>
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
	const [isClicked, setIsClicked] = useState(initialState)

	const handleClick = (clicked: string) => {
		setIsClicked({ ...initialState, [clicked]: true })
	}

	const globalContextValue = useMemo(
		() => ({ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick }),
		[activeMenu, setActiveMenu, isClicked, setIsClicked]
	)

	return (
		<StateContext.Provider value={globalContextValue}>
			{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext)
