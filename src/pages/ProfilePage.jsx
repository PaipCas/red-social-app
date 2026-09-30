import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProfileSettings from '../components/ProfileSettings';

export default function ProfilePage() {
	return (
		<>
			<Navbar />

			<div className="w3-container w3-content" style={{ "maxWidth": "1400px", "marginTop": "80px", "minHeight": "calc(100dvh - 212px)" }}>
				<ProfileSettings />
			</div>

			<Footer />
		</>
	);
}
