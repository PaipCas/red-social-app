import { useState } from 'react';
import Accordion from '../components/Accordion';
import Ads from '../components/Ads';
import AlertBox from '../components/AlertBox';
import Events from '../components/Events';
import Footer from '../components/Footer';
import FriendResquest from '../components/FriendResquest';
import Interests from '../components/Interests';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import Profile from '../components/Profile';
import Status from '../components/Status';

export default function HomePage() {
	const [posts, setPosts] = useState([]);
	const addPost = text => {
		setPosts([
			{ id: Date.now(), text },
			...posts
		]);
	};

	return (
		<>
			<Navbar />

			<div className="w3-container w3-content" style={{ "maxWidth": "1400px", "marginTop": "80px", "minHeight": "calc(100dvh - 212px)" }}>
				{/* Cuadrícula */}
				<div className="w3-row">
					{/* Columna izquierda */}
					<div className="w3-col m3">
						<Profile />
						<br />

						<Accordion />
						<br />

						<Interests />
						<br />

						<AlertBox />
					</div>

					<div className="w3-col m7">
						<Status addPost={addPost} />

						{posts.map(post => (
							<Post
								key={post.id}
								text={post.text}
								image=""
								time="Justo ahora"
								comments={[]}
							/>
						))}

						<Post />
					</div>

					<div class="w3-col m2">
						<Events />
						<br />

						<FriendResquest />
						<br />

						<Ads />
					</div>
				</div>
			</div>
			<br />

			<Footer />
		</>
	);
}
