import React from 'react'
import { styles } from './Offers.styles'
import { useNavigate } from 'react-router-dom'
const exlusiveImage = require('../Assets/otherImg/exclusiveImage.png')

export const Offers = () => {
	const navigate = useNavigate()
	const navigateHandler = () => {
		navigate('/womens')
	}
	return (
		<div className={styles.offers}>
			<div className={styles.offersLeft}>
				<h1 className={styles.offersLeftH1}>Exclusive Offers For Woman</h1>
				<p className={styles.offersLeftP}>ONLY ON BEST SELLERS PRODUCTS</p>
				<div>
					<button className={styles.offersLeftButton} onClick={navigateHandler}>
						Check now
					</button>
				</div>
			</div>
			<div className={styles.offersRight}>
				<img src={exlusiveImage} alt="woman dressed jeans and black t-shirt" />
			</div>
		</div>
	)
}
