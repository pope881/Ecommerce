import React from 'react'
import classes from './Popular.module.css'
import dataWoman from '../Assets/dataWoman'
import dataMen from '../Assets/dataMen'
import dataKids from '../Assets/dataKids'
import Item from '../Item/Item'

const Popular = () => {
	return (
		<div>
			<div className={classes.popular}>
				<h1>MOST POPULAR IN WOMAN</h1>
				<hr></hr>
				<div className={classes['popular__item']}>
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
			<div className={classes.popular}>
				<h1>MOST POPULAR IN MAN</h1>
				<hr></hr>
				<div className={classes['popular__item']}>
					{dataMen.map((item, i) => {
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
			<div className={classes.popular}>
				<h1>MOST POPULAR IN KIDS</h1>
				<hr></hr>
				<div className={classes['popular__item']}>
					{dataKids.map((item, i) => {
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
		</div>
	)
}

export default Popular
