import React, { useEffect, useState } from 'react'
import classes from './Category.module.css'
import { Item } from '../Item/Item'

export const Category = props => {
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

	const filterItems = catItem => {
		const updatedItems = product.filter(curItem => {
			console.log({ curItem })
			console.log({ catItem })
			return curItem.props.clothes_type === catItem
		})

		setItems(updatedItems)
	}

	const numberOfProducts = <span>Showing {items.length} out of 12 products</span>

	const capitalizeFirstLetter = text => {
		return text.charAt(0).toUpperCase() + text.slice(1)
	}

	const destinationPerson = capitalizeFirstLetter(props.category)

	// console.log(capitalizeFirstLetter(props.category))
	console.log({ props })

	return (
		<div className={classes['shopCategory']}>
			<img className={classes['shopCategory__banner']} src={props.banner} alt="banner" />
			<div className={classes['shopCategory__indexSort']}>
				<p>{numberOfProducts}</p>
				<div className={classes['shopCategory__actions']}>
					<button className={classes['shopCategory__btn']} onClick={() => setItems(product)}>
						All Products
					</button>
					<button className={classes['shopCategory__btn']} onClick={() => filterItems(`${destinationPerson} Blouse`)}>
						{`${destinationPerson} Blouse`}
					</button>
					<button className={classes['shopCategory__btn']} onClick={() => filterItems(`${destinationPerson} Shirt`)}>
						{`${destinationPerson} Shirt`}
					</button>
					<button className={classes['shopCategory__btn']} onClick={() => filterItems(`${destinationPerson} Trousers`)}>
						{`${destinationPerson} Trousers`}
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
