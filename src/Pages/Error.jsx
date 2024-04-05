import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'

export function Error() {
	return (
		<>
			<Navbar />
			<main>
				<h1 style={{ color: 'red', fontSize: '4rem' }}>An error occured !</h1>
				<p style={{ color: 'red', fontSize: '4rem' }}>Could not find this page!</p>
			</main>
			<Footer />
		</>
	)
}
