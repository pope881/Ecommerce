import React, { useState } from 'react'
import classes from './DescriptionBox.module.css'

const DescriptionBox = props => {
	const { product } = props

	const data = [
		{
			feature: 'Description',
			text: product.description,
		},
		{
			feature: 'Material composition',
			text: product.madeOf,
		},
		{
			feature: 'Washing and maintenance rules',
			text: product.maintenance.map(item => <p>{item.item}</p>),
		},
	]
	const [selected, setSelected] = useState(null)

	const toggle = i => {
		if (selected === i) {
			return setSelected(null)
		}
		setSelected(i)
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.accordion}>
				{data.map((item, i) => (
					<div key={i} className={classes['accordion__item']}>
						<div className={classes['accordion__itemTitle']} onClick={() => toggle(i)}>
							<h2>{item.feature}</h2>
							<span>{selected === i ? '-' : '+'}</span>
						</div>
						<div
							className={
								selected === i
									? `${classes['accordion__itemContent']} ${classes['accordion__itemShow']}`
									: `${classes['accordion__itemContent']}`
							}>
							<p>{item.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default DescriptionBox
