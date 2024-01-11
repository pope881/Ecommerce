import React, { useContext, useState } from 'react'
import classes from './Category.module.css'
import all_product from '../Assets/all_product'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Item/Item'

const Category = props => {
	const abc = all_product.map((item, i) => {
		if (props.category === item.category) {
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
		} else {
			return null
		}
	})
	const [items, seItems] = useState(abc)
	console.log(items)
	console.log(abc);

	const filterItems = catItem => {
		const updatedItems = abc.filter(curItem => {
			return curItem.clothes_type === catItem
		})
		seItems(updatedItems)
	}

	return (
		<div className={classes['shop-category']}>
			<img className={classes['shopcategory-banner']} src={props.banner} alt="" />
			<div className={classes['shopcategoty-indexSort']}>
				<p>
					<span>Showing 1-12</span> out of 12 products
				</p>
				<div>
					<button onClick={() => filterItems('Woman Blouse')}>Woman Blouse</button>
					<button>Woman Shirt</button>
					<button>Woman Trousers</button>
				</div>
			</div>
			<div className={classes['shopcategory-products']}>{items}</div>
			<div className={classes['shopcategory-loadmore']}>Explore more</div>
		</div>
	)
}

export default Category
