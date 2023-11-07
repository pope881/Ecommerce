import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = props => {
	const { product } = props
	const { addToCart } = useContext(ShopContext)

	const zoomImg = e => {
		const img = document.querySelector('.productdisplay-main-img')
		const x = e.clientX
		const y = e.clientY
		// console.log(x, y)

		const imgX = img.offsetLeft
		const imgY = img.offsetTop

		const newX = x - imgX
		const newY = y - imgY

		img.style.transformOrigin = `${newX}px ${newY}px`
		img.classList.add('zoom')
	}

	const resetImg = () => {
		const img = document.querySelector('.productdisplay-main-img')
		img.classList.remove('zoom')
	}

	return (
		<div className="productdisplay">
			<div className="productdisplay-left">
				<div className="productdisplay-img-list">
					<img src={product.image} alt="" />
					<img src={product.image} alt="" />
					<img src={product.image} alt="" />
					<img src={product.image} alt="" />
				</div>
				<div className="productdisplay-img">
					<img
						src={product.image}
						alt=""
						className="productdisplay-main-img"
						onMouseMove={zoomImg}
						onMouseOut={resetImg}
					/>
				</div>
			</div>
			<div className="productdisplay-right">
				<h1>{product.name}</h1>
				<div className="productdisplay-right-stars">
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_dull_icon} alt="" />
					<p>(122)</p>
				</div>
				<div className="productdisplay-right-prices">
					<div className="productdisplay-right-price-old">${product.old_price}</div>
					<div className="productdisplay-right-price-new">${product.new_price}</div>
				</div>
				<div className="productdisplay-right-description">
					A lightwigt
					.............................................................................................................................................................................................................
				</div>
				<div className="productdisplay-right-size">
					<h1>Select size</h1>
					<div className="productdisplay-right-sizes">
						<div>S</div>
						<div>M</div>
						<div>L</div>
						<div>XL</div>
						<div>XXL</div>
					</div>
				</div>
				<button
					onClick={() => {
						addToCart(product.id)
					}}>
					ADD TO CART
				</button>
				<p className="productdisplay-right-category">
					<span>Category :</span>Woman, T-Shirt, Crop Top
				</p>
				<p className="productdisplay-right-category">
					<span>Category :</span>Modern, Latest
				</p>
			</div>
		</div>
	)
}

export default ProductDisplay
