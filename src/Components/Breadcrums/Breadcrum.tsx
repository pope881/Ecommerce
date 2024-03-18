import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from './Breadcrum.styles'
const breadcrumArrow = require('../Assets/otherImg/breadcrumArrow.png')

type Props = {
	product: {
		category: string
		name: string
	}
}

const Breadcrum = (props: Props): JSX.Element => {
	const { product } = props

	return (
		<div className={styles.breadcrum}>
			<img src={breadcrumArrow} alt="link arrow icon" />
			<Link className={styles.breadcrumA} to="/">
				SHOP
			</Link>
			<img src={breadcrumArrow} alt="link arrow icon" />
			<Link className={styles.breadcrumA} to={`/${product.category}s`}>
				{product.category}
			</Link>
			<img src={breadcrumArrow} alt="arrow icon" /> {product.name}
		</div>
	)
}

export default Breadcrum
