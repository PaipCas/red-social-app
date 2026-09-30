import { useState } from 'react';
import { AuthContext } from './AuthContext';

// Lista de usuarios registrados guardada en localStorage
const getUsers = () => {
	const savedUsers = localStorage.getItem('users');
	return savedUsers ? JSON.parse(savedUsers) : [];
};

export default function AuthProvider({ children }) {
	// Se lee de localStorage para que la sesión se mantenga al recargar la página
	const [user, setUser] = useState(() => {
		const savedUser = localStorage.getItem('user');
		return savedUser ? JSON.parse(savedUser) : null;
	});

	const register = newUser => {
		const users = getUsers();
		const email = newUser.email.trim().toLowerCase();

		if (users.some(u => u.email === email)) {
			return { ok: false, message: 'Ya existe una cuenta con ese correo electrónico.' };
		}

		users.push({ ...newUser, id: Date.now(), email });
		localStorage.setItem('users', JSON.stringify(users));

		return { ok: true };
	};

	const login = (email, password) => {
		const foundUser = getUsers().find(u => u.email === email.trim().toLowerCase());

		if (!foundUser || foundUser.password !== password) {
			return { ok: false, message: 'Correo o contraseña incorrectos.' };
		}

		// La sesión se guarda sin la contraseña
		const sessionUser = { ...foundUser };
		delete sessionUser.password;
		localStorage.setItem('user', JSON.stringify(sessionUser));
		setUser(sessionUser);

		return { ok: true };
	};

	const logout = () => {
		localStorage.removeItem('user');
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, isAuthenticated: user !== null, register, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
