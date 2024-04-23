import { Link } from 'react-router-dom'
import { styles } from './Breadcrum.styles'

type Props = {
	product: {
		category: string
		name: string
	}
}

export const Breadcrum = (props: Props): JSX.Element => {
	const { product } = props

	return (
		<div className={styles.breadcrum}>
			<img src="/otherImg/breadcrumArrow.png" alt="link arrow icon" />
			<Link className={styles.breadcrumA} to="/">
				SHOP
			</Link>
			<img src="/otherImg/breadcrumArrow.png" alt="link arrow icon" />
			<Link className={styles.breadcrumA} to={`/${product.category}`}>
				{product.category}
			</Link>
			<img src="/otherImg/breadcrumArrow.png" alt="arrow icon" /> {product.name}
		</div>
	)
}
