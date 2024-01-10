import { useState } from 'react'
import classes from './ImageSlider.module.css'

const ImageSlider = ({ slides, product }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	console.log(product)

	const bgcImg = {
		backgroundImage: `url(${product.image_slide[currentIndex].url})`,
	}

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? product.image_slide.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const goToNext = () => {
		const isLastSlide = currentIndex === product.image_slide.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const goToSlide = slideIndex => {
		setCurrentIndex(slideIndex)
	}

	return (
		<div className={classes['imgslider']}>
			<div className={`${classes.imgsliderArrow} ${classes.imgsliderArrowLeft}`} onClick={goToPrevious}>
				<i class="fa-solid fa-arrow-left"></i>
			</div>
			<div className={`${classes.imgsliderArrow} ${classes.imgsliderArrowRight}`} onClick={goToNext}>
				<i class="fa-solid fa-arrow-right"></i>
			</div>
			<div style={bgcImg} className={classes['imgslider-slide']}>
				
			</div>
			<div className={classes['imgslider-dots']}>
				{product.image_slide.map((slide, slideIndex) => (
					<div key={slideIndex} className={classes['imgslider-dots-item']} onClick={() => goToSlide(slideIndex)}>
						<i class="fa-solid fa-circle"></i>
					</div>
				))}
			</div>
		</div>
	)
}

export default ImageSlider
