import React from 'react'

import { Layout } from 'antd'
// import HeaderLayout from './Header'
interface LayoutTemplateProps {
	children: React.ReactNode
}

const LayoutTemplate: React.FC<LayoutTemplateProps> = ({ children }) => {
	return (
		<Layout>
			{/* <HeaderLayout /> */}
			{children}
		</Layout>
	)
}

export default LayoutTemplate
