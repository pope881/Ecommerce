import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'

export function ErrorPage() {
	return (
		<>
			<Navbar />
			<main
				style={{
					minHeight: '50vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<h1 style={{ color: '#656565', fontSize: '4rem' }}>An error occured !</h1>
				<p style={{ color: '#656565', fontSize: '3rem' }}>Could not find this page!</p>
			</main>
			<Footer />
		</>
	)
}
