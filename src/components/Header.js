import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<nav className="Header">
			<div className="nav-links" style={{ margin: '0' }}>
				<Link to="/" className="link">
					<h1>IRONMAKEUP</h1>
				</Link>
			</div>
			<div>
				<Link to="/brands" className="link header-link">
					Brands & Categories
				</Link>
				<Link to="/connect"><button>Stay connected!</button></Link>
			</div>
		</nav>
	);
}

export default Header;
