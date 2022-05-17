import next from "next"
import styles from '../styles/NavBar.module.css'

const Navbar = () =>
{
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Projects
						</a>
						<div className="dropdown-menu"aria-labelledby="navbarDropdownMenuLink">
							<a className="dropdown-item" href="#">
								Project: Omneria
							</a>
							<a className="dropdown-item" href="#">
								Tetra
							</a>
							<a className="dropdown-item" href="#">
								Probably Something Else...
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	)
}
export default Navbar