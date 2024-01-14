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
			<div className={classes['productdisplay-left']}>
				<div className={classes['productdisplay-img-list']}>
					<img src={product.image_slide[0].url} alt="" />
					<img src={product.image_slide[1].url} alt="" />
					<img src={product.image_slide[2].url} alt="" />
					<img src={product.image_slide[3].url} alt="" />
				</div>
			</div>
			<div className={classes['productdisplay-left-added']}>
				<ImageSlider product={product} />
			</div>

			<div className={classes['productdisplay-right']}>
				<h1>{product.name}</h1>
				<div className={classes['productdisplay-right-stars']}>
					<img src={star_icon} alt="star icon" />
					<img src={star_icon} alt="star icon" />
					<img src={star_icon} alt="star icon" />
					<img src={star_icon} alt="star icon" />
					<img src={star_icon} alt="star icon" />
					<p>(+100)</p>
				</div>
				<div className={classes['productdisplay-right-prices']}>
					<div className={classes['productdisplay-right-price-old']}>${product.old_price}</div>
					<div className={classes['productdisplay-right-price-new']}>New Price: ${product.new_price}</div>
				</div>
				<div className={classes['productdisplay-right-description']}></div>
				<div className={classes['productdisplay-right-size']}>
					<h1>Select size</h1>

					<div className={classes['select-container']}>
						<select className={classes['select-box']} onChange={handleSelectSize}>
							{size_options.map(option => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						<div className={classes['icon-container']}>
							<i class="fa-solid fa-circle-arrow-down"></i>
						</div>
					</div>

					<h1>Select color</h1>
					<div className={classes['select-container']}>
						{/* onChange={handleSelectColor} */}
						<select className={classes['select-box']}>
							{color_options.map(option => (
								<option key={option.value} value={option.value} style={{ color: `${option.color}` }}>
									{option.label}
								</option>
							))}
						</select>
						<div className={classes['icon-container']}>
							<i class="fa-solid fa-circle-arrow-down"></i>
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
				<p className={classes['productdisplay-right-category']}>
					<span>Category:</span> {product.clothes_type}
				</p>
			</div>
		</div>
	)
}

export default ProductDisplay
