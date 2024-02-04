import React, { useState } from 'react'
import classes from './Category.module.css'
import Item from '../Item/Item'
import womenProduct from '../Assets/womenProduct'

const WomenCat = props => {
	let product = womenProduct.map((item, i) => {
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
	// console.log(items)

	const filterItems = catItem => {
		const updatedItems = product.filter(curItem => {
			return curItem.props.clothes_type === catItem
		})
		seItems(updatedItems)
	}

	let numberOfProducts = <span>Showing {items.length} out of 12 products</span>

	return (
		<div className={classes['shopCategory']}>
			<img className={classes['shopCategory__banner']} src={props.banner} alt="banner" />
			<div className={classes['shopCategory__indexSort']}>
				<p>{numberOfProducts}</p>
				<div className={classes['shopCategory__actions']}>
					<button className={classes['shopCategory__btn']} onClick={() => seItems(product)}>
						All Products
					</button>
					<button className={classes['shopCategory__btn']} onClick={() => filterItems('Woman Blouse')}>
						Woman Blouse
					</button>
					<button className={classes['shopCategory__btn']} onClick={() => filterItems('Woman Shirt')}>
						Woman Shirt
					</button>
					<button className={classes['shopCategory__btn']} onClick={() => filterItems('Woman Trousers')}>
						Woman Trousers
					</button>
				</div>
			</div>
			<div className={classes['shopCategory__products']}>{items}</div>
			<div className={classes['shopCategory__actions']}>
				<button className={`${classes['shopCategory__btn']} ${classes['shopCategory__btn--disabled']}`}>
					Explore more
				</button>
			</div>
		</div>
	)
}

export default WomenCat
