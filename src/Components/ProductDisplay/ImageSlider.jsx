import { useState } from 'react'
import classes from './ImageSlider.module.css'

const ImageSlider = ({ slides, product }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

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
		<div className={classes['imgSlider']}>
			<div className={`${classes['imgSlider__arrow']} ${classes['imgSlider__arrow--left']}`} onClick={goToPrevious}>
				<i className="fa-solid fa-arrow-left"></i>
			</div>
			<div className={`${classes['imgSlider__arrow']} ${classes['imgSlider__arrow--right']}`} onClick={goToNext}>
				<i className="fa-solid fa-arrow-right"></i>
			</div>
			<div style={bgcImg} className={classes['imgSlider__slide']}></div>
			<div className={classes['imgSlider__dots']}>
				{product.image_slide.map((slide, slideIndex) => (
					<div key={slideIndex} className={classes['imgSlider__dot']} onClick={() => goToSlide(slideIndex)}>
						<i className="fa-solid fa-circle"></i>
					</div>
				))}
			</div>
		</div>
	)
}

export default ImageSlider
