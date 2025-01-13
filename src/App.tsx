// Libraries
import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

// Styles
import 'antd/dist/reset.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/common.scss'

// Page
import Home from '@/page/Home'

// Routes
import ProtectedRoutes from '@/routes/ProtectedRoutes'
import PrivateRoutes from '@/routes/PrivateRoutes'

const App: React.FC = () => {
	return (
		<Fragment>
			<Routes>
				<Route
					path='*'
					element={
						<PrivateRoutes>
							<ProtectedRoutes />
						</PrivateRoutes>
					}
				/>
			</Routes>
			<ToastContainer />
		</Fragment>
	)
}

export default App
