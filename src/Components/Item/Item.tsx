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

export const Item = (props: Props): JSX.Element => {
	return (
		<div className={styles.item} data-testid="item">
			<Link to={`/product/${props.id}`}>
				<img
					className={styles.itemImg}
					onClick={() => window.scrollTo(0, 0)}
					src={props.image}
					alt="each product"
					data-testid="itemImage"
				/>
			</Link>
			<p className={styles.itemP} data-testid="itemName">
				{props.name}
			</p>
			<div className={styles.itemPrices}>
				<div className={styles.itemPriceNew} data-testid="newPrice">
					${props.new_price}
				</div>
				<div className={styles.itemPriceOld} data-testid="oldPrice">
					${props.old_price}
				</div>
			</div>
		</div>
	)
}
