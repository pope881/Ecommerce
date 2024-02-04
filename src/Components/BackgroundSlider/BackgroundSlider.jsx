import React, { useEffect, useState } from 'react'
import classes from './BackgroundSlider.module.css'
import menBackground from '../Assets/backgroundSliderImg/menBackground.jpg'
import womanBackground from '../Assets/backgroundSliderImg/womanBackground.jpg'
import kidsBackground from '../Assets/backgroundSliderImg/kidsBackground.jpg'

const imageSlide = [
	{ url: menBackground, title: 'MEN', body: '' },
	{
		url: womanBackground,
		title: 'WOMEN',
		body: '',
	},
	{ url: kidsBackground, title: 'KIDS', body: '' },
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
			<div className={classes['container__background']}>
				<div style={bgImageStyle}></div>
				<div className={classes['container__background--transparent']}></div>
				<div className={classes['container__description']}>
					<div>
						<h1>{imageSlide[currentState].title}</h1>
						<p>{imageSlide[currentState].body}</p>
					</div>
					<div className={classes['carousel__carousel']}>
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
