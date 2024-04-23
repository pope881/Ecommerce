import React, { useContext, useState } from 'react'
import { styles } from './ProductDisplay.styles'
import { CartContext } from '../../Context/cart-context'
import { ImageSlider } from './ImageSlider'
import { colorOptions } from '../../../public/mockData/mockData'
import { sizeOptions } from '../../../public/mockData/mockData'

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

export const ProductDisplay = (props: Props): JSX.Element => {
	const [valueSize, setValueSize] = useState('S')
	const [valueColor, setValueColor] = useState('BLACK')

	const { product } = props

	const cartCtx = useContext(CartContext)
	const { addItem } = cartCtx

	const handleSelectSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setValueSize(event.target.value)
	}

	const handleSelectColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setValueColor(event.target.value)
	}

	return (
		<div className={styles.productdisplay}>
			<div className={styles.productdisplayLeft}>
				<div className={styles.productdisplayImgList}>
					<img className={styles.productdisplayImgListImg} src={product.image_slide[0].url} alt="each product nr 1" />
					<img className={styles.productdisplayImgListImg} src={product.image_slide[1].url} alt="each product nr 2" />
					<img className={styles.productdisplayImgListImg} src={product.image_slide[2].url} alt="each product nr 3" />
					<img className={styles.productdisplayImgListImg} src={product.image_slide[3].url} alt="each product nr 4" />
				</div>
			</div>
			<div className={styles.productdisplaySliderContainer}>
				<ImageSlider product={product} />
			</div>

			<div className={styles.productdisplayRight}>
				<h1 className={styles.productdisplayRightH1}>{product.name}</h1>
				<div className={styles.productdisplayStars}>
					<img src="/otherImg/starIcon.png" alt="star icon" />
					<img src="/otherImg/starIcon.png" alt="star icon" />
					<img src="/otherImg/starIcon.png" alt="star icon" />
					<img src="/otherImg/starIcon.png" alt="star icon" />
					<img src="/otherImg/starIcon.png" alt="star icon" />
					<p>(+100)</p>
				</div>
				<div className={styles.productdisplayPrices}>
					<div className={styles.productdisplayPriceOld}>${product.old_price}</div>
					<div className={styles.productdisplayPriceNew}>New Price: ${product.new_price}</div>
				</div>
				<div>
					<h1 className={styles.productdisplaySelectsH1}>Select size</h1>
					<div className={styles.productdisplaySelectContainer}>
						<select className={styles.productdisplaySelectBox} onChange={handleSelectSize}>
							{sizeOptions.map(option => (
								<option className={styles.productdisplaySelectBoxOption} key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						<div className={styles.productdisplayIconContainer}>
							<i className="fa-solid fa-circle-arrow-down"></i>
						</div>
					</div>
					<h1 className={styles.productdisplaySelectsH1}>Select color</h1>
					<div className={styles.productdisplaySelectContainer}>
						<select className={styles.productdisplaySelectBox} onChange={handleSelectColor}>
							{colorOptions.map(option => (
								<option
									className={styles.productdisplaySelectBoxOption}
									key={option.value}
									value={option.value}
									style={{ color: `${option.color}` }}>
									{option.label}
								</option>
							))}
						</select>
						<div className={styles.productdisplayIconContainer}>
							<i className="fa-solid fa-circle-arrow-down"></i>
						</div>
					</div>
				</div>
				<div>
					<button
						className={styles.productdisplayRightButton}
						onClick={() => {
							addItem({
								id: product.id,
								name: product.name,
								amount: 1,
								price: product.new_price,
								image: product.image,
								size: valueSize,
								color: valueColor,
							})
						}}>
						ADD TO CART
					</button>
				</div>
				<p className={styles.productdisplayRightCategory}>
					<span className={styles.productdisplayRightCategorySpan}>Category: {product.clothes_type}</span>
				</p>
			</div>
		</div>
	)
}
