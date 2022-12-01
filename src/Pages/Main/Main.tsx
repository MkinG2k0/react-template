import { NavLink } from 'react-router-dom'
import { NAV } from 'Routes/Routes'

function Main() {
	return (
		<div>
			Main Page <NavLink to={NAV.ANY}>Nav Any page</NavLink>
		</div>
	)
}

export default Main
