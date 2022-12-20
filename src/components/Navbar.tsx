import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import {
	StoreContextInterface,
	useStateContext,
} from '../contexts/ContextProvider'

interface NavBtnProps {
	title: string
	color: string
	dotColor?: string
	customFn: () => void
	icon: React.ReactNode
}

const NavBtn = ({ title, customFn, icon, color, dotColor }: NavBtnProps) => (
	<TooltipComponent content={title} position="BottomCenter">
		<button
			type="button"
			onClick={customFn}
			style={{ color }}
			className="relative text-xl rounded-full p-3 hover:bg-light-gray"
		>
			<span
				style={{ background: dotColor }}
				className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
			>
				{icon}
			</span>
		</button>
	</TooltipComponent>
)

NavBtn.defaultProps = {
	dotColor: '',
}

const Navbar = () => {
	const { setActiveMenu } = useStateContext() as StoreContextInterface

	return (
		<div className="flex justify-items-between p-2 md:mx-6 relative">
			<NavBtn
				title="Menu"
				customFn={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
				color="blue"
				icon={<AiOutlineMenu />}
			/>
		</div>
	)
}

export default Navbar
