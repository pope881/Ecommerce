import React, { useEffect, useState } from 'react'
import { styles } from './Category.styles'
import { Item } from '../Item/Item'

type GroupProduct = {
	id: number
	name: string
	category: string
	clothes_type: string
	image: string
	image_slide: { url: string }[]
	new_price: number
	old_price: number
	description: string
	madeOf: string
	maintenance: { item: string }[]
}

type Props = {
	groupProducts: GroupProduct[]
	banner: string
	category: string
}

export const Category = (props: Props): JSX.Element => {
	// console.log(props)
	// console.log(props.groupProducts)

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
		console.log({ catItem })
		const updatedItems = product.filter(curItem => {
			console.log({ curItem })
			return curItem.props.clothes_type === catItem
		})

		setItems(updatedItems)
	}

	const numberOfProducts = (
		<span className={styles.shopCategoryIndexSortSpan}>Showing {items.length} out of 12 products</span>
	)

	const capitalizeFirstLetter = (text: string) => {
		return text.charAt(0).toUpperCase() + text.slice(1)
	}

	const destinationPerson = capitalizeFirstLetter(props.category)

	return (
		<div className={styles.shopCategory}>
			<img className={styles.shopCategoryBanner} src={props.banner} alt="banner" />
			<div className={styles.shopCategoryIndexSort}>
				<p className={styles.shopCategoryIndexSortPSpan}>{numberOfProducts}</p>
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
			</div>
			<div className={styles.shopCategoryProducts}>{items}</div>
			<div className={styles.shopCategoryActions}>
				<button className={`${styles.shopCategoryBtn} ${styles.shopCategoryBtnDisabled}`}>Explore more</button>
			</div>
		</div>
	)
}
