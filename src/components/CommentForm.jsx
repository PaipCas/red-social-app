import { useState } from 'react';

export default function CommentForm({ getCommentData }) {
	const [comment, setComment] = useState('');
	const getComment = e => {
		setComment(e.target.value);
	};

	const sendComment = () => {
		getCommentData(comment);
		setComment('');
	};

	return (
		<>
			<section className='comentarios w3-margin-top'>
				<textarea placeholder='Comenta algo...' className='w3-input w3-border w3-round w3-light-grey' rows='3' style={{ "resize": "vertical" }} value={comment} onChange={getComment}></textarea>

				<div className='w3-right-align w3-margin-top'>
					<button type='button' className='w3-button w3-theme-d1 w3-round' onClick={sendComment}><i className='fa fa-paper-plane'></i>  Comentar</button>
				</div>
			</section>
		</>
	);
}
