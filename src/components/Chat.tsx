import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider'
import { chatData } from '../data/dummy'
import Button from './Button'

const Chat = () => {
	const { currentColor, setIsClicked, initialState } = useStateContext()

	return (
		<div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
			<div className="flex justify-between items-center">
				<div className="flex gap-3">
					<p className="font-semibold text-lg dark:text-gray-200">Messages</p>
					<button
						type="button"
						className="text-white  text-xs rounded p-1 px-2 bg-orange"
					>
						5 New
					</button>
				</div>
				<Button
					onClick={() => setIsClicked(initialState)}
					icon={<MdOutlineCancel />}
					color="rgb(153, 171, 180)"
					bgHoverColor="light-gray"
					size="2xl"
					borderRadius="50%"
					bgColor=""
					text=""
				/>
			</div>
			<div className="mt-5 ">
				{chatData?.map((ele) => (
					<div
						key={`chatData${Math.random()}`}
						className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
					>
						<div className="relative">
							<img
								className="rounded-full h-10 w-10"
								src={ele.image}
								alt={ele.message}
							/>
							<span
								style={{ background: 'red' }}
								className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
							/>
						</div>
						<div>
							<p className="font-semibold dark:text-gray-200 ">{ele.message}</p>
							<p className="text-gray-500 dark:text-gray-400 text-sm">
								{ele.desc}
							</p>
							<p className="text-gray-500 dark:text-gray-400 text-xs">
								{ele.time}
							</p>
						</div>
					</div>
				))}
				<div className="mt-5">
					<Button
						onClick={() => setIsClicked(initialState)}
						color="white"
						bgColor={currentColor}
						text="See all messages"
						borderRadius="10px"
						width="full"
					/>
				</div>
			</div>
		</div>
	)
}
export default Chat
