import React, { useState } from 'react'
import classes from './DescriptionBox.module.css'
import { useScroll } from 'framer-motion'

const DescriptionBox = props => {
	const { product } = props

	const data = [
		{
			feature: 'Description',
			answer: product.description,
		},
		{
			feature: 'Material composition',
			answer: product.madeOf,
		},
		{
			feature: 'Washing and maintenance rules',
			answer: product.maintenance.map(item => <p>{item.item}</p>),
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
					<div className={classes.item}>
						<div className={classes.title} onClick={() => toggle(i)}>
							<h2>{item.feature}</h2>
							<span>{selected === i ? '-' : '+'}</span>
						</div>
						<div className={selected === i ? `${classes.content} ${classes.show}` : `${classes.content}`}>
							{item.answer}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default DescriptionBox
