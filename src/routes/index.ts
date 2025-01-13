// Libraries
import { lazy } from 'react'

// Utils
import { path } from '@/utility/path'
import { IRoutes } from '@/models'

const Home = lazy(() => import('@/page/Home'))
const NotFound = lazy(() => import('@/page/NotFound'))

const routes: IRoutes[] = [
	{
		path: path.HOME,
		component: Home,
	},
	{
		path: '*',
		component: NotFound,
	},
]

export default routes
