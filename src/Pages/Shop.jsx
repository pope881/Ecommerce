import React from 'react'
import Hero from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import Newsletter from '../Components/Newsletter/Newsletter'
import BackgroundSlider from '../Components/BackgroundSlider/BackgroundSlider'

const Shop = () => {
	return (
		<div>
			<BackgroundSlider />
			<Hero />
			<Popular />
			<Offers />
			<NewCollections />
			<Newsletter />
		</div>
	)
}

export default Shop
