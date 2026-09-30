import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const { logout } = useAuth();

	const openNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="w3-top">
				<div className="w3-bar w3-theme-d2 w3-left-align w3-large">
					<Link className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="#" onClick={openNav}><i className="fa fa-bars"></i></Link>

					<Link to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i className="fa fa-home w3-margin-right"></i>Red Social</Link>

					<Link to="/groups" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Grupos"><i className="fa fa-group"></i></Link>

					<Link to="/settings" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Configuración"><i className="fa fa-cog"></i></Link>

					<Link to="/chat" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Chat"><i className="fa fa-envelope"></i></Link>

					<div className="w3-dropdown-hover w3-hide-small">
						<button className="w3-button w3-padding-large" title="Notificaciones"><i className="fa fa-bell"></i><span className="w3-badge w3-right w3-small w3-green">3</span></button>

						<div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ "width": "300px" }}>
							<a href="#" className="w3-bar-item w3-button">Una nueva solicitud de amistad</a>

							<a href="#" className="w3-bar-item w3-button">John Doe publicó en tu muro</a>
							
							<a href="#" className="w3-bar-item w3-button">A Jane le gusta tu publicación</a>
						</div>
					</div>

					{/* Va antes del perfil en el código porque w3-right los ubica de derecha a izquierda */}
					<button className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Cerrar sesión" onClick={logout}><i className="fa fa-sign-out"></i></button>

					<Link to="/profile" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Perfil">
						<img src="https://www.w3schools.com//w3images/avatar2.png" className="w3-circle" style={{ "height": "23px", "width": "23px" }} alt="Avatar" />
					</Link>
				</div>

				{/* Barra de navegación en pantallas pequeñas */}
				<div id="navDemo" className={`w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large ${isOpen ? 'w3-show' : ''}`}>
					<Link to="/groups" className="w3-bar-item w3-button w3-padding-large" onClick={() => setIsOpen(false)}><i className="fa fa-group w3-margin-right"></i>Grupos</Link>

					<Link to="/settings" className="w3-bar-item w3-button w3-padding-large" onClick={() => setIsOpen(false)}><i className="fa fa-cog w3-margin-right"></i>Configuración</Link>

					<Link to="/chat" className="w3-bar-item w3-button w3-padding-large" onClick={() => setIsOpen(false)}><i className="fa fa-envelope w3-margin-right"></i>Chat</Link>

					<Link to="/profile" className="w3-bar-item w3-button w3-padding-large" onClick={() => setIsOpen(false)}><i className="fa fa-user w3-margin-right"></i>Perfil</Link>

					<button className="w3-bar-item w3-button w3-padding-large" onClick={logout}><i className="fa fa-sign-out w3-margin-right"></i>Cerrar sesión</button>
				</div>
			</div>
		</>
	);
}
