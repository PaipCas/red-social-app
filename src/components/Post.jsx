import { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import ListComments from './ListComments';

const defaultComments = [
	{ id: 1, text: 'Me gustan mucho los postres' },
	{ id: 2, text: 'Pásame la receta' }
];

export default function Post({
	title = 'Felipe Castrillón',
	username = '@paipcas',
	text = 'Postre 3 leches con maracuyá 🍮\nUn delicioso postre de tres leches con un toque de maracuyá, ideal para compartir en cualquier ocasión.',
	image = 'https://i.blogs.es/e90432/vasitos/450_1000.jpg',
	avatar = 'https://www.w3schools.com/w3images/avatar3.png',
	time = '1 h',
	comments = defaultComments
}) {
	const [likes, setLikes] = useState(0);
	const updateLikes = () => setLikes(likes + 1);

	const [btnComment, setBtnComment] = useState(false);
	const isShowComment = () => setBtnComment(!btnComment);

	const [textComment, setTextComment] = useState('');
	const getCommentData = comment => {
		setTextComment(comment);
	};

	const [listData, setListData] = useState(comments);

	useEffect(() => {
		if (textComment) {
			setListData([
				...listData,
				{ id: listData.length + 1, text: textComment }
			]);
		}
	}, [textComment]);

	return (
		<>
			<div className="w3-container w3-card w3-white w3-round w3-margin"><br />
				<img src={avatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ "width": "60px" }} />
				<span className="w3-right w3-opacity">{time}</span>
				<h4 style={{ "marginBottom": "0" }}>{title}</h4>
				{username && <small className="w3-opacity">{username}</small>}
				<br />
				<hr className="w3-clear" />
				<p style={{ "whiteSpace": "pre-line" }}>{text}</p>
				{image && <img src={image} style={{ "width": "100%" }} alt="Imagen de la publicación" className="w3-margin-bottom" />}

				<div className="w3-bar w3-margin-bottom">
					<span className="w3-left">👍❤️😂 {likes}</span>
					<span className="w3-right">{listData.length} 💬</span>
				</div>

				<button type="button" className="w3-button w3-theme-d1 w3-margin-bottom" onClick={updateLikes}><i className="fa fa-thumbs-up"></i>  Me gusta</button>
				<button type="button" className="w3-button w3-theme-d2 w3-margin-bottom" onClick={isShowComment}><i className="fa fa-comment"></i>  Comentar</button>

				{btnComment && (
					<div className="w3-margin-bottom">
						<CommentForm getCommentData={getCommentData} />
					</div>
				)}

				<ListComments listComData={listData} />
			</div>
		</>
	);
}
