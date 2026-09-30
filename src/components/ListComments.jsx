export default function ListComments({ listComData }) {
	return (
		<>
			<ul className="w3-ul w3-margin-bottom">
				{listComData.map(list => (
					<li key={list.id} className="w3-bar w3-border-0" style={{ "padding": "6px 0" }}>
						<img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="w3-bar-item w3-circle" style={{ "width": "40px", "padding": "0" }} />
						<div className="w3-bar-item w3-light-grey w3-round-large w3-margin-left" style={{ "maxWidth": "80%" }}>
							{list.text}
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
