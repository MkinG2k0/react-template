import { CompInMain } from 'Pages/Main/components/CompInMain/CompInMain'
import { NavLink } from 'react-router-dom'
import { NAV } from 'Routes/Navigation'

function Main() {
	return (
		<div>
			<div>
				Main Page <NavLink to={NAV.AUTH}>Nav Auth </NavLink>
			</div>
			<CompInMain />
		</div>
	)
}

export default Main
