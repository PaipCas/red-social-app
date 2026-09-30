import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import ChatPage from './pages/ChatPage';
import GroupsPage from './pages/GroupsPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import SettingsPage from './pages/SettingsPage';

function App() {
	return (
		<>
			<Routes>
				{/* Rutas públicas: si ya inició sesión, se redirige al inicio */}
				<Route element={<PublicRoute />}>
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
				</Route>

				{/* Rutas que requieren iniciar sesión */}
				<Route element={<ProtectedRoute />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/chat' element={<ChatPage />} />
					<Route path='/groups' element={<GroupsPage />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/settings' element={<SettingsPage />} />
					<Route path='/*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
