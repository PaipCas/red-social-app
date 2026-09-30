export default function Footer() {
	const printYear = new Date().getFullYear();

	return (
		<>
			<footer className="w3-container w3-theme-d3 w3-padding-16">
				<h5>Red Social &copy; <span>{printYear}</span></h5>
			</footer>

			<footer className="w3-container w3-theme-d5">
				<p>Creado con <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
			</footer>
		</>
	);
}
