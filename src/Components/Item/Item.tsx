import { Link } from 'react-router-dom'
import { styles } from './Item.styles'
import { AdvancedImage } from '@cloudinary/react'
import { CloudinaryImage } from '@cloudinary/url-gen/index'

type Props = {
	key: number
	id: number
	name: string
	image: string | CloudinaryImage
	new_price: number
	old_price: number
	clothes_type: string
}

export const Item = (props: Props): JSX.Element => {
	return (
		<div className={styles.item} data-testid="itemId">
			<Link to={`/product/${props.id}`}>
				<AdvancedImage
					className={styles.itemImg}
					onClick={() => window.scrollTo(0, 0)}
					cldImg={props.image}
					alt="each product"
					data-testid="itemImage"
				/>
			</Link>
			<p className={styles.itemP} data-testid="itemName">
				{props.name}
			</p>
			<div className={styles.itemPrices}>
				<div className={styles.itemPriceNew} data-testid="itemNewPrice">
					${props.new_price}
				</div>
				<div className={styles.itemPriceOld} data-testid="itemOldPrice">
					${props.old_price}
				</div>
			</div>
		</div>
	)
}
