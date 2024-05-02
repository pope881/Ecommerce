import { useEffect, useState } from 'react'
import { styles } from './BackgroundSlider.styles'
import { imageSlide } from '../../../public/mockData/mockData'

export const BackgroundSlider = () => {
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

	const goToNext = (currentState: number) => {
		setCurrentState(currentState)
	}

	return (
		<div className={styles.container}>
			<div className={styles.containerBackground}>
				<div style={bgImageStyle}></div>
				<div className={styles.containerBackgroundTransparent}></div>
				<div className={styles.containerDescription}>
					<div>
						<h1 className={styles.containerDescriptionH1}>{imageSlide[currentState].title}</h1>
						<p className={styles.containerDescriptionP}>{imageSlide[currentState].body}</p>
					</div>
					<div className={styles.carouselCarousel}>
						{imageSlide.map((_, currentState) => (
							<span
								className={styles.carouselCarouselSpan}
								key={currentState}
								onClick={() => goToNext(currentState)}></span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
