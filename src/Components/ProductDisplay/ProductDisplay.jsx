import React, { useContext, useState } from 'react'
import classes from './ProductDisplay.module.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import CartContext from '../../Context/cart-context'
import ImageSlider from './ImageSlider'

const ProductDisplay = props => {
	const slides = [
		{
			url: 'http://localhost:3001/image-1.jpg',
			title: 'Beach',
		},
		{
			url: 'http://localhost:3001/image-2.jpg',
			title: 'Boat',
		},
		{
			url: 'http://localhost:3001/image-3.jpg',
			title: 'Forest',
		},
		{
			url: 'http://localhost:3001/image-4.jpg',
			title: 'City',
		},
		{
			url: 'http://localhost:3001/image-5.jpg',
			title: 'Italy',
		},
	]

	const [value, setValue] = useState('S')

	const { product } = props

	const cartCtx = useContext(CartContext)
	const { addItem, options } = cartCtx

	const handleSelect = event => {
		setValue(event.target.value)
	}

	const containerStyles = {
		width: '600px',
		height: '580px',
		margin: '0 auto',
	}

	return (
		<div className={classes['productdisplay']}>
			<div style={containerStyles}>
				<ImageSlider slides={slides} />
			</div>
			{/* <div className={classes['productdisplay-left']}>
				<div className={classes['productdisplay-img-list']}>
					<img src={product.image} alt="" />
					<img src={product.image} alt="" />
					<img src={product.image} alt="" />
					<img src={product.image} alt="" />
				</div>
				<div className={classes['productdisplay-img']}>
					<img src={product.image} alt="" className={classes['productdisplay-main-img']} />
				</div>
			</div> */}
			<div className={classes['productdisplay-right']}>
				<h1>{product.name}</h1>
				<div className={classes['productdisplay-right-stars']}>
					<img src={star_icon} alt="star icon" />
					<img src={star_icon} alt="star icon" />
					<img src={star_icon} alt="star icon" />
					<img src={star_icon} alt="star icon" />
					<img src={star_dull_icon} alt="faded star icon" />
					<p>(122)</p>
				</div>
				<div className={classes['productdisplay-right-prices']}>
					<div className={classes['productdisplay-right-price-old']}>${product.old_price}</div>
					<div className={classes['productdisplay-right-price-new']}>${product.new_price}</div>
				</div>
				<div className={classes['productdisplay-right-description']}>
					A lightwigt
					.............................................................................................................................................................................................................
				</div>
				<div className={classes['productdisplay-right-size']}>
					<h1>Select size</h1>
					<div className={classes['productdisplay-right-sizes']}>
						<div>S</div>
						<div>M</div>
						<div>L</div>
						<div>XL</div>
						<div>XXL</div>
					</div>
					<select onChange={handleSelect}>
						{options.map(option => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</div>
				<button
					onClick={() => {
						addItem({
							id: product.id,
							name: product.name,
							amount: 1,
							price: product.new_price,
							image: product.image,
							size: value,
						})
					}}>
					ADD TO CART
				</button>
				<p className={classes['productdisplay-right-category']}>
					<span>Category :</span>Woman, T-Shirt, Crop Top
				</p>
				<p className={classes['productdisplay-right-category']}>
					<span>Category :</span>Modern, Latest
				</p>
			</div>
		</div>
	)
}

export default ProductDisplay
