import { useState } from 'react'
import { styles } from './DescriptionBox.styles'
import { WideContent } from '../Layouts/WideContent'

type Props = {
	product: {
		id: number
		name: string
		category: string
		clothes_type: string
		image: string
		image_slide: { url: string }[]
		new_price: number
		old_price: number
		description: string
		madeOf: string
		maintenance: { feature: string }[]
	}
}

export const DescriptionBox = (props: Props): JSX.Element => {
	const [selected, setSelected] = useState<number | null>(null)
	const { product } = props

	const dataDescription = [
		{
			id: 0,
			feature: 'Description',
			text: product.description,
		},
		{
			id: 1,
			feature: 'Material composition',
			text: product.madeOf,
		},
		{
			id: 2,
			feature: 'Washing and maintenance rules',
			text: product.maintenance.map((item: { feature: string }, i) => {
				return (
					<div key={i} className={styles.accordionItemContentDiv}>
						{item.feature}
					</div>
				)
			}),
		},
	]

	const toggle = (i: number) => {
		if (selected === i) {
			return setSelected(null)
		}
		setSelected(i)
	}

	return (
		<WideContent className={styles.wrapper}>
			<div className={styles.accordion}>
				{dataDescription.map((item, i) => (
					<div key={item.id} className={styles.accordionItem}>
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
							<div className={styles.accordionItemContentDiv}>{item.text}</div>
						</div>
					</div>
				))}
			</div>
		</WideContent>
	)
}
