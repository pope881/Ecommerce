import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { Newsletter } from '../Components/Newsletter/Newsletter'
import { BackgroundSlider } from '../Components/BackgroundSlider/BackgroundSlider'

export const Shop = () => {
	return (
		<>
			<BackgroundSlider />
			<Hero />
			<Popular />
			<Offers />
			<NewCollections />
			<Newsletter />
		</>
	)
}
