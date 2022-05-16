import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<header>
				<ul className={styles.NavBar}>
					<li><a href="/" className={styles.navLink}>Home</a></li>
					<li><a href="about" className={styles.navLink}>About</a></li>
				</ul>
			</header>
			<main className={styles.main}>
				<h1>sus</h1>
			</main>
			<footer>
				<p>Website by Forixaim, AYO HE IS DOING TYPESCRIPT!</p>
			</footer>
		</div>
	)
}

export default Home