import about_img from '../Assets/about/about-6.png'
import classes from './AboutUs.module.css'
import { motion } from 'framer-motion'

const AboutUs = () => {
	return (
		<section className={classes.aboutUs}>
			<motion.div
				className={classes['aboutUs-mainImg']}
				initial={{ opacity: 1, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 2 }}>
				<img src={about_img} alt="" />
			</motion.div>
			<motion.div
				className={classes['aboutUs-text']}
				initial={{ opacity: 1, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 2, delay: 2 }}>
				<h4>About</h4>
				<h1>We aim to empower you to look and feel confident</h1>
				<hr />
				<p>
					We are a global brand for all of you, we believe in affordable fashion for all. We are the number 1
					destination for fashion and lifestyle for all the occasions in your life. A passionate drive to exceed
					expectations. For more than 15 years, we've worked to deliver the best possible shopping experience, helping
					our customers express their style—not just buy fashion.
				</p>

				<div className={classes['aboutUs-lastText']}>
					<div className={classes['aboutUs-lastText-text']}>
						<h3>15y+</h3>
						<h5>Online Shopping</h5>
					</div>
					<div className={classes['aboutUs-lastText-text']}>
						<h3>20k+</h3>
						<h5>Happy Clients</h5>
					</div>
					<div className={classes['aboutUs-lastText-text']}>
						<h3>80+</h3>
						<h5>Countries</h5>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default AboutUs
