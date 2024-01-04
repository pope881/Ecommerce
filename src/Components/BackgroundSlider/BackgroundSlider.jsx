import React, { useEffect, useState } from 'react'
import classes from './BackgroundSlider.module.css'

import MenBackground from '../Assets/backgroundSlider/MenBackground.jpg'
import WomanBackground from '../Assets/backgroundSlider/WomanBackground.jpg'
import KidsBackground from '../Assets/backgroundSlider/KidsBackground.jpg'

const imageSlide = [
	{ url: MenBackground, title: 'MEN', body: '' },
	{
		url: WomanBackground,
		title: 'WOMEN',
		body: '',
	},
	{ url: KidsBackground, title: 'KIDS', body: '' },
]

const BackgroundSlider = () => {
	const [currentState, setCurrentState] = useState(0)
	useEffect(() => {
		const timer = setTimeout(() => {
			if (currentState === imageSlide.length - 1) {
				setCurrentState(0)
			} else {
				setCurrentState(prevState => prevState + 1)
			}
		}, 4000)
		return () => clearTimeout(timer)
	}, [currentState])

	const bgImageStyle = {
		backgroundImage: `url(${imageSlide[currentState].url})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '100%',
		width: '100%',
	}

	const goToNext = currentState => {
		setCurrentState(currentState)
	}

	return (
		<div className={classes['container']}>
			<div className={classes['countiner-style']}>
				<div style={bgImageStyle}></div>
				<div className={classes['transparent-background']}></div>
				<div className={classes.description}>
					<div>
						<h1>{imageSlide[currentState].title}</h1>
						<p>{imageSlide[currentState].body}</p>
					</div>
					<div className={classes['carousel-boullt']}>
						{imageSlide.map((imageSlide, currentState) => (
							<span key={currentState} onClick={() => goToNext(currentState)}></span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BackgroundSlider
