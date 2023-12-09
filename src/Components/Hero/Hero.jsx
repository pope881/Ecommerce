import classes from './Hero.module.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
	return (
		<div className={classes.hero}>
			<div className={classes['hero-left']}>
				<h2>NEW ARRIVALS ONLY</h2>
				<div>
					<div className={classes['hero-hand-icon']}>
						<p>new</p>
						<img src={hand_icon} alt=""></img>
					</div>
					<p>collections</p>
					<p>for everyone</p>
				</div>
				<div className={classes['hero-latest-btn']}>
					<div>Latest Collection</div>
					<img src={arrow_icon} alt="" />
				</div>
			</div>
			<div className={classes['hero-right']}>
				<img src={hero_image} alt="" />
			</div>
		</div>
	)
}

export default Hero
