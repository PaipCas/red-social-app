import { useRef } from 'react';

export default function Status({ addPost }) {
	const statusRef = useRef(null);

	const sendPost = () => {
		const text = statusRef.current.innerText.trim();
		if (!text) return;

		addPost(text);
		statusRef.current.innerText = '';
	};

	return (
		<div>
			<div className="w3-row-padding">
				<div className="w3-col m12">
					<div className="w3-card w3-round w3-white">
						<div className="w3-container w3-padding">
							<h6 className="w3-opacity">Plantilla de red social con w3.css</h6>
							<p ref={statusRef} contentEditable={true} suppressContentEditableWarning={true} className="w3-border w3-padding"></p>
							<button type="button" className="w3-button w3-theme" onClick={sendPost}><i className="fa fa-pencil"></i>  Publicar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
