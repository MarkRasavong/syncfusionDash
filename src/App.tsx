import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

const App = () => {
	const activeMenu = true

	return (
		<div>
			<BrowserRouter>
				<div className="flex relative dark:bg-main-dark-bg">
					{/* floating settings buutton */}
					<div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
						<TooltipComponent content="Settings">
							<button
								type="button"
								className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
								style={{ background: 'blue', borderRadius: '50%' }}
							>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>
					{/* dynamic sidebar */}
					{activeMenu ? (
						<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
							Sidebar
						</div>
					) : (
						<div className="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>
					)}
					{/* navbar */}
					<div
						className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
							activeMenu ? 'md:ml-72' : 'flex-2'
						}`}
					>
						<div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
							navbar
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
