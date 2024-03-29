import React from 'react'
import { Item } from '../Item/Item'
import { dataProductWomen } from '../Assets/dataWomen'
import { styles } from './RelatedProducts.styles'
import { AllProduct } from '../Assets/allProduct'

export const RelatedProducts = () => {
	return (
		<div className={styles.relatedproducts}>
			<h1 className={styles.relatedproductsH1}>Other Products</h1>
			<hr className={styles.relatedproductsHr} />
			<div className={styles.relatedproductsItem}>
				{dataProductWomen.map((item: AllProduct, i: number) => {
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
				})}
			</div>
		</div>
	)
}
