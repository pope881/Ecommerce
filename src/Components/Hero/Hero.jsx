import classes from './Hero.module.css'
import heroWoman_image from '../Assets/otherImg/heroWoman_image.png'
import heroManImage from '../Assets/otherImg/heroManImage.png'

const Hero = () => {
	const handleClickScroll = () => {
		const element = document.getElementById('new-collections')
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div>
			<div className={classes['hero__textTop']}>
				<h1>NEW ARRIVALS ONLY</h1>
				<hr></hr>
			</div>
			<div className={classes.hero}>
				<div className={classes['hero__img--Woman']}>
					<img src={heroWoman_image} alt="young girl dressed in sports clothes" />
				</div>
				<div className={classes['hero__text']}>
					<div>
						<p> new Collections</p>
						<p>For Everyone </p>
					</div>
					<div>
						<button onClick={handleClickScroll} className={classes['hero__btn']}>
							Check out
						</button>
					</div>
				</div>
				<div className={classes['hero__img--Man']}>
					<img src={heroManImage} alt="men dressed in sports clothes" />
				</div>
			</div>
		</div>
	)
}

export default Hero
