import Footer from '../components/Footer';
import Groups from '../components/Groups';
import Navbar from '../components/Navbar';

export default function GroupsPage() {
	return (
		<>
			<Navbar />

			<div className="w3-container w3-content" style={{ "maxWidth": "1400px", "marginTop": "80px", "minHeight": "calc(100dvh - 212px)" }}>
				<Groups />
			</div>

			<Footer />
		</>
	);
}
