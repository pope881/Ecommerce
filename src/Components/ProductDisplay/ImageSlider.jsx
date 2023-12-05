import { useState } from 'react'
import classes from './ImageSlider.module.css'

const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const bgcImg = {
		backgroundImage: `url(${slides[currentIndex].url})`,
	}

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1
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
				ImageSlider
			</div>
			<div className={classes['imgslider-dots']}>
				{slides.map((slide, slideIndex) => (
					<div key={slideIndex} className={classes['imgslider-dots-item']} onClick={() => goToSlide(slideIndex)}>
						<i class="fa-solid fa-circle"></i>
					</div>
				))}
			</div>
		</div>
	)
}

export default ImageSlider
