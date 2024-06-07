import { useEffect, useState } from 'react'
import { styles } from './BackgroundSlider.styles'
import { imageSlide } from '../../../public/mockData/mockData'
import { AdvancedImage } from '@cloudinary/react'
import { cld } from '../../cloudinary'

export const BackgroundSlider = (): JSX.Element => {
	const [currentState, setCurrentState] = useState<number>(0)
	useEffect(() => {
		const timer = setTimeout(() => {
			if (currentState === imageSlide.length - 1) {
				setCurrentState(0)
			} else {
				setCurrentState(prevState => prevState + 1)
			}
		}, 6000)
		return () => clearTimeout(timer)
	}, [currentState])

	const changeSlide = (currentState: number) => {
		setCurrentState(currentState)
	}
	const imageURL = cld.image(imageSlide[currentState].url)

	return (
		<div className={styles.container}>
			<div className={styles.containerBackground}>
				<AdvancedImage
					cldImg={imageURL}
					className={styles.imageSlideBg}
					alt="background image"
					data-testid="imageSlideBg"
				/>
				<div className={styles.containerBackgroundTransparent} />
				<div className={styles.containerDescription}>
					<div>
						<h1 className={styles.containerDescriptionH1}>{imageSlide[currentState].title}</h1>
						<p className={styles.containerDescriptionP} data-testid="imageSlideBody">
							{imageSlide[currentState].body}
						</p>
					</div>
					<div className={styles.carouselCarousel}>
						{imageSlide.map((_, currentState) => (
							<button
								className={styles.carouselCarouselSpan}
								key={currentState}
								onClick={() => changeSlide(currentState)}></button>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
