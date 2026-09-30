import Login from '../components/Login';
import LoginNav from '../components/LoginNav';

export default function LoginPage() {
	return (
		<>
			<LoginNav />

			<div className="w3-container w3-content" style={{ "maxWidth": "500px", "height": "100dvh", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
				<Login />
			</div>
		</>
	);
}
