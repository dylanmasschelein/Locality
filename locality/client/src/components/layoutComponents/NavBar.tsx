import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Navbar = () => {
	const { user, logoutUser } = useContext(AuthContext);
	return (
		<nav>
			<div>
				<h1>App Name</h1>
				<div>
					{user ? (
						<>
							<Link to="/">Home</Link>
							<button onClick={logoutUser}>Logout</button>
						</>
					) : (
						<>
							<Link to="/register?customer=true">Customer Register</Link>
							<Link to="/register?sp=true">Service Provider Register</Link>
							<Link to="/login">login</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
