import classes from './Hero.module.css'
import arrow_icon from '../Assets/arrow.png'
import heroWoman_image from '../Assets/heroWoman_image.png'
import heroMan_image from '../Assets/heroMan_image.png'

const Hero = () => {
	const handleClickScroll = () => {
		const element = document.getElementById('new-collections')
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div>
			<div className={classes['text-top']}>
				<h1>NEW ARRIVALS ONLY</h1>
				<hr></hr>
			</div>
			<div className={classes.hero}>
				<div className={classes['hero-img-woman']}>
					<img src={heroWoman_image} alt="" />
				</div>
				<div className={classes['hero-text']}>
					<div>
						<p> new Collections</p>
						<p>For Everyone </p>
					</div>
					<div>
						<button onClick={handleClickScroll} className={classes.btn}>
							CHECK OUT
						</button>
					</div>
				</div>
				<div className={classes['hero-img-man']}>
					<img src={heroMan_image} alt="" />
				</div>
			</div>
		</div>
	)
}

export default Hero
