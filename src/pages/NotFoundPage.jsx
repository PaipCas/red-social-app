import { Link } from 'react-router-dom';

export default function NotFoundPage() {
	return (
		<>
			<div className="w3-card w3-round-xlarge w3-white w3-padding-32">
				<i className="fa fa-chain-broken w3-text-theme" style={{ "fontSize": "64px" }}></i>
				<h1 className="w3-text-theme" style={{ "fontSize": "96px", "fontWeight": "bold", "margin": "0" }}>404</h1>
				<h3>Página no encontrada</h3>
				<p className="w3-opacity">Lo sentimos, la página que buscas no existe o fue movida.</p>
				<Link to="/" className="w3-button w3-theme-d2 w3-round w3-margin-top"><i className="fa fa-home w3-margin-right"></i>Volver al inicio</Link>
			</div>
		</>
	);
}
