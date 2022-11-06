import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./StyleNavbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<Link to={"/#"}>
					<span>Home</span>
				</Link>
				<Link to={"#"}>
					<span>Categorias</span>
				</Link>
				<Link to={"#"}>
					<span>Produtos</span>
				</Link>
				<Link to={"/quemsomos"}>
					<span>Sobre nós</span>
				</Link>
				{/* <a href="/#">Home</a>
				<a href="/#">Categorias</a>
				<a href="/#">Produtos</a>
				<a href="/#">Sobre nós</a> */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;