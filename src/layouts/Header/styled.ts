import styled from 'styled-components'
import { Menu } from 'antd'

export const MenuStyled = styled(Menu)`
	> .ant-menu-item-selected::after {
		border-bottom-color: #fff !important;
	}
	> .ant-menu-item:hover::after {
		border-bottom-color: #fff !important;
	}
	> .ant-menu-item::after {
		margin-bottom: 0.625rem;
		color: white !important;
	}
	.ant-menu-item {
		color: #fff !important;
	}
`

export const FlexDiv = styled.div<{ $width?: string; $content?: string }>`
	display: flex;
	width: ${(props) => props.$width || ''};
	justify-content: ${(props) => props.$content || ''};
`

export const StyledSpan = styled.span<{ $color?: string }>`
	color: ${(props) => props.$color || 'white'};
	line-height: 1.5;
`
