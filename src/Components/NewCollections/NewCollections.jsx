import React from 'react'
import classes from './NewCollections.module.css'
import newCollections from '../Assets/newCollections'
import {Item} from '../Item/Item'

const NewCollections = () => {
	return (
		<div id="new-collections" className={classes['newCollections']}>
			<h1>NEW COLLECTIONS</h1>
			<hr />
			<div className={classes['newCollections__collection']}>
				{newCollections.map((item, i) => {
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

export default NewCollections
