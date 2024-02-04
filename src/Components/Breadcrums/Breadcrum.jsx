import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Breadcrum.module.css'
import breadcrumArrow from '../Assets/otherImg/breadcrumArrow.png'

const Breadcrum = props => {
	const { product } = props

	return (
		<div className={classes.breadcrum}>
			<img src={breadcrumArrow} alt="link arrow icon" /> <Link to="/">SHOP </Link>
			<img src={breadcrumArrow} alt="link arrow icon" /> <Link to={`/${product.category}s`}>{product.category}</Link>
			<img src={breadcrumArrow} alt="arrow icon" /> {product.name}
		</div>
	)
}

export default Breadcrum
