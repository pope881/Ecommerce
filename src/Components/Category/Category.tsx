import { useEffect, useState } from 'react'
import { styles } from './Category.styles'
import { Item } from '../Item/Item'
import { type AllProduct } from '../../../public/allProduct'
import { WideContent } from '../Layouts/WideContent'

type Props = {
	groupProducts: AllProduct[]
	banner: string
	category: string
}

export const capitalizeFirstLetter = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1)
}

export const Category = (props: Props): JSX.Element => {
	const [category, setCategory] = useState(props.category)

	const destinationPerson = capitalizeFirstLetter(props.category)
	const filteredItems = props.groupProducts.filter(
		item => item.clothes_type === category || category === props.category
	)
	const capitalizedCategory = capitalizeFirstLetter(props.category)

	useEffect(() => {
		setCategory(props.category)
	}, [props.category])

	return (
		<WideContent>
			<div className={styles.shopCategory}>
				<img className={styles.shopCategoryBanner} src={props.banner} alt="banner" data-testid="bannerImg" />
				<div className={styles.shopCategoryIndexSort}>
					<div className={styles.shopCategoryActions}>
						<button className={styles.shopCategoryBtn} onClick={() => setCategory(props.category)}>
							All Products
						</button>
						<button className={styles.shopCategoryBtn} onClick={() => setCategory(`${capitalizedCategory} Blouse`)}>
							{`${destinationPerson} Blouse`}
						</button>
						<button className={styles.shopCategoryBtn} onClick={() => setCategory(`${capitalizedCategory} Shirt`)}>
							{`${destinationPerson} Shirt`}
						</button>
						<button className={styles.shopCategoryBtn} onClick={() => setCategory(`${capitalizedCategory} Trousers`)}>
							{`${destinationPerson} Trousers`}
						</button>
					</div>
					<p className={styles.shopCategoryIndexSortPSpan}>{`Showing ${filteredItems.length} out of 12 products`}</p>
				</div>
				<div className={styles.shopCategoryProducts}>
					{filteredItems.map((item, i) => (
						<Item
							key={i}
							id={item.id}
							name={item.name}
							image={item.image}
							new_price={item.new_price}
							old_price={item.old_price}
							clothes_type={item.clothes_type}
						/>
					))}
				</div>
				<div className={styles.shopCategoryActions}>
					<button className={`${styles.shopCategoryBtn} ${styles.shopCategoryBtnDisabled}`}>Explore more</button>
				</div>
			</div>
		</WideContent>
	)
}
