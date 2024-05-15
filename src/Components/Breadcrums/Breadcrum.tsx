import { Link } from 'react-router-dom'
import { styles } from './Breadcrum.styles'
import { WideContent } from '../Layouts/WideContent'
const breadcrumArrow = '/otherImg/breadcrumArrow.png'
type Props = {
	product: {
		category: string
		name: string
	}
}

export const Breadcrum = (props: Props): JSX.Element => {
	const { product } = props

	return (
		<WideContent className={styles.breadcrum}>
			<Link className={styles.breadcrumA} to="/">
				SHOP
			</Link>
			<img src={breadcrumArrow} alt="link arrow icon" />
			<Link className={styles.breadcrumA} to={`/${product.category}`}>
				{product.category}
			</Link>
			<img src={breadcrumArrow} alt="arrow icon" /> {product.name}
		</WideContent>
	)
}
