import React, { useContext } from 'react'
import classes from './Category.module.css'
import CartContext from '../../Context/cart-context'
import all_product from '../Assets/all_product'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Item/Item'

const Category = props => {
	// const cartCtx = useContext(CartContext)
	// const { all_product } = cartCtx


	return (
		<div className={classes['shop-category']}>
			<img className={classes['shopcategory-banner']} src={props.banner} alt="" />
			<div className={classes['shopcategoty-indexSort']}>
				<p>
					<span>Showing 1-12</span> out of 36 products
				</p>
				<div className={classes['shopcategory-sort']}>
					Sort by <img src={dropdown_icon} alt="" />
				</div>
			</div>
			<div className={classes['shopcategory-products']}>
				{all_product.map((item, i) => {
					if (props.category === item.category) {
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
					} else {
						return null
					}
				})}
			</div>
			<div className={classes['shopcategory-loadmore']}>Explore more</div>
		</div>
	)
}

export default Category
