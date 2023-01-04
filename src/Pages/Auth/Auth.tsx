import { NavLink } from 'react-router-dom'
import { NAV } from 'Routes/Navigation'

function Auth() {
	return (
		<div>
			AnyPage <NavLink to={NAV.MAIN}>Main</NavLink>
		</div>
	)
}

export default Auth
