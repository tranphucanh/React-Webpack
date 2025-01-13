// Libraries
import React, { useMemo } from 'react'
import { Menu } from 'antd'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd'

import { itemSubmenu } from '../Menu'

interface IMenuItem {
	label: string
	key: string
	isDisable?: boolean
	children?: { label: string; key: string }[]
}

interface SubMenuProps {}

const SubMenu: React.FC<SubMenuProps> = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const pathName = location.pathname

	const arrayPathname = pathName.split('/')

	const selectedKey = useMemo(() => {
		if (arrayPathname.length > 2) {
			return [arrayPathname[0], arrayPathname[1], arrayPathname[2]].join('/')
		}

		return ''
	}, [arrayPathname])

	const listData: IMenuItem[] = useMemo(() => {
		return itemSubmenu?.[`/${arrayPathname[1]}`] || []
	}, [arrayPathname])

	const onNavigate = (e) => {
		navigate(e.key)
	}

	const menuItems: MenuProps['items'] = useMemo(() => {
		return (
			listData?.map((item) => {
				return {
					label: item.isDisable ? item.label : <Link to={item.key}>{item.label}</Link>,
					key: item.key,
					children: item.children?.map((d) => ({ label: <Link to={d.key}>{d.label}</Link>, key: d.key })),
				}
			}) || []
		)
	}, [listData])

	return <Menu mode='horizontal' selectedKeys={[selectedKey]} style={{ paddingLeft: 100 }} items={menuItems} />
}

export default SubMenu
