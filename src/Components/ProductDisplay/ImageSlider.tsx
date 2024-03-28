import React from 'react'
import { useState } from 'react'
import { styles } from './ImageSlider.styles'

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
		maintenance: { item: string }[]
	}
}

export const ImageSlider = (props: Props): JSX.Element => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const { product } = props

	const bgcImg = {
		backgroundImage: `url(${product.image_slide[currentIndex].url})`,
	}

	const goToPreviousSlide = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? product.image_slide.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const goToNextSlide = () => {
		const isLastSlide = currentIndex === product.image_slide.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex)
	}

	return (
		<div className={styles.imgSlider}>
			<div className={`${styles.imgSliderArrow} ${styles.imgSliderArrowLeft}`} onClick={goToPreviousSlide}>
				<i className="fa-solid fa-circle-arrow-left"></i>
			</div>
			<div className={`${styles.imgSliderArrow} ${styles.imgSliderArrowRight}`} onClick={goToNextSlide}>
				<i className="fa-solid fa-circle-arrow-right"></i>
			</div>
			<div style={bgcImg} className={styles.imgSliderSlide}></div>
			<div className={styles.imgSliderDots}>
				{product.image_slide.map((slide, slideIndex) => (
					<div key={slideIndex} className={styles.imgSliderDot} onClick={() => goToSlide(slideIndex)}>
						<i className="fa-solid fa-circle"></i>
					</div>
				))}
			</div>
		</div>
	)
}
