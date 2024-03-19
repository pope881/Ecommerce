import React from 'react'
import { styles } from './NewCollections.styles'
import { newCollections } from '../Assets/newCollections'
import { Item } from '../Item/Item'
import { type DataProduct } from '../Assets/dataWomen'

export const NewCollections = () => {
	return (
		<div id="new-collections" className={styles.newCollections}>
			<h1 className={styles.newCollectionsH1}>NEW COLLECTIONS</h1>
			<hr className={styles.newCollectionsHr} />
			<div className={styles.newCollectionsCollection}>
				{newCollections.map((item: DataProduct, i: number) => {
					return (
						<Item
							key={i}
							id={item.id}
							name={item.name}
							image={item.image}
							new_price={item.new_price}
							old_price={item.old_price}
						/>
					)
				})}
			</div>
		</div>
	)
}
