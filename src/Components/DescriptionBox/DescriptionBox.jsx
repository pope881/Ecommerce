import React from 'react'
import classes from './DescriptionBox.module.css'
const DescriptionBox = props => {
	const { product } = props

	const data = [
		{
			question: 'Question 1',
			answer: `lkrmlkermlekmrkemrlkemlkrmelkrmlkemr
				loremloremloreloremlorermekrmlekmrkemrlkemlkrme`,
		},
		{
			question: 'Question 2',
			answer:
				'loremloremloreloremlorermekrmlekmrkemrlkemlkrmelkrmlkemrloremloremloreloremlorermekrmlekmrkemrlkemlkrmelkrmlkemsassssssssssssssssssssssssssssssssasas',
		},
		{
			question: 'Question 3',
			answer:
				'loremloremloreloremlorermekrmlekmrkemrlkemlkrmelkrmlkemrloremloremloreloremlorermekrmlekmrkemrlkemlkrmelkrmlkemr',
		},
		{
			question: 'Question 4',
			answer:
				'loremloremloreloremlorermekrmlekmrkemrlkemlkrmelkrmlkemrloremloremloreloremlorermekrmlekmrkemrlkemlkrmelkrmlkemr',
		},
	]

	return (
		<div>
			<div className={classes['descriptionbox']}>
				<div className={classes['descriptionbox-navigator']}>
					<div className={classes['descriptionbox-nav-box']}>Description</div>
					<div className={`${classes['descriptionbox-nav-box']} ${classes['fade']}`}>Reviews (122)</div>
				</div>
				<div className={classes['descriptionbox-description']}>
					<p>{product.description}</p>
				</div>
			</div>
			<div className={classes.wrapper}>
				<div className={classes.accordion}>
					{data.map((item, i) => (
						<div className={classes.item}>
							<div className={classes.title}>
								<h2>{item.question}</h2>
								<span>+</span>
							</div>
							<div className={classes.content}>
								<p>{item.answer}</p>
								{/* <p>{product.description}</p> */}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default DescriptionBox
