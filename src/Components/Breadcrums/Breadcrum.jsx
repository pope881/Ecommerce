import React from 'react'
import { Link } from 'react-router-dom'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = props => {
	const { product } = props

	return (
		<div className="breadcrum">
			<Link to="/">HOME</Link> <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category}
			<img src={arrow_icon} alt="" /> {product.name}
		</div>
	)
}

export default Breadcrum
