import { styles } from './Offers.styles'
import { useNavigate } from 'react-router-dom'
import exlusiveImage from '../../../public/otherImg/exclusiveImage.png'
import { WideContent } from '../Layouts/WideContent'

export const Offers = (): JSX.Element => {
	const navigate = useNavigate()
	const navigateHandler = () => {
		navigate('/women')
		window.scrollTo(0, 0)
	}
	return (
		<WideContent>
			<div className={styles.offers}>
				<div className={styles.offersLeft}>
					<h1 className={styles.offersLeftH1}>Exclusive Offers For Woman</h1>
					<p className={styles.offersLeftP}>ONLY ON BEST SELLERS PRODUCTS</p>
					<div>
						<button className={styles.offersLeftButton} onClick={navigateHandler}>
							Check now
						</button>
					</div>
				</div>
				<div className={styles.offersRight}>
					<img src={exlusiveImage} alt="woman dressed jeans and black t-shirt" />
				</div>
			</div>
		</WideContent>
	)
}
