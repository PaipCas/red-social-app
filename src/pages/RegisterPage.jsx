import LoginNav from '../components/LoginNav';
import Register from '../components/Register';

export default function RegisterPage() {
	return (
		<>
			<LoginNav />

			<div className="w3-container w3-content" style={{ "maxWidth": "600px", "height": "100dvh", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
				<Register />
			</div>
		</>
	);
}