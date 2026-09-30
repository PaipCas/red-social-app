import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginNav() {
	const [isOpen, setIsOpen] = useState(false);

	const openNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="w3-top">
			<div className="w3-bar w3-theme-d2 w3-left-align w3-large">
				<button className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" onClick={openNav}><i className="fa fa-bars"></i></button>
				<Link to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i className="fa fa-home w3-margin-right"></i>Red Social</Link>
				<Link to="/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"><i className="fa fa-sign-in"></i> Iniciar sesión</Link>
				<Link to="/register" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"><i className="fa fa-user-plus"></i> Registrarse</Link>
			</div>

			{/* Navbar móvil */}
			<div id="navDemo" className={`w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large ${isOpen ? 'w3-show' : ''}`}>
				<Link to="/" className="w3-bar-item w3-button w3-padding-large" onClick={() => setIsOpen(false)}>Inicio</Link>
				<Link to="/login" className="w3-bar-item w3-button w3-padding-large" onClick={() => setIsOpen(false)}>Iniciar sesión</Link>
				<Link to="/register" className="w3-bar-item w3-button w3-padding-large" onClick={() => setIsOpen(false)}>Registrarse</Link>
			</div>
		</div>
	);
}
