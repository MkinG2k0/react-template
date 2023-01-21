import { CompInMain } from 'Pages/Main/Components/CompInMain/CompInMain'
import { NavLink } from 'react-router-dom'
import { NAV } from 'Routes/Navigation'

function Main() {
	return (
		<div className={'col'}>
			<div className={'px-5'}>
				Main Page <NavLink to={NAV.AUTH}>Nav Auth </NavLink>
			</div>
			<CompInMain />
		</div>
	)
}

export default Main
