import React, { useState } from 'react'
import { styles } from './DescriptionBox.styles'

type Props = {
	product: {
		id: number
		name: string
		category: string
		clothes_type: string
		image: string
		image_slide: { url: string }[]
		new_price: number
		old_price: string
		description: string
		madeOf: string
		maintenance: { item: string }[]
	}
}


const DescriptionBox = (props: Props): JSX.Element => {
	const { product } = props

	console.log({ product })

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
			text: product.maintenance.map((item: any) => {
				return <p className={styles.accordionItemContentP}>{item.item}</p>
			}),
		},
	]
	const [selected, setSelected] = useState(null)

	const toggle = (i: any) => {
		if (selected === i) {
			return setSelected(null)
		}
		setSelected(i)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.accordion}>
				{data.map((item, i) => (
					<div key={i} className={styles.accordionItem}>
						<div className={styles.accordionItemTitle} onClick={() => toggle(i)}>
							<h2 className={styles.accordionItemTitleH2}>{item.feature}</h2>
							<span className={styles.accordionItemTitleSpan}>{selected === i ? '-' : '+'}</span>
						</div>
						<div
							className={
								selected === i
									? `${styles.accordionItemContent} ${styles.accordionItemShow}`
									: `${styles.accordionItemContent}`
							}>
							<p className={styles.accordionItemContentP}>{item.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default DescriptionBox
