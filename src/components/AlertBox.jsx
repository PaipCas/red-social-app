import { useState } from 'react';

export default function AlertBox() {
	const [isVisible, setIsVisible] = useState(null);

	const hideAlert = () => {
		setIsVisible(!isVisible);
	};

	return (
		<>
			<div className={`w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small ${isVisible ? 'w3-hide' : ''}`}>
				<span onClick={hideAlert} className="w3-button w3-theme-l3 w3-display-topright">
					<i className="fa fa-remove"></i>
				</span>
				<p><strong>¡Hola!</strong></p>
				<p>Hay personas mirando tu perfil. Descubre quiénes son.</p>
			</div>
		</>
	);
}
