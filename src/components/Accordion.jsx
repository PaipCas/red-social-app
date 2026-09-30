import { useState } from 'react';

export default function Accordion() {
	const [isOpen, setIsOpen] = useState(null);

	const toggleContent = (id) => {
		setIsOpen(isOpen === id ? null : id);
	};

	return (
		<>
			<div className="w3-card w3-round">
				<div className="w3-white">
					<button onClick={() => toggleContent('Demo1')} className={`w3-button w3-block w3-theme-l1 w3-left-align ${isOpen === 'Demo1' ? 'w3-theme-d1' : ''}`}><i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> Mis grupos</button>

					<div id="Demo1" className={`w3-hide w3-container ${isOpen === 'Demo1' ? 'w3-show' : ''}`}>
						<p>Algo de texto...</p>
					</div>

					<button onClick={() => toggleContent('Demo2')} className={`w3-button w3-block w3-theme-l1 w3-left-align ${isOpen === 'Demo2' ? 'w3-theme-d1' : ''}`}><i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> Mis eventos</button>

					<div id="Demo2" className={`w3-hide w3-container ${isOpen === 'Demo2' ? 'w3-show' : ''}`}>
						<p>Algo más de texto...</p>
					</div>

					<button onClick={() => toggleContent('Demo3')} className={`w3-button w3-block w3-theme-l1 w3-left-align ${isOpen === 'Demo3' ? 'w3-theme-d1' : ''}`}><i className="fa fa-users fa-fw w3-margin-right"></i> Mis fotos</button>

					<div id="Demo3" className={`w3-hide w3-container ${isOpen === 'Demo3' ? 'w3-show' : ''}`}>
						<div className="w3-row-padding">
							<br />
							<div className="w3-half">
								<img src="https://www.w3schools.com/w3images/lights.jpg" style={{ "width": "100%" }} className="w3-margin-bottom" />
							</div>
							<div className="w3-half">
								<img src="https://www.w3schools.com/w3images/nature.jpg" style={{ "width": "100%" }} className="w3-margin-bottom" />
							</div>
							<div className="w3-half">
								<img src="https://www.w3schools.com/w3images/mountains.jpg" style={{ "width": "100%" }} className="w3-margin-bottom" />
							</div>
							<div className="w3-half">
								<img src="https://www.w3schools.com/w3images/forest.jpg" style={{ "width": "100%" }} className="w3-margin-bottom" />
							</div>
							<div className="w3-half">
								<img src="https://www.w3schools.com/w3images/nature.jpg" style={{ "width": "100%" }} className="w3-margin-bottom" />
							</div>
							<div className="w3-half">
								<img src="https://www.w3schools.com/w3images/snow.jpg" style={{ "width": "100%" }} className="w3-margin-bottom" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
