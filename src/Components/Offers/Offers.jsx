import React from 'react'
import classes from './Offers.module.css'
import exlusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
	return (
		<div className={classes.offers}>
			<div className={classes['offers-left']}>
				<h1>Exclusive</h1>
				<h1>Offers For You</h1>
				<p>ONLY ON BEST SELLERS PRODUCTS</p>
				<button>Check now</button>
			</div>
			<div className={classes['offers-right']}>
				<img src={exlusive_image} alt="" />
			</div>
		</div>
	)
}

export default Offers
