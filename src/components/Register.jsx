import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		birthdate: '1990-01-01',
		gender: ''
	});
	const [error, setError] = useState('');
	const { register } = useAuth();
	const navigate = useNavigate();

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		const result = register(form);

		if (!result.ok) {
			setError(result.message);
			return;
		}

		navigate('/login', { state: { message: 'Cuenta creada. Ya puedes iniciar sesión.' } });
	};

	return (
		<>
			<div className="w3-card-4 w3-round-xlarge w3-white">
				<div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
					<h2 className="w3-center">Crear cuenta</h2>
				</div>

				<form className="w3-container w3-padding-24" onSubmit={handleSubmit}>
					{error && (
						<div className="w3-panel w3-pale-red w3-border w3-round">
							<p>{error}</p>
						</div>
					)}

					<div className="w3-section">
						<label><i className="fa fa-user"></i> Nombre completo</label>

						<input className="w3-input w3-border w3-round" type="text" name="name" placeholder="Juan Pérez" value={form.name} onChange={handleChange} required />
					</div>

					<div className="w3-section">
						<label><i className="fa fa-envelope"></i> Correo electrónico</label>

						<input className="w3-input w3-border w3-round" type="email" name="email" placeholder="tu@email.com" value={form.email} onChange={handleChange} required />
					</div>

					<div className="w3-section">
						<label><i className="fa fa-lock"></i> Contraseña</label>

						<input className="w3-input w3-border w3-round" type="password" name="password" placeholder="********" value={form.password} onChange={handleChange} required />
					</div>

					<div className="w3-section">
						<label><i className="fa fa-calendar"></i> Fecha de nacimiento</label>

						<input className="w3-input w3-border w3-round" type="date" name="birthdate" value={form.birthdate} onChange={handleChange} />
					</div>

					<div className="w3-section">
						<label><i className="fa fa-venus-mars"></i> Género</label>

						<select className="w3-select w3-border w3-round" name="gender" value={form.gender} onChange={handleChange}>
							<option value="" disabled>Selecciona</option>
							<option>Hombre</option>
							<option>Mujer</option>
							<option>Otro</option>
						</select>
					</div>

					<div className="w3-section">
						<button className="w3-button w3-theme-d2 w3-round w3-block w3-section"><i className="fa fa-user-plus"></i> Registrarse</button>
					</div>

					<p className="w3-center">¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>.</p>
				</form>
			</div>
		</>
	);
}
