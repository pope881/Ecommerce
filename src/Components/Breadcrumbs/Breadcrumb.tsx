import { Link } from 'react-router-dom'
import { styles } from './Breadcrumb.styles'
import { WideContent } from '../Layouts/WideContent'
import { AdvancedImage } from '@cloudinary/react'
import { cld } from '../../cloudinary'
const breadcrumbArrow = cld.image('Ecommerce/breadcrumArrow').format('auto').quality('auto')

type Props = {
	product: {
		category: string
		name: string
	}
}

export const Breadcrumb = (props: Props): JSX.Element => {
	const { product } = props

	return (
		<WideContent className={styles.breadcrumb}>
			<Link className={styles.breadcrumbA} to="/">
				SHOP
			</Link>
			<AdvancedImage cldImg={breadcrumbArrow} alt="link arrow icon" />
			<Link className={styles.breadcrumbA} to={`/${product.category}`} data-testid="breadcrumbCategory">
				{product.category}
			</Link>
			<AdvancedImage cldImg={breadcrumbArrow} alt="arrow icon" />
			<span data-testid="breadcrumbItemName" className={styles.breadcrumbA}>
				{product.name}
			</span>
		</WideContent>
	)
}
