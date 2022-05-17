import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import "bootstrap/dist/css/bootstrap.min.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Forixaim</title>
				<meta name="description" content="Generated by create next app"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<header>
				<Navbar/>
			</header>
			<main className={styles.main}>
				<h1>Forixaim</h1>
				<p>Hello there I am Forixaim, the C++ guy. This new website will replace my old website.</p>
				<p>I don't know how to use TypeScript, so help would be awesome!</p>
			</main>
			<footer>
				<p>Website by Forixaim. Powered by Next.js and React!</p>
			</footer>
		</div>
	)
}

export default Home