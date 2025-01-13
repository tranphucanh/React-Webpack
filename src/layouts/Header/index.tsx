// Libraries
import { Image, Layout } from 'antd'
import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'

// Components
import { navigation } from '../Menu'

// Styles
import styles from './styles.module.scss'
import { FlexDiv, MenuStyled } from './styled'

// Utils
import { path } from '@/utility/path'

interface HeaderLayoutProps {}

const { Header } = Layout

const HeaderLayout: React.FC<HeaderLayoutProps> = () => {
	const location = useLocation()

	let pathName = location.pathname

	const selectedKey = useMemo(() => {
		const arrayPathname = pathName.split('/')

		switch ('/' + arrayPathname[1]) {
			default:
				return ''
		}
	}, [pathName])

	const menuItems: MenuProps['items'] = useMemo(() => {
		return (
			navigation?.map((item, index) => {
				let key = item.key
				if (item.key === path.IDENTIFIER) {
					key = index + item.key
				}
				return {
					label: <Link to={item.key}>{item.label}</Link>,
					key: key,
				}
			}) || []
		)
	}, [navigation])

	return (
		<Header className={styles.mainLayoutHeader}>
			<FlexDiv>
				<MenuStyled mode='horizontal' selectedKeys={[selectedKey]} className={styles.mainMenu} items={menuItems}></MenuStyled>
			</FlexDiv>
		</Header>
	)
}

export default HeaderLayout
