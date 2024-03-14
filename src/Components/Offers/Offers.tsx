import React from 'react'
import classes from './Offers.module.css'
import exlusiveImage from '../Assets/otherImg/exclusiveImage.png'
import { useNavigate } from 'react-router-dom'

export const Offers = () => {
	const navigate = useNavigate()
	const navigateHandler = params => {
		navigate('/womens')
	}
	return (
		<div className={classes.offers}>
			<div className={classes['offers__left']}>
				<h1>Exclusive Offers For Woman</h1>
				<p>ONLY ON BEST SELLERS PRODUCTS</p>
				<div>
					<button onClick={navigateHandler}>Check now</button>
				</div>
			</div>
			<div className={classes['offers__right']}>
				<img src={exlusiveImage} alt="woman dressed jeans and black t-shirt" />
			</div>
		</div>
	)
}

