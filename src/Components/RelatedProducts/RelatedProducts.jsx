import React from 'react'
import classes from './RelatedProducts.module.css'
import Item from '../Item/Item'
import dataWoman from '../Assets/dataWoman'

const RelatedProducts = () => {
	return (
		<div className={classes['relatedproducts']}>
			<h1>Other Products</h1>
			<hr />
			<div className={classes['relatedproducts__item']}>
				{dataWoman.map((item, i) => {
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

export default RelatedProducts
