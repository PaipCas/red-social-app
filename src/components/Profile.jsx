export default function Profile() {
	return (
		<>
			<div className="w3-card w3-round w3-white">
				<div className="w3-container">
					<h4 className="w3-center">Mi perfil</h4>
					<p className="w3-center"><img src="https://www.w3schools.com/w3images/avatar3.png" className="w3-circle" style={{ "height": "106px", "width": "106px" }} alt="Avatar" /></p>
					<hr />
					<p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Diseñador UI</p>
					<p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Londres, Reino Unido</p>
					<p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> 1 de abril de 1988</p>
				</div>
			</div>
		</>
	);
}
