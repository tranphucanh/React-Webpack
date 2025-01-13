import { Modal } from 'antd'
import dayjs from 'dayjs'
import { NotifyEnums } from './enum'
import { DATE_FORMAT } from './constants'
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)

export const notifyModal = (type: NotifyEnums, content: string) => {
	if (content && type) {
		return Modal[type]({ content })
	}
}

export const formatDate = (date: string, format = DATE_FORMAT) => {
	if (!date) {
		return date
	}
	return dayjs(date).format(format)
}

export const formatNumber = (number: number = 0) => {
	if (+number && typeof +number === 'number') {
		return Number((+number).toFixed(2)).toLocaleString()
	}

	return number
}
