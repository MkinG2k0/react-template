import 'Style/font.scss'
import 'Style/global.scss'

import { Layout } from 'Components/Layout/Layout'
import { FC, Suspense } from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { persist, store } from 'Redux/Store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Pages } from 'Routes/Pages'
import { CustomRouter } from 'Routes/Router'

import { History } from './History'

export function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persist} loading={<Loader />}>
				<CustomRouter history={History}>
					<Layout>
						<Suspense fallback={<Loader />}>
							<Routes>
								{Pages.map(({ path, Component }) => (
									<Route key={path} path={path} element={<Component />} />
								))}
							</Routes>
						</Suspense>
					</Layout>
				</CustomRouter>
			</PersistGate>
		</Provider>
	)
}

const Loader: FC = () => {
	return <>Load</>
}
