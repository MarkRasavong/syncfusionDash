import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import avatar from '../data/avatar.jpg'

import {
	StoreContextInterface,
	useStateContext,
} from '../contexts/ContextProvider'
import { Cart, Chat, Notification, UserProfile } from '.'

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
			onClick={() => customFn()}
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
	const { setActiveMenu, isClicked, handleClick, screenSize, setScreenSize } =
		useStateContext() as StoreContextInterface

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth)

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false)
		} else {
			setActiveMenu(true)
		}
	}, [screenSize])

	return (
		<div className="flex justify-between p-2 md:mx-6 relative">
			<NavBtn
				title="Menu"
				customFn={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
				color="blue"
				icon={<AiOutlineMenu />}
			/>
			<div className="flex">
				<NavBtn
					title="Cart"
					customFn={() => handleClick('cart')}
					color="blue"
					icon={<FiShoppingCart />}
				/>
				<NavBtn
					title="Chat"
					customFn={() => handleClick('chat')}
					dotColor="#03C9D7"
					color="blue"
					icon={<BsChatLeft />}
				/>
				<NavBtn
					title="Notifications"
					customFn={() => handleClick('notification')}
					dotColor="#03C9D7"
					color="blue"
					icon={<RiNotification3Line />}
				/>
				<TooltipComponent content="Profile" position="BottomCenter">
					<div
						role="presentation"
						className="flex item-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
						onClick={() => handleClick('userProfile')}
					>
						<img
							className="rounded-full w-8 h-8"
							src={avatar}
							alt="user avatar"
						/>
						<p>
							<span className="text-gray-400 text-14">Hi, </span>{' '}
							<span className="text-gray-400 text-bold ml-1 text-14">
								Michel
							</span>
						</p>
						<MdKeyboardArrowDown className="text-gray-400 text-14" />
					</div>
				</TooltipComponent>
				{isClicked.cart === true && <Cart />}
				{isClicked.chat === true && <Chat />}
				{isClicked.notification === true && <Notification />}
				{isClicked.userProfile === true && <UserProfile />}
			</div>
		</div>
	)
}

export default Navbar
