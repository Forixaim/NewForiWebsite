import next from "next"
import React from "react"
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className={styles.NavBarColor}>
			<div>
				<Link href="/"><a className={styles.NavLink} >Home</a></Link>
				<Link href="about"><a className={styles.NavLink}>About</a></Link>
			</div>
		</nav>
	)
}
export default Navbar