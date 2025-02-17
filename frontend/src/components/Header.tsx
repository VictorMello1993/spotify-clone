import { Link } from "react-router-dom";
import logoSpotify from "../assets/logo/spotify-logo.png";

export default function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img src={logoSpotify} alt="Logo do Spotify" />
			</Link>
			<Link className="header__link" to="/">
				<h1>Spotify</h1>
			</Link>
		</div>
	);
}
