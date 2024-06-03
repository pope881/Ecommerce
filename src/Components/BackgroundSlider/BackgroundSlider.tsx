import { useEffect, useState } from 'react'
import { styles } from './BackgroundSlider.styles'
import { imageSlide } from '../../../public/mockData/mockData'

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

	const bgImageStyle = {
		backgroundImage: `url(${imageSlide[currentState].url})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '100%',
		width: '100%',
	}

	const changeSlide = (currentState: number) => {
		setCurrentState(currentState)
	}

	return (
		<div className={styles.container}>
			<div className={styles.containerBackground}>
				<div style={bgImageStyle} data-testid="imageSlideBg" />
				<div className={styles.containerBackgroundTransparent} />
				<div className={styles.containerDescription}>
					<div>
						<h1 className={styles.containerDescriptionH1}>{imageSlide[currentState].title}</h1>
						<p className={styles.containerDescriptionP} data-testid="imageSlideBody">{imageSlide[currentState].body}</p>
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
