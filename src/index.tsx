// Libraries
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'
import viVN from 'antd/locale/vi_VN'

// Components
import App from './App'

// Store
import { store } from '@/store'
import { configAntd, componentToken } from '@/styles/theme'

const container = document.getElementById('root')
const root = createRoot(container as Element)

dayjs?.locale('vi')

root.render(
	<BrowserRouter>
		<ConfigProvider
			theme={{
				components: componentToken,
				token: configAntd,
			}}
			locale={viVN}
		>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<App />
				</Provider>
			</ThemeProvider>
		</ConfigProvider>
	</BrowserRouter>
)
