import { lazy } from 'react'
import { NAV } from 'Routes/Navigation'

export const Pages = [
	{
		path: NAV.MAIN,
		Component: lazy(() => import('Pages/Main/Main')),
	},
	{
		path: NAV.AUTH,
		Component: lazy(() => import('Pages/Auth/Auth')),
	},
]
