import React, { useContext, useState } from 'react'
import classes from './ProductDisplay.module.css'
import star_icon from '../Assets/other_img/star_icon.png'
import CartContext from '../../Context/cart-context'
import ImageSlider from './ImageSlider'
import size_options from '../Assets/size_options'
import color_options from '../Assets/color_options'

const ProductDisplay = props => {
	const [valueSize, setValueSize] = useState('S')
	// const [valueColor, setValueColor] = useState('BLACK')

	const { product } = props

	const cartCtx = useContext(CartContext)
	const { addItem } = cartCtx

	const handleSelectSize = event => {
		setValueSize(event.target.value)
	}

	// const handleSelectColor = event => {
	// 	setValueColor(event.target.value)
	// }

	return (
		<div className={classes['productdisplay']}>
			<div className={classes['productdisplay__left']}>
				<div className={classes['productdisplay__imgList']}>
					<img src={product.image_slide[0].url} alt="each product nr 1" />
					<img src={product.image_slide[1].url} alt="each product nr 2" />
					<img src={product.image_slide[2].url} alt="each product nr 3" />
					<img src={product.image_slide[3].url} alt="each product nr 4" />
				</div>
			</div>
			<div className={classes['productdisplay__sliderContainer']}>
				<ImageSlider product={product} />
			</div>

			<div className={classes['productdisplay__right']}>
				<h1>{product.name}</h1>
				<div className={classes['productdisplay__stars']}>
					<img src={star_icon} alt="star icon" />
					<img src={star_icon} alt="star icon" />
					<img src={star_icon} alt="star icon" />
					<img src={star_icon} alt="star icon" />
					<img src={star_icon} alt="star icon" />
					<p>(+100)</p>
				</div>
				<div className={classes['productdisplay__prices']}>
					<div className={classes['productdisplay__priceOld']}>${product.old_price}</div>
					<div className={classes['productdisplay__priceNew']}>New Price: ${product.new_price}</div>
				</div>
				<div className={classes['productdisplay__selects']}>
					<h1>Select size</h1>
					<div className={classes['productdisplay__selectContainer']}>
						<select className={classes['productdisplay__selectBox']} onChange={handleSelectSize}>
							{size_options.map(option => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						<div className={classes['productdisplay__iconContainer']}>
							<i className="fa-solid fa-circle-arrow-down"></i>
						</div>
					</div>
					<h1>Select color</h1>
					<div className={classes['productdisplay__selectContainer']}>
						{/* onChange={handleSelectColor} */}
						<select className={classes['productdisplay__selectBox']}>
							{color_options.map(option => (
								<option key={option.value} value={option.value} style={{ color: `${option.color}` }}>
									{option.label}
								</option>
							))}
						</select>
						<div className={classes['productdisplay__iconContainer']}>
							<i className="fa-solid fa-circle-arrow-down"></i>
						</div>
					</div>
				</div>
				<button
					onClick={() => {
						addItem({
							id: product.id,
							name: product.name,
							amount: 1,
							price: product.new_price,
							image: product.image,
							size: valueSize,
							// color: valueColor,
						})
					}}>
					ADD TO CART
				</button>
				<p className={classes['productdisplay__rightCategory']}>
					<span>Category:</span> {product.clothes_type}
				</p>
			</div>
		</div>
	)
}

export default ProductDisplay
