import { useEffect, useState } from 'react'
import { styles } from './Category.styles'
import { Item } from '../Item/Item'
import { type AllProduct } from '../../../public/allProduct'
import { WideContent } from '../Layouts/WideContent'

// export type GroupProduct = {
// 	id: number
// 	name: string
// 	category: string
// 	clothes_type: string
// 	image: string
// 	image_slide: { url: string }[]
// 	new_price: number
// 	old_price: number
// 	description: string
// 	madeOf: string
// 	maintenance: { item: string }[]
// }

type Props = {
	groupProducts: AllProduct[]
	banner: string
	category: string
}

export const Category = (props: Props): JSX.Element => {
	const product = props.groupProducts.map((item, i) => {
		return (
			<Item
				key={i}
				id={item.id}
				name={item.name}
				image={item.image}
				new_price={item.new_price}
				old_price={item.old_price}
				clothes_type={item.clothes_type}
			/>
		)
	})
	const [items, setItems] = useState(product)

	useEffect(() => {
		setItems(product)
	}, [props.category])

	const filterItems = (catItem: string) => {
		const updatedItems = product.filter(curItem => {
			return curItem.props.clothes_type === catItem
		})

		setItems(updatedItems)
	}

	const capitalizeFirstLetter = (text: string) => {
		return text.charAt(0).toUpperCase() + text.slice(1)
	}

	const destinationPerson = capitalizeFirstLetter(props.category)

	return (
		<WideContent>
			<div className={styles.shopCategory}>
				<img className={styles.shopCategoryBanner} src={props.banner} alt="banner" />
				<div className={styles.shopCategoryIndexSort}>
					<div className={styles.shopCategoryActions}>
						<button className={styles.shopCategoryBtn} onClick={() => setItems(product)}>
							All Products
						</button>
						<button className={styles.shopCategoryBtn} onClick={() => filterItems(`${destinationPerson} Blouse`)}>
							{`${destinationPerson} Blouse`}
						</button>
						<button className={styles.shopCategoryBtn} onClick={() => filterItems(`${destinationPerson} Shirt`)}>
							{`${destinationPerson} Shirt`}
						</button>
						<button className={styles.shopCategoryBtn} onClick={() => filterItems(`${destinationPerson} Trousers`)}>
							{`${destinationPerson} Trousers`}
						</button>
					</div>
					<p className={styles.shopCategoryIndexSortPSpan}>{`Showing ${items.length} out of 12 products`}</p>
				</div>
				<div className={styles.shopCategoryProducts}>{items}</div>
				<div className={styles.shopCategoryActions}>
					<button className={`${styles.shopCategoryBtn} ${styles.shopCategoryBtnDisabled}`}>Explore more</button>
				</div>
			</div>
		</WideContent>
	)
}
