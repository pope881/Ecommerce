import React, { useState } from 'react'
import classes from './Category.module.css'
import Item from '../Item/Item'
import kids_product from '../Assets/kids_product'

const WomenCat = props => {
	let product = kids_product.map((item, i) => {
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
	const [items, seItems] = useState(product)

	const filterItems = catItem => {
		const updatedItems = product.filter(curItem => {
			return curItem.props.clothes_type === catItem
		})
		seItems(updatedItems)
	}

	let numberOfProducts = <span>Showing {items.length} out of 12 products</span>

	return (
		<div className={classes['shop-category']}>
			<img className={classes['shopcategory-banner']} src={props.banner} alt="banner" />
			<div className={classes['shopcategoty-indexSort']}>
				<p>{numberOfProducts}</p>
				<div className={classes['form-actions']}>
					<button className={classes.button} onClick={() => seItems(product)}>
						All Products
					</button>
					<button className={classes.button} onClick={() => filterItems('Kid Blouse')}>
						Kid Blouse
					</button>
					<button className={classes.button} onClick={() => filterItems('Kid Shirt')}>
						Kid Shirt
					</button>
					<button className={classes.button} onClick={() => filterItems('Kid Trousers')}>
						Kid Trousers
					</button>
				</div>
			</div>
			<div className={classes['shopcategory-products']}>{items}</div>
			<div className={classes['shopcategory-loadmore']}>Explore more</div>
		</div>
	)
}

export default WomenCat
