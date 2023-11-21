import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Breadcrum.module.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = props => {
	const { product } = props

	return (
		<div className={classes.breadcrum}>
			<img src={arrow_icon} alt="" /> <Link to="/">SHOP </Link>
			<img src={arrow_icon} alt="" /> <Link to={`/${product.category}s`}>{product.category}</Link>
			<img src={arrow_icon} alt="" /> {product.name}
		</div>
	)
}

export default Breadcrum
