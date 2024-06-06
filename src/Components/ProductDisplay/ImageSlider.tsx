import { AdvancedImage } from '@cloudinary/react'
import { cld } from '../../cloudinary'
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
		maintenance: { feature: string }[]
	}
	currentImage: string
	onImageChange: (newImage: string) => void
}

export const ImageSlider = ({ product, onImageChange, currentImage }: Props): JSX.Element => {
	const mainImageURL = cld.image(currentImage).format('auto').quality('auto')

	const goToPreviousSlide = () => {
		const slideIndex = product.image_slide.findIndex(slide => slide.url === currentImage)
		const { length } = product.image_slide
		if (slideIndex === 0) {
			return onImageChange(product.image_slide[length - 1].url)
		}
		onImageChange(product.image_slide[slideIndex - 1].url)
	}

	const goToNextSlide = () => {
		const slideIndex = product.image_slide.findIndex(slide => slide.url === currentImage)
		const { length } = product.image_slide
		if (slideIndex === length - 1) {
			return onImageChange(product.image_slide[0].url)
		}
		onImageChange(product.image_slide[slideIndex + 1].url)
	}

	return (
		<div className={styles.imgSlider}>
			<div className={`${styles.imgSliderArrow} ${styles.imgSliderArrowLeft}`} onClick={goToPreviousSlide}>
				<i className="fa-solid fa-circle-arrow-left"></i>
			</div>
			<div className={`${styles.imgSliderArrow} ${styles.imgSliderArrowRight}`} onClick={goToNextSlide}>
				<i className="fa-solid fa-circle-arrow-right"></i>
			</div>
			<AdvancedImage cldImg={mainImageURL} className={styles.imgSliderSlide} alt="product main image " />
			<div className={styles.imgSliderDots}>
				{product.image_slide.map((image, slideIndex) => (
					<div key={slideIndex} className={styles.imgSliderDot} onClick={() => onImageChange(image.url)}>
						<i className="fa-solid fa-circle"></i>
					</div>
				))}
			</div>
		</div>
	)
}
