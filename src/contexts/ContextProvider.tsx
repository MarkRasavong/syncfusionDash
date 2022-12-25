/* eslint-disable @typescript-eslint/no-explicit-any */
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
	screenSize: number
	setScreenSize: Dispatch<SetStateAction<number>>
	currentColor: string
	setCurrentColor: Dispatch<SetStateAction<string>>
	currentMode: string
	setCurrentMode: Dispatch<SetStateAction<string>>
	themeSettings: boolean
	setThemeSettings: Dispatch<SetStateAction<boolean>>
	setColor: (e: React.MouseEvent<HTMLInputElement>) => void
	setMode: (e: React.MouseEvent<HTMLInputElement>) => void
}

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
}

const StateContext = createContext<any>(null)

export const ContextProvider = ({ children }: PropsWithChildren) => {
	const [activeMenu, setActiveMenu] = useState(true)
	const [isClicked, setIsClicked] = useState(initialState)
	const [screenSize, setScreenSize] = useState(0)
	const [currentColor, setCurrentColor] = useState('#03C9D7')
	const [currentMode, setCurrentMode] = useState('Light')
	const [themeSettings, setThemeSettings] = useState(false)

	const setMode = (e: React.MouseEvent<HTMLInputElement>) => {
		setCurrentMode((e.target as HTMLInputElement).value)
		localStorage.setItem('themeMode', (e.target as HTMLInputElement).value)
	}

	const setColor = (e: React.MouseEvent<HTMLInputElement>) => {
		setCurrentColor((e.target as HTMLInputElement).value)
		localStorage.setItem('colorMode', (e.target as HTMLInputElement).value)
	}

	const handleClick = (clicked: string) => {
		setIsClicked({ ...initialState, [clicked]: true })
	}

	const globalContextValue = useMemo(
		() => ({
			activeMenu,
			setActiveMenu,
			isClicked,
			setIsClicked,
			handleClick,
			screenSize,
			setScreenSize,
			currentColor,
			currentMode,
			setCurrentMode,
			setCurrentColor,
			themeSettings,
			setThemeSettings,
			setColor,
			setMode,
		}),
		[
			activeMenu,
			setActiveMenu,
			isClicked,
			setIsClicked,
			screenSize,
			setScreenSize,
			currentColor,
			currentMode,
			setCurrentMode,
			setCurrentColor,
			themeSettings,
			setThemeSettings,
			setColor,
			setMode,
		]
	)

	return (
		<StateContext.Provider value={globalContextValue}>
			{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext)
