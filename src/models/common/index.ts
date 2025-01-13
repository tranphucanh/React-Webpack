import React, { FC } from 'react'

export interface IRoutes {
	path: string
	component: React.LazyExoticComponent<FC<any>>
	children?: {
		path: string
		component: React.LazyExoticComponent<FC<any>>
		children?: any[]
	}[]
}

export interface IText {
	size?: string
	color?: string
	bold?: number
}

export interface IScroll {
	scrollToFirstRowOnChange?: boolean
	x?: string | number | true
	y?: string | number
}
