import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { login } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	// Mensaje enviado desde el registro
	const successMessage = location.state?.message;

	const handleSubmit = e => {
		e.preventDefault();

		const result = login(email, password);

		if (!result.ok) {
			setError(result.message);
			return;
		}

		navigate('/');
	};

	return (
		<>
			{/* Contenedor principal */}
			<div className="w3-card-4 w3-round-xlarge w3-white">
				<div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
					<h2 className="w3-center">Iniciar sesión</h2>
				</div>
				<form className="w3-container w3-padding-24" onSubmit={handleSubmit}>
					{successMessage && !error && (
						<div className="w3-panel w3-pale-green w3-border w3-round">
							<p>{successMessage}</p>
						</div>
					)}

					{error && (
						<div className="w3-panel w3-pale-red w3-border w3-round">
							<p>{error}</p>
						</div>
					)}

					<div className="w3-section">
						<label><i className="fa fa-envelope"></i> Correo electrónico</label>
						<input className="w3-input w3-border w3-round" type="email" placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
					</div>
					<div className="w3-section">
						<label><i className="fa fa-lock"></i> Contraseña</label>
						<input className="w3-input w3-border w3-round" type="password" placeholder="********" value={password} onChange={e => setPassword(e.target.value)} required />
					</div>
					<div className="w3-section">
						<button className="w3-button w3-theme-d2 w3-round w3-block w3-section"><i className="fa fa-sign-in"></i> Acceder</button>
					</div>
					<p className="w3-center"><Link to="#">¿Olvidaste tu contraseña?</Link></p>
					<p className="w3-center">¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>.</p>
				</form>
			</div>
		</>
	);
}
