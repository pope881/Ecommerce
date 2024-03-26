import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from './Item.styles'

type Props = {
	key: number
	id: number
	name: string
	image: string
	new_price: number
	old_price: number
	clothes_type: string
}

const scrollTop = () => {
	window.scrollTo(0, 0)
}

export const Item = (props: Props): JSX.Element => {
	return (
		<div className={styles.item}>
			<Link to={`/product/${props.id}`}>
				<img className={styles.itemImg} onClick={scrollTop} src={props.image} alt="each product" />
			</Link>
			<p className={styles.itemP}>{props.name}</p>
			<div className={styles.itemPrices}>
				<div className={styles.itemPriceNew}>${props.new_price}</div>
				<div className={styles.itemPriceOld}>${props.old_price}</div>
			</div>
		</div>
	)
}
