import React from 'react'
import classes from './Offers.module.css'
import exlusive_image from '../Assets/other_img/exclusive_image.png'
import { useNavigate } from 'react-router-dom'

const Offers = () => {
	const navigate = useNavigate()
	const navigateHandler = params => {
		navigate('/womens')
	}
	return (
		<div className={classes.offers}>
			<div className={classes['offers__left']}>
				<h1>Exclusive</h1>
				<h1>Offers For Woman</h1>
				<p>ONLY ON BEST SELLERS PRODUCTS</p>
				<button onClick={navigateHandler}>Check now</button>
			</div>
			<div className={classes['offers__right']}>
				<img src={exlusive_image} alt="woman dressed jeans and black t-shirt" />
			</div>
		</div>
	)
}

export default Offers
